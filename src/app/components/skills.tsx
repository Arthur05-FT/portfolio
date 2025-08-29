import React from "react";
import Link from "next/link";
import Section from "./layout/section";

const Skills = () => {
  const skills = [
    { name: "Next.js", link: "/", description: "" },
    { name: "React.js", link: "/", description: "" },
    { name: "Tailwind CSS", link: "/", description: "" },
    { name: "Typescript", link: "/", description: "" },
    { name: "Prisma", link: "/", description: "" },
    { name: "Postgresql", link: "/", description: "" },
  ];
  return (
    <Section title="What I use">
      <ul className="list-disc flex flex-col gap-2 w-fit">
        {skills.map((item, index) => (
          <li
            key={index}
            className="relative pl-5 w-fit flex gap-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white/60"
          >
            <Link className="underline w-fit" href={item.link}>
              {item.name}
            </Link>
            <span className="opacity-60"></span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Skills;
