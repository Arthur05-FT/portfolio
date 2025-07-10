import HeroSection from "@/components/ui/HeroSection";
import MainSection from "@/components/ui/MainSection";
import React from "react";

const Home = () => {
  return (
    <div className="flex gap-[2rem] justify-center">
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default Home;
