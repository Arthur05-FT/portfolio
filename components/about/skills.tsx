import { JetBrains_Mono } from "next/font/google";
import { FileTypeLightNext } from "../icons/next";
import { FileTypeNestjs } from "../icons/nest";
import { FileTypeLightPrisma } from "../icons/prisma";
import { FileTypePgsql } from "../icons/postgresql";
import Python from "../icons/python";
import { FileTypeTailwind } from "../icons/tailwind";
import { JavaLight } from "../icons/java";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
const skills = [
  "Next.js",
  "Python",
  "Java",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Tailwind CSS",
];
const icons = [
  <FileTypeLightNext fontSize={15} />,
  <Python fontSize={15} />,
  <JavaLight fontSize={15} />,
  <FileTypeNestjs fontSize={15} />,
  <FileTypeLightPrisma fontSize={15} />,
  <FileTypePgsql fontSize={15} />,
  <FileTypeTailwind fontSize={15} />,
];
const Skills = () => {
  return (
    <div
      className={
        "flex items-center justify-between gap-4 text-sm py-6 " +
        jetbrains.className
      }
    >
      <div className="flex items-center divide-x">
        {skills.map((skill, index) => (
          <span key={index} className="font-extralight px-4 first:pl-0">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        {icons.map((icon, index) => (
          <div key={index} className="text-3xl">
            {icon}
          </div>
        ))}
        <span className="border-dashed border text-zinc-700 w-6 h-6 flex items-center justify-center text-[10px]">
          +
        </span>
      </div>
    </div>
  );
};

export default Skills;
