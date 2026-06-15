"use client";

import { useMemo, useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import type { StoreProduct } from "@snugged/types";
import { trackEvent } from "@snugged/analytics";
import { addToCart, addToWishlist } from "@/lib/storage";
import { formatPrice } from "@/lib/format";
import { ProductTryOnButton } from "./product-try-on-button";

export function ProductActions({ product }: { product: StoreProduct }) {
  const [variantId, setVariantId] = useState(product.variants[0]?.id);
  const [quantity, setQuantity] = useState(1);
  const variant = useMemo(
    () => product.variants.find((item) => item.id === variantId) || product.variants[0],
    [product.variants, variantId],
  );
  const soldOut = !variant || variant.inventory_quantity <= 0;

  function handleAddToCart() {
    if (!variant || soldOut) {
      return;
    }

    addToCart({
      product_id: product.id,
      variant_id: variant.id,
      quantity,
      title: product.title,
      handle: product.handle,
      thumbnail: product.thumbnail,
      price: variant.price.amount,
      currency_code: "inr",
      inventory_quantity: variant.inventory_quantity,
      added_at: new Date().toISOString()
    });
    trackEvent("cart_added", { product_id: product.id, variant_id: variant.id, quantity });
  }

  function handleWishlist() {
    addToWishlist({
      product_id: product.id,
      variant_id: variant?.id,
      title: product.title,
      handle: product.handle,
      thumbnail: product.thumbnail,
      price: variant?.price.amount,
      added_at: new Date().toISOString()
    });
    trackEvent("wishlist_added", { product_id: product.id });
  }

  return (
    <div className="space-y-5">
      <div className="rounded-[8px] bg-surface p-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted">Selected price</p>
            <p className="text-2xl font-bold">{formatPrice(variant?.price.amount ?? 0)}</p>
          </div>
          <button
            type="button"
            onClick={handleWishlist}
            className="grid h-12 w-12 place-items-center rounded-full bg-white text-blush"
            aria-label="Add to wishlist"
          >
            <Heart size={22} fill="currentColor" />
          </button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-sm font-semibold">Choose variant</p>
        <div className="flex flex-wrap gap-2">
          {product.variants.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setVariantId(item.id);
                setQuantity(1);
              }}
              className={
                item.id === variant?.id
                  ? "rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-line px-4 py-2 text-sm font-medium"
              }
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold">Quantity</p>
          <p className="text-sm text-muted">
            {variant?.inventory_quantity ?? 0} available
            {product.metadata.one_of_one ? " · one-of-one piece" : ""}
          </p>
        </div>
        <div className="flex items-center rounded-full border border-line">
          <button
            type="button"
            className="grid h-10 w-10 place-items-center"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
            aria-label="Decrease quantity"
          >
            <Minus size={18} />
          </button>
          <span className="w-10 text-center font-semibold">{quantity}</span>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center"
            onClick={() =>
              setQuantity((value) => Math.min(value + 1, variant?.inventory_quantity ?? 1))
            }
            aria-label="Increase quantity"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      <button
        type="button"
        disabled={soldOut}
        onClick={handleAddToCart}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blush px-6 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:bg-muted"
      >
        <ShoppingBag size={20} />
        {soldOut ? "Sold Out" : "Add To Cart"}
      </button>

      {product.metadata.ai_try_on_enabled ? <ProductTryOnButton product={product} /> : null}
    </div>
  );
}
