import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("about");

export default function AboutPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          About <span className="font-display font-medium italic">ArkCabin</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          ArkCabin is a small studio focused on design-led engineering. We plan,
          design, and build Next.js websites that are fast, accessible, and
          easy to extend.
        </p>
      </div>
    </section>
  );
}
