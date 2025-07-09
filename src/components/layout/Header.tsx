"use client";
import { BookText, Phone, TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const [isActive, setActive] = React.useState(1);
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
      svg: <TvMinimal size={20} />,
    },
    {
      id: 2,
      name: "Projects",
      href: "/projects",
      svg: <BookText size={20} />,
    },
    {
      id: 3,
      name: "Contact",
      href: "/contact",
      svg: <Phone size={20} />,
    },
  ];
  return (
    <nav className="flex h-fit gap-6 border-b border-neutral-800 px-6">
      {links.map((link, index) => (
        <div
          key={index}
          className={`${
            isActive === link.id
              ? "before:content[] before:w-full before:absolute before:h-[3px] before:rounded-2xl before:bg-blue-600 before:bottom-0 before:left-0"
              : ""
          } flex relative`}
          onClick={() => setActive(link.id)}
        >
          <Link
            className="flex gap-2 items-center h-full pb-3"
            href={link.href}
          >
            <span>{link.svg}</span>
            {link.name}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Header;
