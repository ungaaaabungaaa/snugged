import { Camera, Sparkles, Upload } from "lucide-react";
import { ProductGrid } from "@/components/product-grid";
import { listProducts } from "@/lib/catalog";

export default function AiTryOnPage() {
  const products = listProducts().filter((product) => product.metadata.ai_try_on_enabled);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full bg-blush/10 px-4 py-2 text-sm font-semibold text-blush">
          <Sparkles size={16} /> AI try-on placeholder
        </p>
        <h1 className="mt-5 text-4xl font-black sm:text-5xl">Try fashion before checkout</h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Selected products expose upload UI and typed job interfaces now. Real generation can be
          wired to the provider once the account and API key are ready.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {[
          [Camera, "Select a try-on enabled product"],
          [Upload, "Upload or choose an avatar image"],
          [Sparkles, "Create a provider job and save the result URL"]
        ].map(([Icon, text]) => {
          const TypedIcon = Icon as typeof Camera;
          return (
            <div key={text as string} className="rounded-[8px] border border-line p-5">
              <TypedIcon className="text-blush" />
              <p className="mt-4 font-semibold">{text as string}</p>
            </div>
          );
        })}
      </div>
      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-black">Try-on enabled pieces</h2>
        <ProductGrid products={products} />
      </section>
    </main>
  );
}
