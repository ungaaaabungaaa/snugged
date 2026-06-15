import type { Metadata } from "next";
import { WishlistClient } from "@/components/wishlist-client";

export const metadata: Metadata = {
  title: "Wishlist",
  robots: { index: false, follow: false }
};

export default function WishlistPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-black">Wishlist</h1>
      <WishlistClient />
    </main>
  );
}
