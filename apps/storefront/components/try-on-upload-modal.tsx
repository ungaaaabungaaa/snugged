"use client";

import { X } from "lucide-react";
import type { StoreProduct } from "@snugged/types";
import { TryOnResultPlaceholder } from "./try-on-result-placeholder";

export function TryOnUploadModal({
  product,
  open,
  onClose
}: {
  product: StoreProduct;
  open: boolean;
  onClose: () => void;
}) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] bg-ink/50 p-4">
      <div className="mx-auto mt-10 max-w-lg rounded-[8px] bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Try on {product.title}</h2>
            <p className="mt-1 text-sm text-muted">
              Upload UI is ready. Real generation starts after the AI provider is connected.
            </p>
          </div>
          <button className="rounded-full p-2 hover:bg-surface" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <label className="mt-5 grid min-h-40 cursor-pointer place-items-center rounded-[8px] border border-dashed border-line bg-surface p-6 text-center text-muted">
          <input type="file" accept="image/*" className="sr-only" />
          Upload an outfit/avatar image
        </label>
        <TryOnResultPlaceholder />
      </div>
    </div>
  );
}
