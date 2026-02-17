import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("services");

export default function ServicesPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Services
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          A clear overview of what ArkCabin offers: UX and visual design,
          production-ready Next.js frontends, and automation that supports your
          product instead of slowing it down.
        </p>
      </div>
    </section>
  );
}
