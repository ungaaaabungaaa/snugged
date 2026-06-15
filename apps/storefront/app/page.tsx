import Link from "next/link";
import { ArrowRight, Camera, ShieldCheck, Sparkles } from "lucide-react";
import { BRAND_NAME, sampleProducts } from "@snugged/config";
import { CategoryRail } from "@/components/category-rail";
import { ProductGrid } from "@/components/product-grid";

export default function HomePage() {
  const featured = sampleProducts.slice(0, 8);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-blush/10 px-4 py-2 text-sm font-semibold text-blush">
            <Sparkles size={16} /> Fashion-only drops for India
          </p>
          <h1 className="max-w-3xl text-5xl font-black tracking-normal sm:text-6xl">
            {BRAND_NAME}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
            Thrift clothes, new and pre-owned fashion, jewellery, bags, shoes, watches,
            accessories, one-of-one pieces, and AI try-on enabled finds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 rounded-full bg-blush px-6 py-4 font-semibold text-white"
            >
              Shop the drop <ArrowRight size={18} />
            </Link>
            <Link
              href="/ai-try-on"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-4 font-semibold"
            >
              <Camera size={18} /> AI try-on
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {sampleProducts.slice(0, 4).map((product, index) => (
            <img
              key={product.id}
              src={product.thumbnail}
              alt=""
              className={
                index === 0
                  ? "aspect-[4/5] rounded-[8px] object-cover"
                  : "aspect-[4/5] rounded-[8px] object-cover"
              }
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <CategoryRail />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black">New and rare finds</h2>
            <p className="mt-2 text-muted">Seeded products for local checkout and inventory testing.</p>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 font-semibold text-blush sm:flex">
            View all <ArrowRight size={18} />
          </Link>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["No COD", "Online payment only with Razorpay once keys are connected."],
            ["One-of-one safe", "Thrift inventory tracks quantity and blocks sold-out purchases."],
            ["WhatsApp-first", "OTP, support, and notifications are planned through OpenWA."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-[8px] bg-white p-5">
              <ShieldCheck className="text-blush" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
