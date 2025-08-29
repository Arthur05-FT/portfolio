import React, { ReactNode } from "react";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"] });

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <h3 className={`${inconsolata.className} w-fit text-2xl font-semibold`}>
        {title}
      </h3>
      {children}
    </div>
  );
};

export default Section;
