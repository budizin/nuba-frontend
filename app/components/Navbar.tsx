"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsFooterVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

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

  const handleLogoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isCasePage) {
      // Si estamos en una página de caso, navegar a la página principal
      window.location.href = "/";
    } else {
      // Si estamos en home, hacer scroll al inicio (hero)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.header
      initial={false}
      animate={{ opacity: isFooterVisible ? 0 : 1, y: isFooterVisible ? -20 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 z-50 flex items-center gap-4 p-6"
      style={{ pointerEvents: isFooterVisible ? 'none' : 'auto' }}
    >
      {/* Logo Circle */}
      <button
        type="button"
        onClick={handleLogoClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white rounded-full w-12 h-12 flex items-center justify-center border border-black flex-shrink-0 relative z-[60] cursor-pointer hover:opacity-80 transition-opacity overflow-hidden"
        aria-label="Go to home"
      >
        <motion.div
          initial={false}
          animate={{ 
            opacity: isHovered ? 0 : 1,
            x: isHovered ? -30 : 0
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
        >
          <Image
            src="/Nuba logo.svg"
            alt="Nuba Logo"
            width={25}
            height={18}
            className="w-6 h-auto"
          />
        </motion.div>
        <motion.div
          initial={false}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : 30
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute"
        >
          <Image
            src="/sun.svg"
            alt="Sun Logo"
            width={24}
            height={24}
            className="w-6 h-auto"
          />
        </motion.div>
      </button>
      
      <nav className="bg-white rounded-full px-6 py-3 flex items-center gap-6 border border-black">
        <a
          href={isCasePage ? "/#about" : "#about"}
          onClick={(e) => handleLinkClick(e, "#about")}
          className="text-black font-medium hover:opacity-70 transition-opacity"
        >
          About
        </a>
        <a
          href={isCasePage ? "/#works" : "#works"}
          onClick={(e) => handleLinkClick(e, "#works")}
          className="text-black font-medium hover:opacity-70 transition-opacity"
        >
          Work
        </a>
        <a
          href={isCasePage ? "/#services" : "#services"}
          onClick={(e) => handleLinkClick(e, "#services")}
          className="text-black font-medium hover:opacity-70 transition-opacity"
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
    </motion.header>
  );
}

