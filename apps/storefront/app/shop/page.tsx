import type { Metadata } from "next";
import { FilterPanel } from "@/components/filter-panel";
import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop Fashion",
  description: "Shop thrift clothes, new fashion, jewellery, bags, shoes, and accessories."
};

export default function ShopPage() {
  const products = listProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-black">Shop all fashion</h1>
        <p className="mt-2 text-muted">Pagination, filters, and search interfaces are scaffolded for Medusa-backed data.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <FilterPanel />
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
