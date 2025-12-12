"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type BirdData = {
  id: number;
  delay: number;
  duration: number;
  yPosition: number;
  size: number;
  floatAmplitude: number;
};

// BIRD ESTILIZADO + ALETEO
const Bird = ({
  size,
  birdRef,
}: {
  size: number;
  index: number;
  birdRef: (el: SVGSVGElement | null) => void;
}) => {
  return (
    <svg
      ref={birdRef}
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute"
      style={{
        left: "-80px",
        top: "0%",
        opacity: 0,
        transformOrigin: "center",
      }}
    >
      <path
        fill="#000000"
        d="M3 12h7v-1h1v-1h-1V9H9v1H4V9H3V6h1V5h1v1H4v3h5V8H8V7H7V6H6V2H5V1H2v1H1v1H0v1h1v6h1v1h1Zm0-8V3h1v1Zm0 0"
      />
    </svg>
  );
};


export default function FlyingBirds() {
  const containerRef = useRef<HTMLDivElement>(null);
  const birdEls = useRef<Array<SVGSVGElement | null>>([]);
  const [birds, setBirds] = useState<BirdData[]>([]);

  // Datos de cada pájaro
  useEffect(() => {
    const generatedBirds = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      delay: i * 2.6,
      duration: 18 + Math.random() * 6,
      yPosition: 85 + i * 2 + Math.random() * 2, // sobre "nuba"
      size: 20 + Math.random() * 8,
      floatAmplitude: Math.random() * 20 - 10,
    }));
    setBirds(generatedBirds);
  }, []);

  // Animaciones GSAP de vuelo
  useEffect(() => {
    if (!containerRef.current || birds.length === 0) return;

    const ctx = gsap.context(() => {
      birds.forEach((bird, i) => {
        const el = birdEls.current[i];
        if (!el) return;

        const baseY = bird.yPosition;
        const amp = bird.floatAmplitude;

        gsap.set(el, { xPercent: 0, yPercent: 0 });

        const tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 0,
          delay: bird.delay,
        });

        tl.set(el, { x: -180, y: `${baseY}%`, opacity: 0 });

        tl.to(el, {
          x: -100,
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
        });

        tl.to(el, {
          x: "120vw",
          y: `${baseY + amp}%`,
          duration: bird.duration,
          ease: "none",
          opacity: 1,
        });

        tl.to(el, {
          opacity: 0,
          duration: 0.4,
          ease: "power1.out",
        }, "-=0.4");

        // Oscilación vertical (realismo)
        gsap.to(el, {
          y: `+=${amp}`,
          duration: 2.5 + Math.random() * 1.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: bird.delay,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [birds]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-[40]"
      style={{ overflow: "hidden" }}
    >
      {birds.map((bird, idx) => (
        <Bird
          key={bird.id}
          size={bird.size}
          index={idx}
          birdRef={(el) => (birdEls.current[idx] = el)}
        />
      ))}
    </div>
  );
}
