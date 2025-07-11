import React from "react";
import Skills from "./Skills";
import Project from "./Project";

const MainSection = () => {
  return (
    <div className="max-w-2xl leading-7 flex flex-col gap-10">
      <div className="flex flex-col gap-[1rem] border rounded border-neutral-800 p-5">
        <span className="text-sm text-neutral-400">
          Arthur Jordy / portfolio.md
        </span>
        <h1 className="text-3xl uppercase border-b pb-2 border-b-neutral-800">
          👋 Welcome to my portfolio !!
        </h1>
        <p>
          My name is{" "}
          <span className="text-blue-600 text-lg italic">Arthur</span>, a
          passionate web developer, currently pursuing a Bachelor's degree in
          Information Technology - Application Development at ESA Namur. Since
          my high school years, web development has become much more than just
          an interest: it's a true vocation. Over time, I've honed my skills in
          both front-end and back-end development, which now allows me to design
          complete, high-performance, and modern web applications. Beyond
          coding, I'm also interested in interface design and user experience,
          because I'm convinced that a website's success depends as much on its
          technical fluidity as on its ability to meet the needs of its users.
        </p>
        <Skills />
      </div>
      <Project />
    </div>
  );
};

export default MainSection;
