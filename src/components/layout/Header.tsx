"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [isActive, setActive] = React.useState(1);
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Projects",
      href: "/projects",
    },
    {
      id: 3,
      name: "About",
      href: "/about",
    },
    {
      id: 4,
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <nav className="flex h-fit gap-6 border-b border-neutral-800 px-6">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            isActive === link.id
              ? "before:content[] before:w-full before:absolute before:h-[3px] before:rounded-2xl before:bg-neutral-300 before:bottom-0 before:left-0"
              : ""
          } flex relative pb-2`}
          onClick={() => setActive(link.id)}
        >
          <Link href={link.href}>{link.name}</Link>
        </div>
      ))}
    </nav>
  );
};

export default Header;
