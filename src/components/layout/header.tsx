import Link from "next/link";
import React from "react";
import ButtonLanguage from "../ui/button-language";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <Link href={"/"}>Arthur.com</Link>
      <div className="flex items-center gap-10">
        <Link
          className="hover:underline"
          href={"https://blog-six-phi-58.vercel.app/"}
        >
          Blog
        </Link>
        <div className="flex items-center gap-5">
          <ButtonLanguage />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
