"use client";

import HeroView from "./hero.view";
import CloudLogoSection from "./cloudLogoSection";
import MarqueeSection from "./marqueeSection";
import PortfolioSection from "./portfolicSection";
import FeatureGrid from "./featureSection";
import ServicesMarquee from "./serviceMarquee";
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
      <FAQsSection />
    </div>
  );
};

export default HomeView;
