import React from "react";
import Header from "./components/layout/header";
import Me from "./components/me";
import Project from "./components/project";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies";

const Home = () => {
  return (
    <div className="flex gap-10 flex-col w-[35%]">
      <Header />
      <Me />
      <Project />
      <Skills />
      <Hobbies />
    </div>
  );
};

export default Home;
