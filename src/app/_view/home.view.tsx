"use client";

import { Header } from "@/components/layout/headerLayout";
import HeroView from "./hero.view";
import CloudLogoSection from "./cloudLogoSection";
import MarqueeSection from "./marqueeSection";
import PortfolioSection from "./portfolicSection";
import FeatureGrid from "./featureSection";
import ServicesMarquee from "./serviceMarquee";
import FAQsSection from "./faqSection";
import FooterLayout from "@/components/layout/footerLayout";

const HomeView = () => {
  return (
    <div className="">
      <Header />
      <HeroView />
      <CloudLogoSection />
      <MarqueeSection />
      <PortfolioSection />
      <FeatureGrid />
      <ServicesMarquee />
      <FAQsSection />
      <FooterLayout />
    </div>
  );
};

export default HomeView;
