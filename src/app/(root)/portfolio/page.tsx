import type { Metadata } from "next";
import { getStaticPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getStaticPageMetadata("portfolio");

import { PortfolioView } from "./_view/portfolio.view";

export default function PortfolioPage() {
  return (
    <PortfolioView />
  );
}
