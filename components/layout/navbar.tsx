"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const Navbar = () => {
  const links = [
    { name: "About", href: "/arthur-fullstack" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/resume" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];
  const [activeLink, setActiveLink] = React.useState("/arthur-fullstack");

  return (
    <nav className={"flex border-b " + inter.className}>
      {links.map((link) => (
        <Link
          key={link.href}
          className={`tracking-widest flex-1 text-center py-2 border-r transition duration-300 ${activeLink === link.href ? "bg-foreground text-background font-light" : "font-extralight text-chart-1 hover:bg-primary-foreground"}`}
          href={link.href}
          onClick={() => setActiveLink(link.href)}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
