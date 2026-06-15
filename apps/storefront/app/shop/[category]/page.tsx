import type { Metadata } from "next";
import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";
import { titleCase } from "@/lib/format";

export async function generateMetadata({
  params
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const title = titleCase(category);
  return {
    title,
    description: `Shop ${title} fashion pieces on Snugged.Shop.`
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const products = listProducts({ category });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-black">{titleCase(category)}</h1>
        <p className="mt-2 text-muted">
          Category listing scaffold with Medusa-ready filter and pagination boundaries.
        </p>
      </div>
      <ProductGrid products={products.length ? products : listProducts()} />
    </main>
  );
}
