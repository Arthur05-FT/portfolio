"use client";

import React from "react";
import { Input } from "../input";
import { Textarea } from "../textarea";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex gap-4">
        <Input
          className="border-neutral-400"
          type="email"
          placeholder="johndoe@gmail.com"
        />
        <Input
          className="border-neutral-400"
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
      <Textarea className="border-neutral-400 h-52" placeholder="Typing..." />
      <InteractiveHoverButton className=" w-fit self-end cursor-none border-neutral-400">
        Sent the message
      </InteractiveHoverButton>
    </form>
  );
};

export default ContactForm;
