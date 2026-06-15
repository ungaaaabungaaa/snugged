import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export default function ThriftClothesBengaluruPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black">Thrift Clothes Bengaluru</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Bengaluru-focused SEO landing page for thrift and pre-owned fashion discovery.
      </p>
      <div className="mt-8">
        <ProductGrid products={listProducts().filter((product) => product.metadata.product_type === "thrift_clothing")} />
      </div>
    </main>
  );
}
