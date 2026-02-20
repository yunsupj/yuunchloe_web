"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header30() {
  return (
    <section id="relume" className="relative px-[5%] bg-yu-beige/50">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center justify-center py-24 md:py-32 lg:py-40 text-center">
          <div className="w-full max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold text-white font-serif md:mb-8 md:text-7xl lg:text-8xl tracking-tighter leading-[1.1]">
              Where Unique Ideas <br /> Root and Flourish.
            </h1>
            <p className="text-white/80 md:text-xl max-w-lg mx-auto font-sans leading-relaxed tracking-wide">
              yuunique goes beyond selling products; we discover special value in everyday life. Complete your own unique lifestyle with our carefully curated items.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          className="size-full object-cover"
          alt="yuunique brand background"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
    </section>
  );
}