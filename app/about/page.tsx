import Skills from "@/components/about/skills";
import Code from "@/components/about/synthaxe-highlighter";
import Projects from "@/components/projects/projects";
import { Separator } from "@/components/ui/separator";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  return (
    <div className={"flex-1 p-8 " + inter.className}>
      <div className="flex items-center gap-4">
        <h1 className="font-light text-xs tracking-widest whitespace-nowrap">
          README
        </h1>
        <Separator className="flex-1" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        I'm a software developer specializing in building exceptional digital
        experiences. Currently, I'm focused on building accessible,
        human-centered products.
      </p>
      <Code />
      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <h1 className="font-light text-xs text-muted-foreground tracking-widest whitespace-nowrap">
          SKILL
        </h1>
      </div>
      <Skills />
      <div className="flex items-center gap-4">
        <h1 className="font-light text-xs tracking-widest whitespace-nowrap">
          PROJECTS
        </h1>
        <Separator className="flex-1" />
      </div>
      <Projects />
      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <h1
          className={
            "font-light text-xs uppercase text-muted-foreground tracking-widest whitespace-nowrap " +
            inter.className
          }
        >
          Last Articles
        </h1>
      </div>
    </div>
  );
};

export default About;
