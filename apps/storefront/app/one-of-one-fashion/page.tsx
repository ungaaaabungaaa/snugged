import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export default function OneOfOneFashionPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black">One-of-one Fashion</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Unique thrift and limited fashion pieces with quantity tracked at one.
      </p>
      <div className="mt-8">
        <ProductGrid products={listProducts().filter((product) => product.metadata.one_of_one)} />
      </div>
    </main>
  );
}
