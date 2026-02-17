import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";
import { ServicesView } from "./_view/services.view";

export const metadata: Metadata = getStaticPageMetadata("services");

export default function ServicesPage() {
  return <ServicesView />;
}
