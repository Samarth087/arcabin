import type { Metadata } from "next";
import PricingSection from "./_view/pricingSection";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("pricing");

export default function PricePage() {
  return <PricingSection />;
}
