"use client";

import { useState } from "react";
import { Camera, Sparkles } from "lucide-react";
import type { StoreProduct } from "@snugged/types";
import { trackEvent } from "@snugged/analytics";
import { TryOnUploadModal } from "./try-on-upload-modal";

export function ProductTryOnButton({ product }: { product: StoreProduct }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          trackEvent("tryon_started", { product_id: product.id });
        }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-blush px-6 py-4 font-semibold text-blush"
      >
        <Camera size={20} />
        Try On This Piece
      </button>
      <p className="flex items-center gap-2 text-sm text-muted">
        <Sparkles size={16} className="text-blush" />
        AI try-on is a placeholder flow until the provider key is connected.
      </p>
      <TryOnUploadModal product={product} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
