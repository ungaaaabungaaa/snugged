import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BRAND_CANONICAL_URL, BRAND_DESCRIPTION, BRAND_NAME } from "@snugged/config";
import { BottomNav } from "@/components/bottom-nav";
import { SiteHeader } from "@/components/site-header";
import { ScriptJsonLd } from "@/components/script-json-ld";
import { organizationJsonLd } from "@/lib/seo/organization-jsonld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CANONICAL_URL),
  title: {
    default: `${BRAND_NAME} - Fashion Finds, Thrift, Accessories and AI Try-On`,
    template: `%s | ${BRAND_NAME}`
  },
  description: BRAND_DESCRIPTION,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION,
    url: BRAND_CANONICAL_URL,
    siteName: BRAND_NAME,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND_NAME,
    description: BRAND_DESCRIPTION
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <SiteHeader />
        {children}
        <BottomNav />
        <ScriptJsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
