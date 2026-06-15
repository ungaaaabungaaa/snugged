import Link from "next/link";
import { flatCategories } from "@snugged/config";

export function FilterPanel() {
  return (
    <aside className="space-y-6 rounded-[8px] border border-line bg-white p-4">
      <div>
        <h2 className="font-semibold">Categories</h2>
        <div className="mt-3 grid gap-2 text-sm text-muted">
          {flatCategories.slice(0, 18).map((category) => (
            <Link key={category.slug} href={`/shop/${category.slug}`} className="hover:text-blush">
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-semibold">Filters</h2>
        <div className="mt-3 grid gap-2 text-sm text-muted">
          <span>Condition: new, like new, good, vintage</span>
          <span>Size: S, M, L, XL, UK shoes</span>
          <span>Sort: newest, price low-high, price high-low</span>
        </div>
      </div>
    </aside>
  );
}
