import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("terms");

export default function TermsPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Terms of Service
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A concise description of the conditions under which visitors and
          clients use this website and any services linked from it.
        </p>
      </div>
    </section>
  );
}
