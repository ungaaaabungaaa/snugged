"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import type { CheckoutAddress, LocalCartItem } from "@snugged/types";
import { trackEvent } from "@snugged/analytics";
import { createPaymentSession, sendOtp, verifyOtp } from "@/lib/checkout";
import { getCart, syncCartAfterAuth, syncWishlistAfterAuth } from "@/lib/storage";
import { formatPrice } from "@/lib/format";

export function CheckoutFlow() {
  const [cart] = useState<LocalCartItem[]>(() => getCart());
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [address, setAddress] = useState<CheckoutAddress>({
    full_name: "",
    phone: "",
    email: "",
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country_code: "in"
  });
  const [paymentId, setPaymentId] = useState("");
  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  async function handleOtpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await sendOtp({ phone });
    setOtpSent(true);
    trackEvent("otp_requested", { phone });
  }

  async function handleVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = await verifyOtp({ phone, code });
    if (result.verified) {
      setCustomerId(result.customerId);
      setAddress((value) => ({ ...value, phone }));
      await syncCartAfterAuth(result.customerId);
      await syncWishlistAfterAuth(result.customerId);
      trackEvent("otp_verified", { customer_id: result.customerId });
    }
  }

  async function handlePayment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const session = await createPaymentSession({ cart, address });
    setPaymentId(session.paymentSessionId);
    trackEvent("payment_started", { amount: session.amount });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <section className="rounded-[8px] border border-line p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-blush/10 text-blush">
              <MessageCircle size={19} />
            </span>
            <div>
              <h2 className="font-bold">Phone verification</h2>
              <p className="text-sm text-muted">OTP is planned through WhatsApp/OpenWA.</p>
            </div>
          </div>
          <form onSubmit={handleOtpSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+91 phone number"
              className="min-h-12 flex-1 rounded-[8px] border border-line px-4"
              required
            />
            <button className="rounded-full bg-ink px-5 py-3 font-semibold text-white">
              Send OTP
            </button>
          </form>
          {otpSent ? (
            <form onSubmit={handleVerify} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                value={code}
                onChange={(event) => setCode(event.target.value)}
                placeholder="Enter 000000 in stub mode"
                className="min-h-12 flex-1 rounded-[8px] border border-line px-4"
                required
              />
              <button className="rounded-full bg-blush px-5 py-3 font-semibold text-white">
                Verify
              </button>
            </form>
          ) : null}
          {customerId ? (
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-green-700">
              <CheckCircle2 size={17} /> Verified as {customerId}
            </p>
          ) : null}
        </section>

        <form onSubmit={handlePayment} className="rounded-[8px] border border-line p-5">
          <h2 className="font-bold">Shipping address</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              ["full_name", "Full name"],
              ["email", "Email optional"],
              ["line1", "Address line 1"],
              ["line2", "Address line 2 optional"],
              ["city", "City"],
              ["state", "State"],
              ["postal_code", "PIN code"]
            ].map(([key, label]) => (
              <input
                key={key}
                value={String(address[key as keyof CheckoutAddress] ?? "")}
                onChange={(event) =>
                  setAddress((value) => ({ ...value, [key]: event.target.value }))
                }
                placeholder={label}
                className="min-h-12 rounded-[8px] border border-line px-4"
                required={!label.includes("optional")}
              />
            ))}
          </div>
          <button
            disabled={!customerId || cart.length === 0}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-blush px-6 py-4 font-semibold text-white disabled:bg-muted"
          >
            Create Razorpay Stub Session <ArrowRight size={18} />
          </button>
        </form>

        {paymentId ? (
          <section className="rounded-[8px] border border-line bg-surface p-5">
            <h2 className="font-bold">Payment session created</h2>
            <p className="mt-1 text-sm text-muted">
              Stub session `{paymentId}` is ready. Real Razorpay checkout opens when keys are added.
            </p>
            <div className="mt-4 flex gap-3">
              <Link href="/checkout/success" className="rounded-full bg-blush px-5 py-3 text-white">
                Simulate success
              </Link>
              <Link href="/checkout/failure" className="rounded-full border border-line px-5 py-3">
                Simulate failure
              </Link>
            </div>
          </section>
        ) : null}
      </div>
      <aside className="h-fit rounded-[8px] border border-line bg-surface p-5">
        <h2 className="text-xl font-bold">Order summary</h2>
        <div className="mt-4 space-y-3 text-sm">
          {cart.map((item) => (
            <div key={item.variant_id} className="flex justify-between gap-4">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
            </div>
          ))}
          <div className="border-t border-line pt-3">
            <div className="flex justify-between text-base">
              <span>Total</span>
              <span className="font-bold">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
