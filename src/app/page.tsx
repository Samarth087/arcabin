import type { Metadata } from "next";
import HomeView from "./_view/home.view";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("home");

export default function Home() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ArkCabin",
    url: base,
    logo: "/images/ArkCabin-logo.svg",
    sameAs: [
      "https://github.com/Samarth087/arcabin",
    ],
  };
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ArkCabin",
    url: base,
    potentialAction: {
      "@type": "SearchAction",
      target: `${base}/search?q={query}`,
      "query-input": "required name=query"
    }
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ArkCabin — Next.js Web Studio",
    url: base,
    areaServed: "Global",
    serviceType: [
      "Web Design",
      "Next.js Development",
      "Frontend Engineering",
      "UX Design",
      "AI Automation"
    ],
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HomeView />
    </>
  );
}
