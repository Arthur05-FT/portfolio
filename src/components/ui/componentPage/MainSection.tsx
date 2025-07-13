import React from "react";
import Skills from "./Skills";
import Project from "./Project";
import { TypewriterEffectSmooth } from "./TypeWriterEffectSmooth";
import { TextAnimate } from "@/components/magicui/text-animate";

const MainSection = () => {
  return (
    <div className="max-w-2xl leading-7 flex flex-col gap-10">
      <div className="flex flex-col gap-[1rem] rounded">
        <span className="text-sm text-neutral-400">
          Arthur Jordy / portfolio.md
        </span>
        <h1 className="flex items-center uppercase border-b pb-2 border-b-neutral-800">
          <span className="text-4xl mb-2">👋</span>
          <TypewriterEffectSmooth
            words={[
              { text: "Welcome" },
              { text: "to" },
              { text: "my" },
              { text: "portfolio", className: "#155dfc" },
            ]}
          />
        </h1>
        <TextAnimate animation="slideUp" by="word">
          My name is Arthur, a passionate web developer, currently pursuing a
          Bachelor's degree in Information Technology - Application Development
          at ESA Namur. Since my high school years, web development has become
          much more than just an interest: it's a true vocation. Over time, I've
          honed my skills in both front-end and back-end development, which now
          allows me to design complete, high-performance, and modern web
          applications. Beyond coding, I'm also interested in interface design
          and user experience, because I'm convinced that a website's success
          depends as much on its technical fluidity as on its ability to meet
          the needs of its users.
        </TextAnimate>
        <Skills />
      </div>
      <Project />
    </div>
  );
};

export default MainSection;
