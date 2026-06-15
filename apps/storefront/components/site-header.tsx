import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, UserRound } from "lucide-react";
import { BRAND_NAME } from "@snugged/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/92 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-lg font-black text-white">
            S
          </span>
          <span className="hidden sm:inline">{BRAND_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/shop/one-of-one">One of One</Link>
          <Link href="/ai-try-on">AI Try-On</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link className="rounded-full p-2 hover:bg-surface" href="/search" aria-label="Search">
            <Search size={20} />
          </Link>
          <Link className="rounded-full p-2 hover:bg-surface" href="/wishlist" aria-label="Wishlist">
            <Heart size={20} />
          </Link>
          <Link className="rounded-full p-2 hover:bg-surface" href="/cart" aria-label="Cart">
            <ShoppingBag size={20} />
          </Link>
          <Link className="rounded-full p-2 hover:bg-surface" href="/account" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <button className="rounded-full p-2 hover:bg-surface md:hidden" aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
