import { Header } from "@/components/layout/headerLayout";
import React from "react";
import { SpotlightButton } from "../_widget/spotlightButton";

const HomeView = () => {
  return (
    <div className="flex items-center justify-between h-screen w-svw">
      {/* <Header /> */}
      <SpotlightButton />
    </div>
  );
};

export default HomeView;
