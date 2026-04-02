import { ArrowUpRight } from "lucide-react";
import { Inter } from "next/font/google";
import { FileTypeLightNext } from "../icons/next";
import { FileTypeNestjs } from "../icons/nest";
import { FileTypePgsql } from "../icons/postgresql";
import { FileTypeLightPrisma } from "../icons/prisma";
import { FileTypeTailwind } from "../icons/tailwind";

const projects = [
  {
    id: 1,
    title: "Skoul",
    name: "Student Management System",
    description:
      "A web application for managing student records, including enrollment, grades, and attendance.",
    link: "/projects/skoul",
    tools: [
      <FileTypeLightNext fontSize={16} />,
      <FileTypeNestjs fontSize={16} />,
      <FileTypePgsql fontSize={16} />,
      <FileTypeLightPrisma fontSize={16} />,
      <FileTypeTailwind fontSize={16} />,
    ],
  },
];

const inter = Inter({ subsets: ["latin"] });

const Projects = () => {
  return (
    <div className="grid grid-cols-3 divide-x border [&>*]:border-b [&>*:nth-last-child(-n+3)]:border-b-0 mt-10">
      {projects.map((project, index) => (
        <a
          key={project.id + index}
          href={project.link}
          className="relative px-4 pt-4 pb-12 flex flex-col transition duration-300"
        >
          <ArrowUpRight
            className="text-muted-foreground absolute top-4 right-4"
            size={16}
          />
          <span
            className={
              "font-light tracking-widest uppercase text-[10px] text-muted-foreground " +
              inter.className
            }
          >
            {String(index + 1).padStart(2, "0")} {project.name}
          </span>
          <h2 className="font-bold text-sm mt-3">{project.title}.</h2>
          <p className="text-[11px] mt-2 text-muted-foreground leading-5">
            {project.description}
          </p>
          <div className="flex gap-3 items-center mt-4 flex-wrap">
            {project.tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
            <span className="border-dashed border text-zinc-700 w-6 h-6 flex items-center justify-center text-[10px]">
              +3
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
