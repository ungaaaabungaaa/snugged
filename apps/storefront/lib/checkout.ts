import type { CheckoutAddress, LocalCartItem } from "@snugged/types";

export type OtpRequest = {
  phone: string;
};

export type OtpVerification = {
  phone: string;
  code: string;
};

export async function sendOtp({ phone }: OtpRequest) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return {
    phone,
    expiresInSeconds: Number(process.env.OTP_TTL_SECONDS || 300),
    mode: process.env.OTP_MODE || "stub"
  };
}

export async function verifyOtp({ phone, code }: OtpVerification) {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return {
    phone,
    verified: code === "000000" || process.env.OTP_MODE !== "stub",
    customerId: `cus_${phone.replace(/\D/g, "").slice(-10)}`
  };
}

export async function createPaymentSession(input: {
  cart: LocalCartItem[];
  address: CheckoutAddress;
}) {
  const amount = input.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  return {
    provider: "razorpay",
    mode: "stub",
    amount,
    currency: "INR",
    paymentSessionId: `pay_stub_${Date.now()}`,
    address: input.address
  };
}
