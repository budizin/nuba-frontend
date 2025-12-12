"use client";

import { motion } from "framer-motion";
import React from "react";
import FlyingBirds from "./FlyingBirds";

type FooterProps = {
  isCasePage: boolean;
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
};

export default function Footer({ isCasePage, handleLinkClick }: FooterProps) {
  return (
    <footer className="relative bg-white pt-6 md:pt-8 pb-0 px-6 md:px-16 mt-0 overflow-hidden min-h-screen flex flex-col">

      {/* Birds ONLY inside footer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[40]">
        <FlyingBirds />
      </div>

      <div className="max-w-7xl mx-auto flex-1 flex flex-col">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12 items-start">

          {/* Text and Button Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 flex flex-col gap-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              Bored of playing safe?{" "}
              <span className="relative inline-block">
                Meet us!
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#BAF038]"
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <motion.path
                    d="M 0 15 Q 50 5, 100 10 T 200 12"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
            </h2>

            <a
              href="https://calendly.com/facugirardi22/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#BAF038] text-black font-medium px-8 py-4 rounded-full hover:bg-[#a8d832] transition-colors inline-block w-fit"
            >
              let's work together
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs md:text-sm text-neutral-500 uppercase tracking-wider text-center md:col-span-1 flex items-center justify-center"
          >
            © NUBA, ALL RIGHTS RESERVED, 2025
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 flex justify-end gap-6 md:gap-8"
          >
            <div className="flex flex-col gap-3">
              <a
                href={isCasePage ? "/#about" : "#about"}
                onClick={(e) => handleLinkClick(e, "#about")}
                className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                About
              </a>
              <a
                href={isCasePage ? "/#works" : "#works"}
                onClick={(e) => handleLinkClick(e, "#works")}
                className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                Works
              </a>
              <a
                href={isCasePage ? "/#services" : "#services"}
                onClick={(e) => handleLinkClick(e, "#services")}
                className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                Services
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-black hover:opacity-70 transition-opacity uppercase tracking-wider"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="relative flex flex-col gap-8 pb-0 flex-1 justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-[180px] md:text-[300px] lg:text-[400px] xl:text-[500px] font-bold text-black leading-[0.85] tracking-tight text-center w-full relative"
            style={{
              marginBottom: "-8%",
              marginTop: "0",
            }}
          >
            nuba
          </motion.h2>
        </div>
      </div>
    </footer>
  );
}
