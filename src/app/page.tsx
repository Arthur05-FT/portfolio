import { Card, CardContent, CardHeader } from "@/components/ui/card";
import HeroSection from "@/components/ui/HeroSection";
import React from "react";

const Home = () => {
  return (
    <div>
      <Card className="flex w-fit">
        <CardHeader className="w-[10rem]">
          <HeroSection />
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default Home;
