import React from "react";
import Link from "next/link";
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
          <li
            key={index}
            className="relative pl-5 w-fit flex gap-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white/60"
          >
            <span>{item.name}</span>
            <span className="opacity-60">{item.description}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
