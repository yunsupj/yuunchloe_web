"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout138() {
  return (
    <section id="products" className="px-[5%] py-16 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <p className="mb-4 font-semibold text-yu-green tracking-widest uppercase text-sm md:mb-6 font-sans">Our Flagship</p>
            <h2 className="mb-6 text-4xl font-bold font-serif text-yu-black md:mb-8 md:text-6xl lg:text-7xl leading-[1.1]">
              Meet <span className="italic text-yu-brown">yuunique</span>, <br className="hidden md:block"/> where clever design meets everyday living.
            </h2>
            <p className="mb-8 md:mb-10 text-yu-black/70 md:text-lg font-sans leading-relaxed">
              yuunique is our flagship brand, dedicated to providing clever,
              high-quality solutions for modern living. We offer a curated selection
              of home organization tools, safe and gentle baby essentials, and
              premium cosmetic products designed to redefine the ordinary. Each item
              is selected with precision, tested for quality, and built to last.
            </p>
          </div>
          <div className="order-1 md:order-2">
             <img
              src="/images/layout138-clean.png"
              className="w-full h-auto object-cover rounded-none md:rounded-lg shadow-none md:shadow-none"
              alt="yuunique lifestyle pure"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
