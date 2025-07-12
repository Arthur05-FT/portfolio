import HeroSection from "@/components/ui/componentPage/HeroSection";
import MainSection from "@/components/ui/componentPage/MainSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex gap-[4rem] pt-4 justify-center">
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Home;
