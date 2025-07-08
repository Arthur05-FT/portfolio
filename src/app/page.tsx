import Header from "@/components/layout/Header";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

const Home = () => {
  return (
    <Card className="bg-neutral-950 h-screen text-neutral-300 font-medium">
      <CardHeader>
        <Header />
      </CardHeader>
    </Card>
  );
};

export default Home;
