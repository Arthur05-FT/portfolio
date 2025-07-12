import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Todo Tasks",
      icon: "📆",
      description:
        "Todo Taks Is an advanced task management web application. It allows users to create, manage, and track their tasks efficiently.",
      languages: [
        {
          name: "Next JS",
          color: "bg-white",
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-700",
        },
      ],
    },
    {
      id: 2,
      title: "Netflix clone",
      icon: "🎥",
      description: "This is just a clone of Netflix. It is not a real project.",
      languages: [
        {
          name: "Next JS",
          color: "bg-white",
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-500",
        },
      ],
    },
    {
      id: 3,
      title: "Thinkify",
      icon: "💭",
      description:
        "Thinkify is a social media platform that allows users to share their thoughts, ideas, and experiences with others.",
      languages: [
        {
          name: "React JS",
          color: "bg-blue-600",
        },
        {
          name: "Prisma",
          color: "bg-slate-700",
        },
        {
          name: "Node JS",
          color: "bg-green-600",
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-500",
        },
      ],
    },
    {
      id: 4,
      title: "All in One",
      icon: "🛒",
      description:
        "All in One is a eCommerce platform that allows users to buy and sell products online.",
      languages: [
        {
          name: "Next JS",
          color: "bg-white",
        },
        {
          name: "Prisma",
          color: "bg-slate-700",
        },
        {
          name: "Node JS",
          color: "bg-green-600",
        },
        {
          name: "Tailwind CSS",
          color: "bg-blue-500",
        },
      ],
    },
  ];
  return (
    <div>
      <h1 className="text-2xl font-medium uppercase mb-6">
        Projects ({projects.length})
      </h1>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-4 rounded p-5 mb-5"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{project.icon}</span>
              <h2 className="text-xl font-semibold">{project.title}</h2>
            </div>
            <div className="flex gap-4">
              {project.languages.map((lang, index) => (
                <span key={index} className="relative flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${lang.color}`} />
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
