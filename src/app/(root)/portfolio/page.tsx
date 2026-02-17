import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("portfolio");

export default function PortfolioPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Portfolio
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A focused overview of the projects that best represent ArkCabin&apos;s
          work. Case studies, interface explorations, and systems that ship to
          production.
        </p>
      </div>
    </section>
  );
}
