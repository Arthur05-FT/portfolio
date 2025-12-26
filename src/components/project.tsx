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
          >
              <div>
                  <Link className="underline" href={item.link}>
                      {item.name} :
                  </Link>
                  <span className="opacity-90 ml-1 dark:opacity-60">
              {item.desciption}
            </span>

              </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Project;
