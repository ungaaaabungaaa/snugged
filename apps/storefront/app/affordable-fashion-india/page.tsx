import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export default function AffordableFashionIndiaPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black">Affordable Fashion India</h1>
      <p className="mt-3 max-w-2xl text-muted">
        Fashion finds with tax-inclusive INR pricing and prepaid checkout.
      </p>
      <div className="mt-8">
        <ProductGrid products={listProducts({ maxPrice: 499 })} />
      </div>
    </main>
  );
}
