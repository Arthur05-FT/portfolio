"use client";

import React from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const ContactForm = () => {
  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          className="border-neutral-400 flex-1"
          type="email"
          placeholder="johndoe@gmail.com"
        />
        <Input
          className="border-neutral-400 flex-1"
          type="text"
          placeholder="John Doe"
        />
      </div>
      <Input className="border-neutral-400" type="text" placeholder="Phone" />
      <Input
        className="border-neutral-400"
        type="text"
        placeholder="Subject message"
      />
      <Textarea
        className="border-neutral-400 h-32 sm:h-40 lg:h-52 resize-none"
        placeholder="Typing..."
      />
      <InteractiveHoverButton className="w-full sm:w-fit self-center sm:self-end cursor-none border-neutral-400 px-6 py-2">
        Send the message
      </InteractiveHoverButton>
    </form>
  );
};

export default ContactForm;
