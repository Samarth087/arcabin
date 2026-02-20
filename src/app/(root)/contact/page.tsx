import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";
import { ContactView } from "./_view/contact.view";

export const metadata: Metadata = getStaticPageMetadata("contact");

export default function ContactPage() {
  return <ContactView />;
}
