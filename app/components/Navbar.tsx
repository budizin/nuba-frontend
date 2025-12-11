"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../contexts/ThemeContext";

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export default function Navbar() {
  const pathname = usePathname();
  const isCasePage = pathname?.startsWith("/cases");
  const { toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isCasePage) {
      // Si estamos en una página de caso, navegar a la página principal con el anchor
      e.preventDefault();
      window.location.href = `/${href}`;
    } else {
      // Si estamos en home, usar el scroll suave
      handleNavClick(e, href);
    }
  };

  return (
    <header className="fixed top-0 right-0 z-50 flex items-center gap-4 p-6">
      {/* Logo Circle */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          console.log("[navbar] toggle button clicked");
          toggleTheme();
        }}
        className="bg-white dark:bg-black rounded-full w-12 h-12 flex items-center justify-center border border-black dark:border-white flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity relative z-[60]"
        aria-label="Toggle dark mode"
      >
        <Image
          src="/Nuba logo.svg"
          alt="Nuba Logo"
          width={25}
          height={18}
          className="w-6 h-auto dark:invert"
        />
      </button>
      
      <nav className="bg-white dark:bg-black rounded-full px-6 py-3 flex items-center gap-6 border border-black dark:border-white transition-colors duration-300">
        <a
          href={isCasePage ? "/#about" : "#about"}
          onClick={(e) => handleLinkClick(e, "#about")}
          className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href={isCasePage ? "/#works" : "#works"}
          onClick={(e) => handleLinkClick(e, "#works")}
          className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity"
        >
          Work
        </a>
        <a
          href={isCasePage ? "/#services" : "#services"}
          onClick={(e) => handleLinkClick(e, "#services")}
          className="text-black dark:text-white font-medium hover:opacity-70 transition-opacity"
        >
          Services
        </a>
      </nav>

      <a
        href="https://calendly.com/facugirardi22/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#BAF038] cursor-pointer text-black font-medium px-8 py-3 rounded-full hover:bg-[#a8d832] transition-colors inline-block"
      >
        Contact
      </a>
    </header>
  );
}

