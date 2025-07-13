import HeroSection from "@/components/ui/componentPage/HeroSection";
import MainSection from "@/components/ui/componentPage/MainSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 pt-4 px-4 lg:px-8 justify-center max-w-7xl mx-auto">
      <div className="flex-shrink-0 flex justify-center lg:justify-start">
        <HeroSection />
      </div>
      <div className="flex-1">
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
