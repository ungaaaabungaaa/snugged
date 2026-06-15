import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center">
      <CheckCircle2 className="mx-auto text-green-600" size={48} />
      <h1 className="mt-5 text-4xl font-black">Order placed</h1>
      <p className="mt-3 text-muted">
        This is the success stub. Real orders will complete in Medusa and trigger WhatsApp confirmation.
      </p>
      <Link href="/account/orders" className="mt-8 inline-flex rounded-full bg-blush px-6 py-4 text-white">
        View orders
      </Link>
    </main>
  );
}
