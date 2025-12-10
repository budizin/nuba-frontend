"use client";

import { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  const [paintProgress, setPaintProgress] = useState(0);
  const introRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 26,
    damping: 14,
    mass: 1.1,
  });

  const introWords = useMemo(
    () =>
      [
        "We",
        "are",
        "a",
        "digital",
        "studio",
        "obsessed",
        "with",
        "building",
        "living",
        "web",
        "experiences.",
        "We",
        "blend",
        "branding,",
        "interaction,",
        "and",
        "development",
        "to",
        "craft",
        "sites",
        "that",
        "tell",
        "stories",
        "and",
        "move",
        "people.",
      ] as const,
    []
  );

  const wordRanges = useMemo(() => {
    const total = introWords.length;
    const perWord = 0.55 / total; // faster painting - less scroll per word
    const span = perWord * 1.5; // paint ~1.5 words at a time
    const lead = perWord * 0.2; // smaller head start
    return introWords.map((_, index) => {
      const start = Math.max(0, index * perWord - lead);
      const end = Math.min(0.75, start + span); // finish painting earlier in scroll
      return { start, end };
    });
  }, [introWords]);

  const paintedOpacity = useTransform(
    smoothProgress,
    [0, 0.04, 1],
    [0.8, 0.94, 1]
  );

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    setPaintProgress(latest);
  });


  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <header className="fixed top-0 right-0 z-50 flex items-center gap-4 p-6">
        <nav className="bg-white rounded-full px-6 py-3 flex items-center gap-6 border border-black">
          <a
            href="#about"
            className="text-black font-medium hover:opacity-70 transition-opacity"
          >
            About
          </a>
          <a
            href="#works"
            className="text-black font-medium hover:opacity-70 transition-opacity"
          >
            Work
          </a>
          <a
            href="#services"
            className="text-black font-medium hover:opacity-70 transition-opacity"
          >
            Services
          </a>
        </nav>

        <a
          href="https://calendly.com/example"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#BAF038] cursor-pointer text-black font-medium px-8 py-3 rounded-full hover:bg-[#a8d832] transition-colors inline-block"
        >
          Contact
        </a>
      </header>

      <main className="relative flex flex-col">
        <section className="relative min-h-screen flex flex-col md:flex-row items-start bg-white overflow-hidden">
          <div className="flex-1 p-10 md:p-16 pt-32 flex flex-col justify-between min-h-screen relative z-10">
            <div className="mt-10 md:mt-16">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-[28vw] md:text-[180px] font-bold text-black leading-none tracking-tight"
              >
                nuba
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-[28vw] md:text-[180px] font-bold text-black leading-none tracking-tight"
              >
                studio
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-auto pb-16 max-w-2xl"
            >
              <p className="text-base text-black leading-relaxed uppercase tracking-[0.08em]">
                WE CREATE WEBSITES AND BRANDS PEOPLE REMEMBER. NOT JUST SCROLL
                PAST.
              </p>
            </motion.div>
          </div>

          {/* Animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#BAF038] opacity-5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-black opacity-3 blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>

          {/* Scroll indicator arrow */}
          <motion.div
            className="fixed bottom-8 right-8 z-40 pointer-events-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm uppercase tracking-wider text-neutral-400 mb-2">
                Scroll
              </span>
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black"
              >
                <motion.path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{
                    pathLength: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="about"
          ref={introRef}
          className="relative bg-white"
        >
          <div className="relative h-[500vh] px-6 md:px-16">
            <div className="sticky top-[-24px] md:top-[-10px] max-w-6xl mx-auto space-y-10 py-14 md:py-20">
              <div className="flex items-center gap-3 uppercase tracking-wide text-sm font-semibold">
                <span className="h-[1px] w-10 bg-black" />
                About
              </div>

              <div className="relative">
                <motion.p
                  style={{ opacity: paintedOpacity }}
                  className={styles.revealText}
                >
                  {introWords.map((word, index) => {
                    const { start, end } = wordRanges[index];
                  const range = Math.max(0.0001, end - start);
                    const t = Math.min(
                      1,
                      Math.max(0, (paintProgress - start) / range)
                    );
                    const eased = t * t * (3 - 2 * t); // smoothstep
                    const base = 215;
                    const channel = Math.round(base * (1 - eased));
                    const color = `rgb(${channel}, ${channel}, ${channel})`;

                    return (
                      <span
                        key={`${word}-${index}`}
                        style={{ color }}
                        className="inline-block mr-[0.24em]"
                      >
                        {word}
                      </span>
                    );
                  })}
                </motion.p>
              </div>

              <p className="max-w-4xl text-base md:text-lg text-neutral-700 leading-relaxed">
                Each project is a lab: we prototype, animate, and refine until
                the interface breathes. Strategy, design, and code come together
                to push products, brands, and launches to the next level.
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
