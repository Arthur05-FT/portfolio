import Link from "next/link";
import React from "react";

const Footer = () => {
  const social = [
    { name: "Github", link: "https://github.com/Arthur05-FT" },
    { name: "X", link: "https://x.com/ArthurJord05" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/arthurjordy_/?next=%2F",
    },
  ];
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
    <div className="flex items-center bg-[#1e1e1e] flex-col gap-10 py-8 mt-32">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-1">Social</h3>
            {social.map((item, index) => (
              <Link className="underline" key={index} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-1">Social</h3>
            {social.map((item, index) => (
              <Link className="underline" key={index} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-1">Projects</h3>
            {projects.map((item, index) => (
              <Link className="underline" key={index} href={item.link}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="opacity-60">
          <span>Arthur.com</span>
          <span>© 2024 Arthur Tchatchouang. All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
