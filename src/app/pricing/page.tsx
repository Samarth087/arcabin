import type { Metadata } from "next";
import PricingSection from "./_view/pricingSection";
import { getStaticPageMetadata } from "@/lib/seo";
import { WorkflowSection } from "@/components/workflow-section";
import { cn } from "@/lib/utils";
import { fraunces } from "@/app/fonts";

export const metadata: Metadata = getStaticPageMetadata("pricing");

export default function PricePage() {
  return (
    <main className="bg-background">
      <PricingSection />
      <div className="pb-32">
        <WorkflowSection
          title="Optimized for your business"
          className="border-t border-border/50"
        />
      </div>
    </main>
  );
}
