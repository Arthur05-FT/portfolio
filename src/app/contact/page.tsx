import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ContactForm from "@/components/ui/componentPage/ContactForm";
import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center gap-4 h-[90vh]">
      <div className="flex flex-col gap-14 max-w-[400px]">
        <div className="flex flex-col gap-4 text-neutral-400">
          <AuroraText className="text-5xl">Contact me</AuroraText>
          <p>
            If you have any questions or want to work together, feel free to
            contact me.
          </p>
        </div>
        <BoxReveal boxColor="#155dfc" duration={0.5}>
          <div className="flex flex-col gap-8 text-neutral-400">
            <span className="flex items-center gap-2 text-lg">
              <Mail />
              arthurfotso.bfkg@gmail.com
            </span>
            <span className="flex items-center gap-2 text-lg">
              <Phone />
              +237 656 79 62 53
            </span>
          </div>
        </BoxReveal>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
