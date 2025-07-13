import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Todo Tasks",
      icon: "📆",
      description:
        "Todo Tasks is an advanced task management web application. It allows users to create, manage, and track their tasks efficiently.",
      languages: [
        { name: "Next JS", color: "bg-white" },
        { name: "Tailwind CSS", color: "bg-blue-700" },
      ],
    },
    {
      id: 2,
      title: "Netflix clone",
      icon: "🎥",
      description: "This is just a clone of Netflix. It is not a real project.",
      languages: [
        { name: "Next JS", color: "bg-white" },
        { name: "Tailwind CSS", color: "bg-blue-500" },
      ],
    },
    {
      id: 3,
      title: "Thinkify",
      icon: "💭",
      description:
        "Thinkify is a social media platform that allows users to share their thoughts, ideas, and experiences with others.",
      languages: [
        { name: "React JS", color: "bg-blue-600" },
        { name: "Prisma", color: "bg-slate-700" },
        { name: "Node JS", color: "bg-green-600" },
        { name: "Tailwind CSS", color: "bg-blue-500" },
      ],
    },
    {
      id: 4,
      title: "All in One",
      icon: "🛒",
      description:
        "All in One is an eCommerce platform that allows users to buy and sell products online.",
      languages: [
        { name: "Next JS", color: "bg-white" },
        { name: "Prisma", color: "bg-slate-700" },
        { name: "Node JS", color: "bg-green-600" },
        { name: "Tailwind CSS", color: "bg-blue-500" },
      ],
    },
  ];

  return (
    <div className="w-full mb-4">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium uppercase mb-6 text-center sm:text-left">
        Projects ({projects.length})
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project) => (
          <MagicCard
            key={project.id}
            className="flex flex-col gap-4 rounded-lg p-4 sm:p-5 border border-neutral-800 hover:border-neutral-700 transition-colors duration-200 bg-neutral-900/50"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl sm:text-3xl">{project.icon}</span>
              <h2 className="text-lg sm:text-xl font-semibold text-white">
                {project.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
              {project.languages.map((lang, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 text-xs sm:text-sm px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
                >
                  <span
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${lang.color}`}
                  />
                  {lang.name}
                </span>
              ))}
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
};

export default Project;
