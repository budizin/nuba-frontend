"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useSpring as useSpringMotion,
} from "framer-motion";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import { Code, Palette, Smartphone } from "lucide-react";

const AnimatedTextLine = ({ words, className = "" }: { words: string[]; className?: string }) => {
  // Crear suficientes repeticiones para un bucle infinito suave
  const repeatedWords = [...words, ...words, ...words, ...words, ...words, ...words];
  const totalWidth = words.length * 150; // Aproximado del ancho total de una repetición
  
  return (
    <div className={`overflow-hidden py-2 md:py-3 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -totalWidth],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedWords.map((word, index) => (
          <span key={index} className="text-xs md:text-sm font-bold uppercase tracking-wider text-black">
            {word}
            <span className="mx-2 md:mx-3">-</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

type WorkItem = {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  task?: string;
  solutions?: string;
  // Case-specific information
  description?: string;
  process?: string;
  result?: string;
  features?: string[];
  technologies?: string[];
  images?: string[];
  links?: {
    web?: string;
    ios?: string;
    android?: string;
    behance?: string;
    other?: { label: string; url: string };
  };
};

export const works: WorkItem[] = [
  {
    title: "Nuddo",
    subtitle: "Web & Mobile Development",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    slug: "nuddo",
    task: "Develop a comprehensive circular fashion marketplace that connects people to buy and sell second-hand clothing with ease, security, and trust. Build both web application and mobile apps for iOS and Android, creating a seamless experience across all platforms. The platform needed to support not only second-hand sales but also provide a space for local fashion brands to showcase new clothing.",
    solutions: "We created a full-featured marketplace platform that goes beyond traditional e-commerce—it's a community. The platform enables users to easily publish and sell items in just a few steps, with integrated door-to-door shipping logistics for comfort, speed, and security. We implemented Mercado Pago payment system with buyer and seller protection mechanisms, ensuring trust and safety. The solution includes user reputation systems, accessible pricing with standard or economical shipping options, and a seamless transaction flow. Available on web, iOS, and Android platforms, Nuddo represents a movement towards more conscious consumption that connects people, empowers local brands, and generates positive impact on society and the environment.",
    description: "Nuddo is an innovative application that connects people who want to sell and buy second-hand clothing with ease, security, and trust. Our goal is to give new life to unused garments while offering an accessible and sustainable alternative to traditional consumption. Unlike other buy-sell spaces, Nuddo is not just a marketplace: it's a community where each garment has a story to tell.",
    process: "We developed both the web application and mobile apps for iOS and Android, ensuring a seamless experience across all devices. The development process focused on creating an intuitive user interface, implementing secure payment systems, and building a robust backend that supports complex marketplace operations including shipping logistics, user reputation, and transaction management.",
    result: "Nuddo is now live and available on web, iOS, and Android platforms. The platform successfully connects buyers and sellers in a circular fashion economy, with integrated shipping, secure payments, and a thriving community of users. The app represents a movement towards more conscious consumption that connects people, empowers local brands, and generates positive impact.",
    features: [
      "Easy item publishing and selling",
      "Door-to-door shipping integration",
      "Mercado Pago secure payments",
      "User reputation system",
      "Local brand showcase space",
      "Multi-platform support (Web, iOS, Android)"
    ],
    technologies: ["React", "React Native", "Node.js", "Mercado Pago API", "Shipping Integration"],
    links: {
      web: "https://www.nuddo.com.ar",
      ios: "https://apps.apple.com/ar/app/nuddo/id6753880733",
      android: "https://play.google.com/store/apps/details?id=com.nuddo.app"
    }
  },
  {
    title: "CheckRTO",
    subtitle: "Web Development",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    slug: "checkrto",
    task: "Build a comprehensive vehicle inspection platform that manages reviews, reports, certificates, and technical workflows. Create an intuitive system for inspectors and vehicle owners to track and manage inspection processes.",
    solutions: "We developed a robust platform that streamlines the entire vehicle inspection process. The system handles inspection reviews, generates detailed reports, issues certificates, and manages complex technical workflows, making vehicle inspections more efficient and transparent.",
    description: "CheckRTO is a comprehensive vehicle inspection platform designed to manage the entire inspection lifecycle. The system enables inspectors to conduct thorough vehicle reviews, generate detailed reports, issue certificates, and manage complex technical workflows all in one integrated platform.",
    process: "We built a full-stack web application with a focus on usability for both inspectors and vehicle owners. The development process involved creating intuitive dashboards, implementing document generation systems, and building workflow management tools that ensure compliance with inspection regulations.",
    result: "CheckRTO successfully digitizes the vehicle inspection process, making it more efficient, transparent, and accessible for all stakeholders involved in the inspection ecosystem.",
    features: [
      "Inspection review management",
      "Automated report generation",
      "Digital certificate issuance",
      "Technical workflow management",
      "Inspector and owner dashboards",
      "Compliance tracking"
    ],
    technologies: ["React", "Node.js", "Document Generation", "Workflow Engine"],
    links: {
      web: "https://www.checkrto.com"
    }
  },
  {
    title: "PartidosYa",
    subtitle: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    slug: "partidosya",
    task: "Create a mobile application for booking sports fields with a focus on simplicity and speed. Design intuitive screens and interactions that allow users to quickly find and reserve available fields.",
    solutions: "We developed a mobile-first application that simplifies the process of booking sports fields. The design emphasizes speed and simplicity, with intuitive screen layouts and smooth interactions that enable users to make reservations in just a few taps.",
    description: "PartidosYa is a mobile application designed to simplify the process of booking sports fields. The project required a design that prioritizes simplicity and speed, allowing users to quickly find available fields and make reservations with minimal friction.",
    process: "We designed a mobile-first experience with a focus on simplicity and rapid interactions. The design process involved creating intuitive screen layouts, smooth transitions, and a booking flow that can be completed in just a few taps. Every interaction was optimized for speed and ease of use.",
    result: "The PartidosYa design successfully creates a fast and intuitive booking experience. Users can quickly browse available fields, view details, and complete reservations with minimal effort, making the entire process seamless and enjoyable.",
    features: [
      "Quick field search and discovery",
      "Simple reservation flow",
      "Intuitive screen layouts",
      "Fast interactions",
      "Mobile-optimized design",
      "User-friendly interface"
    ],
    technologies: ["Figma", "Mobile Design", "Prototyping", "User Testing"],
    links: {
      behance: "https://www.behance.net/gallery/226945829/Mobile-App-Design-UIUX"
    }
  },
  {
    title: "Kennedys Group",
    subtitle: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    slug: "kennedys-group",
    task: "Design and develop the frontend for the company's institutional website. Create a professional, modern interface that represents the company's brand and provides clear information about their services and values.",
    solutions: "We crafted a clean, professional institutional website that effectively communicates the company's brand identity. The frontend design focuses on clarity, user experience, and visual appeal, ensuring visitors can easily find and understand the company's offerings.",
    description: "Kennedys Group required a modern, professional institutional website that would serve as their digital presence and effectively communicate their brand identity, services, and company values to potential clients and partners.",
    process: "We focused on frontend development, creating a responsive and visually appealing website. The design process involved understanding the company's brand, developing a clean interface, and ensuring the site provides clear navigation and information architecture that guides visitors through the company's story and offerings.",
    result: "The Kennedys Group website successfully represents the company's professional image while providing an intuitive user experience that helps visitors understand the company's services and values.",
    features: [
      "Responsive design",
      "Modern UI/UX",
      "Brand-focused design",
      "Clear information architecture",
      "Professional presentation",
      "Service showcase"
    ],
    technologies: ["React", "Next.js", "Modern CSS", "Responsive Design"],
    links: {}
  },
  {
    title: "FAMates",
    subtitle: "UX/UI Design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    slug: "famates",
    task: "Design an e-commerce platform with a focus on navigability, product visualization, and purchase flow. Create an intuitive shopping experience that guides users seamlessly from browsing to checkout.",
    solutions: "We designed an e-commerce platform centered on exceptional user experience. The design prioritizes easy navigation, clear product visualization, and a streamlined purchase flow, making online shopping intuitive and enjoyable for customers.",
    description: "FAMates is an e-commerce platform designed with a strong focus on user experience. The project required a design that prioritizes navigability, effective product visualization, and a smooth purchase flow that guides users naturally from product discovery to checkout completion.",
    process: "Our design process focused on creating an intuitive shopping experience. We conducted user research, developed wireframes, and created high-fidelity designs that emphasize easy navigation, clear product presentation, and a streamlined checkout process. Every design decision was made with the user journey in mind.",
    result: "The FAMates design successfully creates an engaging and intuitive e-commerce experience. The design emphasizes user-friendly navigation, effective product visualization, and a purchase flow that reduces friction and encourages conversions.",
    features: [
      "Intuitive navigation system",
      "Enhanced product visualization",
      "Streamlined checkout flow",
      "User-centered design",
      "Mobile-responsive layouts",
      "Conversion-optimized UX"
    ],
    technologies: ["Figma", "User Research", "Wireframing", "Prototyping"],
    links: {
      behance: "https://www.behance.net/gallery/225646897/E-commerce-Design-UIUX"
    }
  },
];

export default function Home() {
  const [paintProgress, setPaintProgress] = useState(0);
  const [hoveredWork, setHoveredWork] = useState<number | null>(null);
  const [showAllWorks, setShowAllWorks] = useState(false);
  const introRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start 0.5", "end 0.5"],
  });
  const heroScrollProgress = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 26,
    damping: 14,
    mass: 1.1,
  });

  // Cursor position for hover image
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const introWords = useMemo(
    () =>
      [
        "We",
        "merge",
        "branding,",
        "interaction,",
        "and",
        "code",
        "to",
        "build",
        "experiences",
        "that",
        "resonate",
        "deeply",
        "and",
        "inspire",
        "action.",
      ] as const,
    []
  );

  const wordRanges = useMemo(() => {
    const total = introWords.length;
    const perWord = 0.75 / total; // even slower painting - more scroll per word
    const span = perWord * 3; // paint ~3 words at a time
    const lead = perWord * 0.2; // smaller head start
    return introWords.map((_, index) => {
      const start = Math.max(0, index * perWord - lead);
      const end = Math.min(0.9, start + span); // finish painting later in scroll
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

  // Get overall page scroll progress
  const { scrollYProgress: pageScrollProgress } = useScroll();
  const scrollProgressWidth = useTransform(pageScrollProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />

      <main className="relative flex flex-col">
        <section ref={heroRef} className="relative min-h-screen flex flex-col md:flex-row items-start bg-white overflow-hidden">
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
              className="mt-auto pb-16 max-w-3xl"
            >
              <p className="text-lg md:text-xl text-black leading-relaxed uppercase tracking-[0.08em]">
                WE CREATE{" "}
                <span className="relative inline-block">
                  SOLUTIONS
                  <motion.svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-[#BAF038]"
                    viewBox="0 0 200 15"
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <motion.path
                      d="M 0 10 Q 50 2, 100 8 T 200 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>{" "}
                PEOPLE REMEMBER. <br className="hidden md:block" />
                <span className="md:inline">NOT JUST SCROLL PAST.</span>
              </p>
            </motion.div>
          </div>
          
          {/* Animated Text Line in Hero */}
          <div className="absolute bottom-0 left-0 right-0">
            <AnimatedTextLine 
              words={["ESSENTIAL", "HARD WORK", "EMPATHY", "BRUTALISM", "ESSENCE", "BEYOND", "PASSION", "BRILLIANT", "EXPERIMENT", "BRAND", "ENERGY"]}
              className=""
            />
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
          
        </section>

        <section
          id="about"
          ref={introRef}
          className="relative bg-white overflow-hidden"
        >
          <div className="relative px-6 md:px-16">
            <div className="max-w-7xl mx-auto space-y-10 py-14 md:py-20">
              <div className="flex items-center gap-3 uppercase tracking-wide text-sm font-semibold text-black">
                <span className="h-[1px] w-10 bg-black" />
                About
              </div>

              <div className="relative text-center max-w-[90vw] mx-auto">
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
                    const eased = t * t * (4 - 2 * t); // smoothstep
                    const base = 215;
                    const channel = Math.round(base * (1 - eased));
                    const color = `rgb(${channel}, ${channel}, ${channel})`;

                    return (
                      <span
                        key={`${word}-${index}`}
                        style={{ color }}
                        className="inline-block mr-[0.12em]"
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

        <section
          id="works"
          className="relative bg-white overflow-hidden"
        >
          <div className="relative px-6 md:px-16">
            <div className="sticky top-[-24px] md:top-[-10px] max-w-6xl mx-auto space-y-10 py-14 md:py-20">
              <div className="flex items-center gap-3 uppercase tracking-wide text-sm font-semibold text-black">
                <span className="h-[1px] w-10 bg-black" />
                Our Works
              </div>

              <div className={styles.projectList}>
                {(showAllWorks ? works : works.slice(0, 4)).map((work, index) => (
                  <Link
                    key={index}
                    href={`/cases/${work.slug}`}
                    onMouseEnter={() => setHoveredWork(index)}
                    onMouseLeave={() => setHoveredWork(null)}
                    className="relative block"
                  >
                    <div className="flex items-center justify-between gap-12 py-6 border-b border-neutral-200 hover:border-neutral-400 transition-colors cursor-pointer group">
                      <div className="flex items-center gap-6">
                        <h3 className={`text-2xl md:text-4xl font-bold transition-colors tracking-tight ${
                          hoveredWork === index ? 'text-black' : 'text-neutral-400'
                        }`}>
                          {work.title}
                        </h3>
                      </div>
                      <span className="text-sm text-neutral-500 uppercase tracking-wider">
                        {work.subtitle}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              
              {works.length > 4 && !showAllWorks && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setShowAllWorks(true)}
                  className="mt-12 cursor-pointer relative inline-block"
                >
                  <span className="text-2xl md:text-3xl font-bold text-black uppercase tracking-wider relative">
                    View More
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#BAF038]"
                      viewBox="0 0 200 20"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
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
                </motion.button>
              )}
              
              {works.length > 4 && showAllWorks && (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setShowAllWorks(false)}
                  className="mt-12 cursor-pointer relative inline-block"
                >
                  <span className="text-2xl md:text-3xl font-bold text-black uppercase tracking-wider relative">
                    View Less
                    <motion.svg
                      className="absolute -bottom-2 left-0 w-full h-3 text-[#BAF038]"
                      viewBox="0 0 200 20"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
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
                </motion.button>
              )}
            </div>
          </div>

          {/* Hover Image that follows cursor */}
          {hoveredWork !== null && (
            <motion.div
              className="fixed w-80 h-80 overflow-hidden pointer-events-none z-50 shadow-2xl will-change-transform"
              style={{
                left: cursorPos.x,
                top: cursorPos.y,
                x: "-50%",
                y: "-50%",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={works[hoveredWork].image}
                alt={works[hoveredWork].title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          )}
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden"
        >

          <div className="relative px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 uppercase tracking-wide text-sm font-semibold mb-8 text-black">
                  <span className="h-[1px] w-10 bg-black" />
                  Services
                </div>
                <h2 className="text-[15vw] md:text-[120px] font-bold text-black leading-none tracking-tight mb-8">
                  what we do
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {/* Service 1 - Web Development */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="mb-6 w-20 h-20 text-[#BAF038]">
                    <Code size={80} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                    Web{" "}
                    <span className="relative inline-block">
                      Development
                      <motion.svg
                        className="absolute -bottom-1 left-0 w-full h-2 text-[#BAF038]"
                        viewBox="0 0 200 15"
                        preserveAspectRatio="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      >
                        <motion.path
                          d="M 0 10 Q 50 2, 100 8 T 200 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </span>
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    We build custom web applications with modern technologies, optimized for exceptional performance and user experience.
                  </p>
                </motion.div>

                {/* Service 2 - UX UI Design */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="mb-6 w-20 h-20 text-[#BAF038]">
                    <Palette size={80} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                    UX UI{" "}
                    <span className="relative inline-block">
                      Design
                      <motion.svg
                        className="absolute -bottom-1 left-0 w-full h-2 text-[#BAF038]"
                        viewBox="0 0 200 15"
                        preserveAspectRatio="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      >
                        <motion.path
                          d="M 0 10 Q 50 2, 100 8 T 200 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </span>
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    We design intuitive and attractive interfaces that combine visual aesthetics with functionality to create memorable experiences.
                  </p>
                </motion.div>

                {/* Service 3 - Mobile Development */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="mb-6 w-20 h-20 text-[#BAF038]">
                    <Smartphone size={80} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">
                    Mobile{" "}
                    <span className="relative inline-block">
                      Development
                      <motion.svg
                        className="absolute -bottom-1 left-0 w-full h-2 text-[#BAF038]"
                        viewBox="0 0 200 15"
                        preserveAspectRatio="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <motion.path
                          d="M 0 10 Q 50 2, 100 8 T 200 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    </span>
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed">
                    We develop native and cross-platform mobile applications for iOS and Android, creating seamless experiences that leverage the full potential of mobile devices.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-neutral-100 py-20 md:py-32 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6"
                >
                  Bored of playing safe?{" "}
                  <span className="relative inline-block">
                    Write us!
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
                </motion.h2>
              </div>
              
              <div className="flex flex-col justify-end">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8"
                >
                  WE BELIEVE MAGIC HAPPENS WHEN IDEAS MEET PEOPLE WHO CARE. WRITE US. LET'S SEE WHAT SPARKS.
                </motion.p>
                
                <motion.a
                  href="https://calendly.com/facugirardi22/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#BAF038] text-black font-medium px-8 py-4 rounded-full hover:bg-[#a8d832] transition-colors inline-block w-fit"
                >
                  let's work together
                </motion.a>
              </div>
            </div>
            
          </div>
        </footer>

      </main>
    </div>
  );
}
