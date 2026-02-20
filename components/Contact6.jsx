"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function Contact6() {
  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg-yu-beige">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8 text-yu-brown">
            <p className="mb-3 font-semibold md:mb-4 font-sans text-yu-green uppercase tracking-widest text-sm">Contact</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl font-serif text-yu-black">
              Get in Touch
            </h2>
            <p className="md:text-lg opacity-80 font-sans leading-relaxed">
              We'd love to hear from you. Please reach out with any inquiries.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2 text-yu-black font-sans">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none text-yu-green" />
              <p>contact@yuunchloe.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none text-yu-green" />
              <p>Torrance, CA, USA</p>
            </div>
          </div>
        </div>
        <form className="grid max-w-lg grid-cols-1 gap-6 bg-white p-8 rounded-2xl shadow-lg border border-yu-brown/5">
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2 text-yu-black font-sans font-medium">Name</Label>
            <Input
              type="text"
              id="name"
              className="border-yu-brown/20 focus:border-yu-green focus:ring-1 focus:ring-yu-green font-sans bg-yu-beige/10 transition-all duration-300"
              placeholder="Your name"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2 text-yu-black font-sans font-medium">Email</Label>
            <Input
              type="email"
              id="email"
              className="border-yu-brown/20 focus:border-yu-green focus:ring-1 focus:ring-yu-green font-sans bg-yu-beige/10 transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2 text-yu-black font-sans font-medium">Message</Label>
            <Textarea
              id="message"
              placeholder="How can we help you?"
              className="min-h-[8rem] border-yu-brown/20 focus:border-yu-green focus:ring-1 focus:ring-yu-green font-sans bg-yu-beige/10 transition-all duration-300"
            />
          </div>
          <div>
            <Button title="Send" className="w-full bg-yu-black text-white hover:bg-yu-green hover:shadow-lg transition-all duration-300 border-none py-3 font-sans font-medium">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}