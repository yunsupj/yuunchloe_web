"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

// 메뉴 상태 관리를 위한 커스텀 훅
const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };

  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };

  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateMobileMenuButtonSpan = isMobileMenuOpen
    ? ["open", "rotatePhase"]
    : "closed";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";

  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    animateMobileMenu,
    animateMobileMenuButtonSpan,
    animateDropdownMenu,
    animateDropdownMenuIcon,
  };
};

export function Navbar7() {
  const useActive = useRelume();

  return (
    <section
      id="relume"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-yu-brown/10 bg-yu-beige px-[5%] md:min-h-18"
    >
      <div className="mx-auto flex size-full max-w-full items-center justify-between">
        {/* --- 로고 섹션 --- */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo_wo_back.png"
            alt="yuunique logo"
            className="h-10 w-auto md:h-12" // 나무 로고가 잘 보이도록 크기 최적화
          />
        </a>

        {/* --- 데스크톱 메뉴 --- */}
        <div className="absolute hidden h-screen overflow-auto bg-yu-beige px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              href="/"
              className="relative block w-auto py-3 text-md text-yu-brown lg:inline-block lg:px-4 lg:py-6 lg:text-base hover:text-yu-green transition-colors font-sans"
            >
              Home
            </a>
            <a
              href="#about"
              className="relative block w-auto py-3 text-md text-yu-brown lg:inline-block lg:px-4 lg:py-6 lg:text-base hover:text-yu-green transition-colors font-sans"
            >
              About
            </a>
            <a
              href="#contact"
              className="relative block w-auto py-3 text-md text-yu-brown lg:inline-block lg:px-4 lg:py-6 lg:text-base hover:text-yu-green transition-colors font-sans"
            >
              Contact
            </a>
          </div>


        </div>

        {/* --- 모바일 메뉴 버튼 (햄버거) --- */}
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-yu-brown"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-yu-brown"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-yu-brown"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>

      {/* --- 모바일 메뉴 오버레이 --- */}
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "0" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto bg-yu-beige px-[5%] pb-8 pt-4"
          >
            <div className="flex flex-col">
              <a href="#about" className="block py-3 text-md text-yu-brown border-b border-yu-brown/5 font-sans" onClick={useActive.toggleMobileMenu}>
                About
              </a>
              <a href="#contact" className="block py-3 text-md text-yu-brown border-b border-yu-brown/5 font-sans" onClick={useActive.toggleMobileMenu}>
                Contact
              </a>
            </div>

          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}