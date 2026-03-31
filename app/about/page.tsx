import Code from "@/components/about/synthaxe-highlighter";
import Python from "@/components/icons/python.icon";
import { Separator } from "@/components/ui/separator";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const skills = [
  { name: "Python", icon: <Python size="48" /> },
  { name: "JavaScript", icon: <Python size="48" /> },
  { name: "C#", icon: <Python size="48" /> },
  { name: ".Net", icon: <Python size="48" /> },
  { name: "Next.js", icon: <Python size="48" /> },
  { name: "", icon: <Python size="48" /> },
];
const About = () => {
  return (
    <div className={"flex-1 p-8 " + inter.className}>
      <div className="flex items-center">
        <h1 className="flex-1 font-light text-sm tracking-widest">README</h1>
        <Separator className="flex-11" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        I'm a software developer specializing in building exceptional digital
        experiences. Currently, I'm focused on building accessible,
        human-centered products.
      </p>
      <Code />
    </div>
  );
};

export default About;
