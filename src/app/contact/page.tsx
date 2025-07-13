import { AuroraText } from "@/components/magicui/aurora-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import ContactForm from "@/components/ui/componentPage/ContactForm";
import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 min-h-[90vh] px-4 py-8">
      <div className="flex flex-col gap-8 lg:gap-14 w-full max-w-[400px] lg:max-w-[500px]">
        <div className="flex flex-col gap-4 text-neutral-400 text-center lg:text-left">
          <AuroraText className="text-3xl sm:text-4xl lg:text-5xl">
            Contact me
          </AuroraText>
          <p className="text-sm sm:text-base leading-relaxed">
            If you have any questions or want to work together, feel free to
            contact me.
          </p>
        </div>
        <BoxReveal boxColor="#155dfc" duration={0.5}>
          <div className="flex flex-col gap-6 lg:gap-8 text-neutral-400">
            <span className="flex items-center justify-center lg:justify-start gap-2 text-base lg:text-lg">
              <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="break-all sm:break-normal">
                arthurfotso.bfkg@gmail.com
              </span>
            </span>
            <span className="flex items-center justify-center lg:justify-start gap-2 text-base lg:text-lg">
              <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
              +237 656 79 62 53
            </span>
          </div>
        </BoxReveal>
      </div>
      <div className="w-full max-w-[500px] lg:max-w-[600px]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
