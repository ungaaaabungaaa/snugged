import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export default async function SearchPage({
  searchParams
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const products = listProducts({ query: q });

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black">Search</h1>
      <form className="mt-6">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search shirts, rings, bags, shoes..."
          className="min-h-14 w-full rounded-[8px] border border-line px-4 text-lg"
        />
      </form>
      <div className="mt-8">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
