import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function CheckoutFailurePage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <AlertCircle className="mx-auto text-blush" size={48} />
      <h1 className="mt-5 text-4xl font-black">Payment failed</h1>
      <p className="mt-3 text-muted">
        This page is ready for Razorpay failure handling and WhatsApp payment-failed notifications.
      </p>
      <Link href="/checkout" className="mt-8 inline-flex rounded-full bg-blush px-6 py-4 text-white">
        Return to checkout
      </Link>
    </main>
  );
}
