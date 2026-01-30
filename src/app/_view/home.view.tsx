"use client";

import { Header } from "@/components/layout/headerLayout";
import HeroView from "./hero.view";
import CloudLogoSection from "./cloudLogoSection";
import MarqueeSection from "./marqueeSection";
import PortfolioSection from "./portfolicSection";

const HomeView = () => {
  return (
    <div className="">
      <Header />
      <HeroView />
      <CloudLogoSection />
      <MarqueeSection />
      <PortfolioSection />
    </div>
  );
};

export default HomeView;
