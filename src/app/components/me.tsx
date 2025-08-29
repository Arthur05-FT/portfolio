import React from "react";
import Link from "next/link";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const Me = () => {
  const social = [
    { name: "Github", link: "https://github.com/Arthur05-FT" },
    { name: "X", link: "https://x.com/ArthurJord05" },
    {
      name: "Instagram",
      link: "https://www.instagram.com/arthurjordy_/?next=%2F",
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center">
        <div className="w-[6rem] h-[6rem] rounded-full bg-amber-50"></div>
        <div className="flex flex-col gap-1 font-semibold">
          <span className={`${inconsolata.className} capitalize text-5xl`}>
            arthur tchatchouang
          </span>
          <span>Fullstack developer</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="italic opacity-60">
          Student at ESA Namur. I am passionate about building products that are
          tailored to customers and optimized for their needs.
        </p>
        <div className="flex gap-4 justify-end">
          {social.map((item, index) => (
            <Link key={index} className="underline" href={item.link}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
