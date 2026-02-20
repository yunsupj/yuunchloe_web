"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout22() {
  return (
    <section id="about" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/logo_wo_back.png"
                className="h-12 w-auto opacity-90"
                alt="yuunique logo"
              />
            </div>
            <h2 className="mb-6 text-4xl font-bold font-serif text-yu-black md:mb-8 md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              Unique Value, <br /> <span className="text-yu-green italic">Intelligent Growth.</span>
            </h2>
            <p className="md:text-lg text-yu-black/70 leading-relaxed font-sans mb-8">
              yuunChloe goes beyond being a simple e-commerce company; we aim for a harmony of data and intuition. Combining deep understanding of the Amazon FBA ecosystem with AI/ML engineering technology, we read market trends and create unique value essential for daily life. We design and grow every single product to bring positive change to our customers' lives.
            </p>
          </div>
          <div className="relative pl-4 md:pl-0">
            <img
              src="/images/about-image.jpg"
              className="w-full rounded-3xl shadow-xl object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              alt="yuunChloe brand vision"
            />
            <div className="absolute -bottom-8 -left-8 bg-yu-beige p-8 rounded-tr-3xl rounded-bl-3xl shadow-lg border border-white/50 hidden lg:block">
              <p className="text-yu-black font-serif text-2xl italic leading-none">"Beyond the Ordinary."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}