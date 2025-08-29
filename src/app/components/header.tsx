import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between py-4">
      <Link href={"/"}>Arthur.com</Link>
      <div className="flex items-center gap-10">
        <Link className="hover:underline" href={"/"}>
          Blog
        </Link>
        <button className="cursor-pointer">
          <Moon size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
