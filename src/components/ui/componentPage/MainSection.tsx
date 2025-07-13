import React from "react";
import Skills from "./Skills";
import Project from "./Project";
import { TypewriterEffectSmooth } from "./TypeWriterEffectSmooth";
import { TextAnimate } from "@/components/magicui/text-animate";

const MainSection = () => {
  return (
    <div className="w-full max-w-4xl leading-7 flex flex-col gap-8 lg:gap-10 px-4 lg:px-0">
      <div className="flex flex-col gap-3 lg:gap-5 rounded">
        <span className="text-xs sm:text-sm text-neutral-400">
          Arthur Jordy / portfolio.md
        </span>

        <h1 className="flex flex-row items-center justify-center sm:justify-start uppercase border-b pb-4 border-b-neutral-800 gap-3 sm:gap-4">
          <span className="text-3xl sm:text-4xl lg:text-5xl">👋</span>
          <div>
            <TypewriterEffectSmooth
              words={[
                { text: "Welcome" },
                { text: "to" },
                { text: "my" },
                { text: "portfolio", className: "text-blue-600" },
              ]}
              className="text-center sm:text-left"
            />
          </div>
        </h1>

        <div className="text-sm sm:text-base leading-relaxed">
          <TextAnimate animation="slideUp" by="word">
            My name is Arthur, a passionate web developer, currently pursuing a
            Bachelor's degree in Information Technology - Application
            Development at ESA Namur. Since my high school years, web
            development has become much more than just an interest: it's a true
            vocation. Over time, I've honed my skills in both front-end and
            back-end development, which now allows me to design complete,
            high-performance, and modern web applications. Beyond coding, I'm
            also interested in interface design and user experience, because I'm
            convinced that a website's success depends as much on its technical
            fluidity as on its ability to meet the needs of its users.
          </TextAnimate>
        </div>

        <Skills />
      </div>

      <Project />
    </div>
  );
};

export default MainSection;
