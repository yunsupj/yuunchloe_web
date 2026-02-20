"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Capabilities</p>
              <h2 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
                What we do, and where we're headed.
              </h2>
              <p className="md:text-md">
                We've built our reputation on three core competencies that drive
                results. Each one reflects years of real-world experience in the
                e-commerce space.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
            <div className="flex w-full flex-col items-start text-left group">
              <div className="rb-6 mb-6 md:mb-8 w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/lifestyle-ecommerce.png"
                  alt="E-commerce Excellence"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold font-serif text-yu-black md:mb-4 md:text-3xl lg:text-4xl">
                E-commerce excellence
              </h3>
              <p className="text-yu-black/70 font-sans leading-relaxed text-sm md:text-base">
                Masterfully managing Amazon FBA and global marketplaces with
                precision and scale.
              </p>
            </div>
            <div className="flex w-full flex-col items-start text-left group">
              <div className="rb-6 mb-6 md:mb-8 w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/lifestyle-beauty.png"
                  alt="Brand Incubation"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold font-serif text-yu-black md:mb-4 md:text-3xl lg:text-4xl">
                Brand incubation
              </h3>
              <p className="text-yu-black/70 font-sans leading-relaxed text-sm md:text-base">
                Developing products from concept to top-tier bestsellers through
                data and strategy.
              </p>
            </div>
            <div className="flex w-full flex-col items-start text-left group">
              <div className="rb-6 mb-6 md:mb-8 w-full overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/lifestyle-consulting.png"
                  alt="Strategic Consulting"
                  className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-2xl font-bold font-serif text-yu-black md:mb-4 md:text-3xl lg:text-4xl">
                Strategic consulting
              </h3>
              <p className="text-yu-black/70 font-sans leading-relaxed text-sm md:text-base">
                Leveraging our data and experience to help other brands scale in
                digital landscapes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
