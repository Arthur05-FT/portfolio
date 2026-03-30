import { Noto_Sans_Mono } from "next/font/google";
import { Button } from "../ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { Field } from "../ui/field";
import { DottedGlowBackground } from "../ui/dotted-glow-background";
import Link from "next/link";

const noto_sans_mono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
});

const Hero = () => {
  return (
    <header className="relative flex flex-1 flex-col max-w-3xl border-r h-screen px-4 py-2">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
        opacity={0.2}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <h1
        className={
          "text-lg text-gray-800 dark:text-gray-200 " + noto_sans_mono.className
        }
      >
        Arthur_
      </h1>
      <div className="flex flex-col justify-center pl-4 flex-1 gap-6">
        <div>
          <Link
            className="flex mb-6 px-4 text-sm hover:bg-border py-1 rounded-full w-fit items-center font-light bg-chart-5 gap-2 transition duration-300"
            href="#"
          >
            <FileText size={15} />
            If necessary | Download CV
            <ArrowRight size={15} />
          </Link>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance mb-4">
            Hi, I'm Arthur.
          </h1>
          <p className="max-w-lg">
            I'm a software developer specializing in building exceptional
            digital experiences. Currently, I'm focused on building accessible,
            human-centered products.
          </p>
        </div>
        <Field className="flex items-center gap-4" orientation="horizontal">
          <Button size="lg" variant="square">
            Learn More
          </Button>
          <Button size="lg" variant="squareOutline">
            Contact Me <ArrowRight />
          </Button>
        </Field>
      </div>
    </header>
  );
};

export default Hero;
