"use client";

import type { LocalCartItem, LocalWishlistItem } from "@snugged/types";

export const CART_KEY = "snugged_cart";
export const WISHLIST_KEY = "snugged_wishlist";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson<T>(key: string, value: T) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
  window.dispatchEvent(new Event(`${key}:changed`));
}

export function getCart() {
  return readJson<LocalCartItem[]>(CART_KEY, []);
}

export function addToCart(item: LocalCartItem) {
  const cart = getCart();
  const existing = cart.find((cartItem) => cartItem.variant_id === item.variant_id);
  const available = item.inventory_quantity ?? Number.POSITIVE_INFINITY;

  if (existing) {
    existing.quantity = Math.min(existing.quantity + item.quantity, available);
    writeJson(CART_KEY, cart);
    return cart;
  }

  const next = [...cart, { ...item, quantity: Math.min(item.quantity, available) }];
  writeJson(CART_KEY, next);
  return next;
}

export function removeFromCart(variantId: string) {
  const next = getCart().filter((item) => item.variant_id !== variantId);
  writeJson(CART_KEY, next);
  return next;
}

export function updateCartQuantity(variantId: string, quantity: number) {
  const next = getCart()
    .map((item) =>
      item.variant_id === variantId
        ? {
            ...item,
            quantity: Math.max(
              1,
              Math.min(quantity, item.inventory_quantity ?? Number.POSITIVE_INFINITY),
            )
          }
        : item,
    )
    .filter((item) => item.quantity > 0);
  writeJson(CART_KEY, next);
  return next;
}

export function clearCart() {
  writeJson(CART_KEY, []);
}

export function getWishlist() {
  return readJson<LocalWishlistItem[]>(WISHLIST_KEY, []);
}

export function addToWishlist(item: LocalWishlistItem) {
  const wishlist = getWishlist();
  if (wishlist.some((wishlistItem) => wishlistItem.product_id === item.product_id)) {
    return wishlist;
  }

  const next = [...wishlist, item];
  writeJson(WISHLIST_KEY, next);
  return next;
}

export function removeFromWishlist(productId: string) {
  const next = getWishlist().filter((item) => item.product_id !== productId);
  writeJson(WISHLIST_KEY, next);
  return next;
}

export function moveWishlistItemToCart(item: LocalWishlistItem, cartItem: LocalCartItem) {
  addToCart(cartItem);
  return removeFromWishlist(item.product_id);
}

export async function syncCartAfterAuth(customerId: string) {
  return { customerId, items: getCart(), synced: false, mode: "stub" as const };
}

export async function syncWishlistAfterAuth(customerId: string) {
  return { customerId, items: getWishlist(), synced: false, mode: "stub" as const };
}
