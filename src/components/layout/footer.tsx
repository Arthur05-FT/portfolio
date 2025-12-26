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
  const articles = [
    { name: "Next.js", link: "https://blog-six-phi-58.vercel.app/next.js" },
    { name: "Java", link: "https://blog-six-phi-58.vercel.app/java" },
    { name: "Others", link: "https://blog-six-phi-58.vercel.app/others" },
  ];
  const projects = [
    { name: "0xBlitz", link: "/" },
    {
      name: "Soft",
      link: "/",
    },
    {
      name: "PodplayAI",
      link: "/",
    },
    { name: "Bket", link: "/" },
    {
      name: "Zik",
      link: "/",
    },
  ];
  return (
    <footer className="flex px-4 bg-foreground dark:bg-secondary dark:text-foreground text-secondary flex-col gap-10 py-14">
      <div className="flex mx-auto max-w-xl flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-1">Articles</h3>
            {articles.map((item, index) => (
              <Link className="hover:underline" key={index} href={item.link}>
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
          <span>© 2025 Arthur Tchatchouang. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
