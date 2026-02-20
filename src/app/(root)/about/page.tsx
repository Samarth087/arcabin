import { getStaticPageMetadata } from "@/lib/seo";
import { AboutView } from "./_view/about.view";

export const metadata = getStaticPageMetadata("about");

export default function AboutPage() {
  return (
    <AboutView />
  );
}
