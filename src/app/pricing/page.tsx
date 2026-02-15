import React from 'react'
import type { Metadata } from "next";
import PricingSection from './_view/pricingSection'

export const metadata: Metadata = {
  title: "Pricing Plans for Teams and Enterprises",
  description:
    "Transparent pricing for ArkCabin’s design-led Next.js solutions. Compare Free, Pro, and Enterprise plans.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    type: "website",
    title: "Pricing Plans for Teams and Enterprises",
    description:
      "Transparent pricing for ArkCabin’s design-led Next.js solutions. Compare Free, Pro, and Enterprise plans.",
    url: "/pricing",
    images: ["/images/portfolio-mockup-1.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans for Teams and Enterprises",
    description:
      "Transparent pricing for ArkCabin’s design-led Next.js solutions. Compare Free, Pro, and Enterprise plans.",
    images: ["/images/portfolio-mockup-1.png"],
  },
};

const PricePage = () => {
  const offerCatalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "ArkCabin Plans",
    url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000") + "/pricing",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Free",
        price: "0",
        priceCurrency: "USD",
        category: "Personal",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "29",
        priceCurrency: "USD",
        category: "Professionals & small teams",
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "99",
        priceCurrency: "USD",
        category: "Large organizations",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalog) }}
      />
      <PricingSection />
    </>
  )
}

export default PricePage
