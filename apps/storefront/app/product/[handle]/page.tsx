import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/catalog";
import { ProductActions } from "@/components/product-actions";
import { ScriptJsonLd } from "@/components/script-json-ld";
import { productJsonLd } from "@/lib/seo/product-jsonld";
import { breadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";

export async function generateMetadata({
  params
}: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
    alternates: {
      canonical: `/product/${product.handle}`
    },
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images
    },
    twitter: {
      card: "summary_large_image",
      images: product.images
    }
  };
}

export default async function ProductPage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_460px] lg:px-8">
      <div className="grid gap-4">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-surface">
          <Image src={product.images[0]} alt={product.title} fill priority className="object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {product.images.map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-[8px] bg-surface">
              <Image src={image} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blush">
          {product.metadata.one_of_one ? "One of One" : product.category}
        </p>
        <h1 className="mt-3 text-4xl font-black">{product.title}</h1>
        <p className="mt-4 leading-8 text-muted">{product.description}</p>
        <div className="mt-6 grid gap-2 rounded-[8px] border border-line p-4 text-sm text-muted">
          <span>Condition: {product.metadata.condition || "new"}</span>
          <span>Gender: {product.metadata.gender || "unisex"}</span>
          <span>Size: {product.metadata.size_label || "variant based"}</span>
          {product.metadata.flaws?.length ? <span>Notes: {product.metadata.flaws.join(", ")}</span> : null}
        </div>
        <div className="mt-6">
          <ProductActions product={product} />
        </div>
      </section>
      <ScriptJsonLd data={productJsonLd(product)} />
      <ScriptJsonLd
        data={breadcrumbJsonLd([
          { name: "Shop", path: "/shop" },
          { name: product.title, path: `/product/${product.handle}` }
        ])}
      />
    </main>
  );
}
