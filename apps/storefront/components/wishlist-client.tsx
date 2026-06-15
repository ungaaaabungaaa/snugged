"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import type { LocalWishlistItem } from "@snugged/types";
import { WISHLIST_KEY, getWishlist, removeFromWishlist } from "@/lib/storage";
import { formatPrice } from "@/lib/format";

export function WishlistClient() {
  const [items, setItems] = useState<LocalWishlistItem[]>([]);

  useEffect(() => {
    setItems(getWishlist());
    const refresh = () => setItems(getWishlist());
    window.addEventListener(`${WISHLIST_KEY}:changed`, refresh);
    return () => window.removeEventListener(`${WISHLIST_KEY}:changed`, refresh);
  }, []);

  if (!items.length) {
    return (
      <div className="rounded-[8px] border border-dashed border-line bg-surface p-10 text-center">
        <Heart className="mx-auto text-blush" />
        <p className="mt-3 font-semibold">No saved pieces yet</p>
        <Link href="/shop" className="mt-4 inline-flex rounded-full bg-blush px-5 py-3 text-white">
          Find something rare
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <article key={item.product_id} className="rounded-[8px] border border-line p-3">
          <Link href={`/product/${item.handle}`}>
            <img
              src={item.thumbnail}
              alt=""
              className="aspect-[4/5] w-full rounded-[8px] object-cover"
              loading="lazy"
            />
            <h2 className="mt-3 line-clamp-1 font-semibold">{item.title}</h2>
            {item.price ? <p className="text-sm text-muted">{formatPrice(item.price)}</p> : null}
          </Link>
          <div className="mt-3 flex gap-2">
            <Link
              href={`/product/${item.handle}`}
              className="grid h-10 flex-1 place-items-center rounded-full bg-blush text-white"
              aria-label="Open product"
            >
              <ShoppingBag size={18} />
            </Link>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-line"
              onClick={() => {
                removeFromWishlist(item.product_id);
                setItems(getWishlist());
              }}
              aria-label="Remove"
            >
              <Trash2 size={17} />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
