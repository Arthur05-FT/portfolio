import React from "react";
import Header from "../components/layout/header";
import Me from "../components/me";
import Project from "../components/project";
import Skills from "../components/skills";

const Home = () => {
  return (
    <div className="flex gap-10 flex-col px-5 max-w-xl mx-auto">
      <Header />
      <Me />
      <Project />
      <Skills />
    </div>
  );
};

export default Home;
