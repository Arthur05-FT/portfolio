import React from "react";
import Link from "next/link";
import Section from "./layout/section";

const Project = () => {
  const projects = [
    {
      name: "Blitz",
      link: "/",
      desciption: "Working as a team has never been easier.",
    },
    {
      name: "Soft",
      link: "/",
      desciption: "Manage and plan your trips safely.",
    },
    {
      name: "PodFly",
      link: "/",
      desciption: "Let us compare for you.",
    },
    { name: "Bket", link: "/", desciption: "A eCommerce platform." },
  ];
  return (
    <Section title="What I've built">
      <ul className="list-disc flex flex-col gap-2">
        {projects.map((item, index) => (
          <li
            key={index}
            className="relative pl-5 flex gap-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[0.4rem] before:h-[0.4rem] before:rounded-full before:bg-foreground"
          >
            <Link className="underline" href={item.link}>
              {item.name}
            </Link>
            <span className="opacity-90 dark:opacity-60">
              {item.desciption}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Project;
