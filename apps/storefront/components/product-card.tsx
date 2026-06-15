import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Star } from "lucide-react";
import type { StoreProduct } from "@snugged/types";
import { getLowestPrice, isSoldOut } from "@snugged/config";
import { formatPrice } from "@/lib/format";

export function ProductCard({ product }: { product: StoreProduct }) {
  const soldOut = isSoldOut(product);

  return (
    <article className="group">
      <Link href={`/product/${product.handle}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-surface">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-blush shadow-sm">
            <Heart size={19} fill="currentColor" />
          </span>
          {product.metadata.ai_try_on_enabled ? (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink/85 px-3 py-1 text-xs font-medium text-white">
              <Sparkles size={13} /> Try-on
            </span>
          ) : null}
          {soldOut ? (
            <span className="absolute inset-x-3 bottom-3 rounded-full bg-white/95 px-3 py-2 text-center text-sm font-semibold text-ink">
              Sold out
            </span>
          ) : null}
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="line-clamp-1 font-semibold">{product.title}</h3>
          <p className="line-clamp-1 text-sm text-muted">{product.subtitle || product.category}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold">{formatPrice(getLowestPrice(product))}</span>
            <span className="inline-flex items-center gap-1 text-sm text-muted">
              <Star size={15} className="fill-yellow-400 text-yellow-400" />
              {product.rating ?? 5}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
