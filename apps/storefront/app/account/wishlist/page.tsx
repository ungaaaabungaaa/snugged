import { WishlistClient } from "@/components/wishlist-client";

export default function AccountWishlistPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="mb-3 text-4xl font-black">Synced wishlist</h1>
      <p className="mb-8 text-muted">Local wishlist syncs into the Medusa wishlist module after auth.</p>
      <WishlistClient />
    </main>
  );
}
