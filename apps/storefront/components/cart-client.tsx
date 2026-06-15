"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { LocalCartItem } from "@snugged/types";
import { CART_KEY, getCart, removeFromCart, updateCartQuantity } from "@/lib/storage";
import { formatPrice } from "@/lib/format";

export function CartClient() {
  const [items, setItems] = useState<LocalCartItem[]>([]);

  useEffect(() => {
    setItems(getCart());
    const refresh = () => setItems(getCart());
    window.addEventListener(`${CART_KEY}:changed`, refresh);
    return () => window.removeEventListener(`${CART_KEY}:changed`, refresh);
  }, []);

  const subtotal = useMemo(
    () => items.reduce((total, item) => total + item.price * item.quantity, 0),
    [items],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="rounded-[8px] border border-dashed border-line bg-surface p-10 text-center">
            <p className="font-semibold">Your cart is empty</p>
            <Link href="/shop" className="mt-4 inline-flex rounded-full bg-blush px-5 py-3 text-white">
              Explore fashion
            </Link>
          </div>
        ) : (
          items.map((item) => (
            <div key={item.variant_id} className="flex gap-4 rounded-[8px] border border-line p-4">
              <img
                src={item.thumbnail}
                alt=""
                className="h-24 w-24 rounded-[8px] object-cover"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <Link href={`/product/${item.handle}`} className="font-semibold hover:text-blush">
                  {item.title}
                </Link>
                <p className="text-sm text-muted">{formatPrice(item.price)}</p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    className="grid h-9 w-9 place-items-center rounded-full border border-line"
                    onClick={() => {
                      updateCartQuantity(item.variant_id, item.quantity - 1);
                      setItems(getCart());
                    }}
                    aria-label="Decrease"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    className="grid h-9 w-9 place-items-center rounded-full border border-line"
                    onClick={() => {
                      updateCartQuantity(item.variant_id, item.quantity + 1);
                      setItems(getCart());
                    }}
                    aria-label="Increase"
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    className="ml-auto grid h-9 w-9 place-items-center rounded-full text-muted hover:bg-surface hover:text-blush"
                    onClick={() => {
                      removeFromCart(item.variant_id);
                      setItems(getCart());
                    }}
                    aria-label="Remove"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <aside className="h-fit rounded-[8px] border border-line bg-surface p-5">
        <h2 className="text-xl font-bold">Summary</h2>
        <div className="mt-5 space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Total ({items.reduce((total, item) => total + item.quantity, 0)} items)</span>
            <span className="font-semibold">{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping fee</span>
            <span className="font-semibold">{formatPrice(0)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="font-semibold">{formatPrice(0)}</span>
          </div>
          <div className="border-t border-line pt-3">
            <div className="flex justify-between text-base">
              <span>Sub total</span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
          </div>
        </div>
        <Link
          href="/checkout"
          className="mt-6 inline-flex w-full justify-center rounded-full bg-blush px-6 py-4 font-semibold text-white"
        >
          Continue to checkout
        </Link>
      </aside>
    </div>
  );
}
