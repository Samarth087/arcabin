import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("privacy");

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A clear outline of how this website collects, stores, and uses
          information such as analytics data and contact details.
        </p>
      </div>
    </section>
  );
}
