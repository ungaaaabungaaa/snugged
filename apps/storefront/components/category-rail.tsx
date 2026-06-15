import Link from "next/link";
import { Grid2X2, Shirt, ShoppingBag, Sparkles } from "lucide-react";
import { collections } from "@snugged/config";

const quickLinks = [
  { href: "/shop", label: "All Items", icon: Grid2X2 },
  { href: "/shop/dresses", label: "Dresses", icon: Sparkles },
  { href: "/shop/t-shirts", label: "T-Shirts", icon: Shirt },
  { href: "/shop/bags", label: "Bags", icon: ShoppingBag }
];

export function CategoryRail() {
  return (
    <div className="space-y-4">
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                index === 0
                  ? "inline-flex shrink-0 items-center gap-2 rounded-[8px] bg-blush px-4 py-2 text-sm font-semibold text-white"
                  : "inline-flex shrink-0 items-center gap-2 rounded-[8px] border border-line px-4 py-2 text-sm font-medium"
              }
            >
              <Icon size={16} /> {item.label}
            </Link>
          );
        })}
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto">
        {collections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/shop/${collection.slug}`}
            className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-sm text-muted hover:border-blush hover:text-blush"
          >
            {collection.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
