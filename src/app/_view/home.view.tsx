"use client";

import HeroView from "./hero.view";
import CloudLogoSection from "./cloudLogoSection";
import MarqueeSection from "./marqueeSection";
import PortfolioSection from "./portfolicSection";
import FeatureGrid from "./featureSection";
import ServicesMarquee from "./serviceMarquee";
import { WorkflowSection } from "@/components/workflow-section";
import FAQsSection from "./faqSection";

const HomeView = () => {
  return (
    <div className="">
      <HeroView />
      <CloudLogoSection />
      <MarqueeSection />
      <PortfolioSection />
      <FeatureGrid />
      <ServicesMarquee />
      <WorkflowSection />
      <FAQsSection />
    </div>
  );
};

export default HomeView;
