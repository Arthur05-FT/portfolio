import React from "react";
import Link from "next/link";
import Section from "./layout/section";

const Project = () => {
  const projects = [
    { name: "0xBlitz", link: "/", desciption: "A social network." },
    {
      name: "Soft",
      link: "/",
      desciption: "Manage and plan your trips safely.",
    },
    {
      name: "PodplayAI",
      link: "/",
      desciption: "A music recommendation system.",
    },
    { name: "Bket", link: "/", desciption: "A eCommerce platform." },
    {
      name: "Zik",
      link: "/",
      desciption:
        "Whether you're in the car, at work, just listen to some music.",
    },
  ];
  return (
    <Section title="What I've built">
      <ul className="list-disc flex flex-col gap-2">
        {projects.map((item, index) => (
          <li
            key={index}
            className="relative pl-5 flex gap-4 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-white/60"
          >
            <Link className="underline" href={item.link}>
              {item.name}
            </Link>
            <span className="opacity-60">{item.desciption}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Project;
