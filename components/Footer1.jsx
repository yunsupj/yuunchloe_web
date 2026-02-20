"use client";

import { Button, Input } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

export function Footer1() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 bg-yu-beige border-t border-yu-brown/10">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[0.75fr_1fr] lg:gap-y-4 lg:pb-20">
          <div>
            <div className="mb-6 md:mb-8">
              <a href="#" className="mb-5 md:mb-6 block">
                <img
                  src="/images/logo_wo_back.png"
                  alt="yuunique logo"
                  className="h-10 w-auto opacity-80"
                />
              </a>
              <p className="mb-6 md:mb-8 font-serif italic text-lg text-yu-black/80">"Beyond the Ordinary."</p>
            </div>
            <div className="mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4 font-sans text-yu-black">Subscribe</p>
              <p className="mb-3 md:mb-4 text-yu-black/70 font-sans text-sm">
                Subscribe to get insights on commerce trends and brand growth.
              </p>
              <div className="flex max-w-md gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white border-yu-brown/20 focus:border-yu-green font-sans"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="bg-yu-black text-white hover:bg-yu-green transition-colors border-none font-sans"
                  onClick={handleSubmit}
                >
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-xs text-yu-black/50 font-sans">
                By subscribing you agree to receive updates from yuunChloe and accept our Privacy Policy.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-end gap-y-10 sm:grid-cols-3 sm:gap-x-12 sm:gap-y-12 md:gap-x-20 md:gap-y-16">
            <div className="flex flex-col items-start justify-start">
              <h3 className="mb-3 font-semibold md:mb-4 text-yu-black font-sans">Menu</h3>
              <ul className="flex flex-col items-start justify-start gap-y-2">
                <li className="py-2"><a href="/" className="font-sans text-yu-black/70 hover:text-yu-green transition-colors">Home</a></li>
                <li className="py-2"><a href="#about" className="font-sans text-yu-black/70 hover:text-yu-green transition-colors">About</a></li>
                <li className="py-2"><a href="#contact" className="font-sans text-yu-black/70 hover:text-yu-green transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start justify-start">
              <h3 className="mb-3 font-semibold md:mb-4 text-yu-black font-sans">Legal</h3>
              <ul className="flex flex-col items-start justify-start gap-y-2">
                <li className="py-2"><a href="/privacy-policy" className="font-sans text-yu-black/70 hover:text-yu-green transition-colors">Privacy Policy</a></li>
                <li className="py-2"><a href="/terms-of-service" className="font-sans text-yu-black/70 hover:text-yu-green transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-yu-brown/10" />
        <div className="flex flex-col-reverse items-start justify-between pb-4 pt-6 text-sm md:flex-row md:items-center md:pb-0 md:pt-8 text-yu-brown/60">
          <p className="mt-6 md:mt-0">© 2026 yuunChloe LLC. All rights reserved.</p>
          <ul className="flex gap-x-6">
            <li className="underline cursor-pointer hover:text-yu-green transition-colors font-sans"><a href="/privacy-policy">Privacy policy</a></li>
            <li className="underline cursor-pointer hover:text-yu-green transition-colors font-sans"><a href="/terms-of-service">Terms of service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}