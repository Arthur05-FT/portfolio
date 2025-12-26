import React from "react";
import Section from "./layout/section";

const Skills = () => {
  const skills = [
    {
      name: "Next.js",
      link: "/",
      description: "Build full-stack apps with SSR, routing, and APIs.",
    },
    {
      name: "Tailwind CSS",
      link: "/",
      description: "Style interfaces quickly with utility classes.",
    },
    {
      name: "Postgresql",
      link: "/",
      description: "Store and organize app data.",
    },
    {
      name: "Java and Python",
      link: "/",
      description: "Develop robust backend or enterprise apps.",
    },
  ];
  return (
    <Section title="What I use">
      <ul className="list-disc flex flex-col gap-2 w-fit">
        {skills.map((item, index) => (
          <li key={index}>
              <div>
                  <span>{item.name} :</span>
                  <span className="opacity-90 ml-1 dark:opacity-60">
              {item.description}
            </span>
              </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
