import type { Metadata } from "next";
import PricingSection from "./_view/pricingSection";
import { getStaticPageMetadata } from "@/lib/seo";
import { WorkflowSection } from "@/components/workflow-section";

export const metadata: Metadata = getStaticPageMetadata("pricing");

export default function PricePage() {
  return (
    <>
      <PricingSection />
      <WorkflowSection title="Optimized for your business" />
    </>
  );
}
