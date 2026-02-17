"use client";

import HeroView from "./hero.view";
import CloudLogoSection from "./cloudLogoSection";
import MarqueeSection from "./marqueeSection";
import PortfolioSection from "./portfolicSection";
import FeatureGrid from "./featureSection";
import ServicesMarquee from "./serviceMarquee";
import { WorkflowSection } from "@/components/workflow-section";
import FAQsSection from "./faqSection";
import { processSteps } from "@/constant/workflow";

const HomeView = () => {
  return (
    <div className="">
      <HeroView />
      <CloudLogoSection />
      <MarqueeSection />
      <PortfolioSection />
      <FeatureGrid />
      <ServicesMarquee />
      <WorkflowSection
        title="How We Work"
        items={processSteps}
      />      <FAQsSection />
    </div>
  );
};

export default HomeView;
