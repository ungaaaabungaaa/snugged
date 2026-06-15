import type { Metadata } from "next";
import { CartClient } from "@/components/cart-client";

export const metadata: Metadata = {
  title: "Cart",
  robots: { index: false, follow: false }
};

export default function CartPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-black">Cart</h1>
      <CartClient />
    </main>
  );
}
