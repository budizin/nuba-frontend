"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { works } from "../../page";
import Navbar from "../../components/Navbar";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function CasePage({ params }: Props) {
  const { slug } = use(params);
  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case not found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />

      <main className="relative flex flex-col pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-6 md:px-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[28vw] md:text-[180px] font-bold text-black leading-none tracking-tight text-center"
          >
            {work.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-sm md:text-base uppercase tracking-wider text-neutral-600 text-center max-w-2xl"
          >
            {work.subtitle}
          </motion.p>
          {work.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-base md:text-lg text-neutral-700 leading-relaxed text-center max-w-3xl"
            >
              {work.description}
            </motion.p>
          )}
          {work.links && (work.links.web || work.links.ios || work.links.android || work.links.behance) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap gap-4 justify-center"
            >
              {work.links.web && (
                <a
                  href={work.links.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#BAF038] text-black font-medium px-6 py-2 rounded-full hover:bg-[#a8d832] transition-colors"
                >
                  View Website
                </a>
              )}
              {work.links.ios && (
                <a
                  href={work.links.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  iOS App
                </a>
              )}
              {work.links.android && (
                <a
                  href={work.links.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  Android App
                </a>
              )}
              {work.links.behance && (
                <a
                  href={work.links.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  View on Behance
                </a>
              )}
            </motion.div>
          )}
        </section>

        {/* Task Section */}
        <section className="relative bg-neutral-100 py-20 md:py-32 overflow-hidden">
          <div className="px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
                <motion.h2
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15vw] md:text-[120px] font-bold text-black leading-none tracking-tight"
                >
                  task
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-center"
                >
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-6">
                    {work.task}
                  </p>
                  {work.features && work.features.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-bold mb-4">Key Features</h3>
                      <ul className="space-y-2 text-base text-neutral-700">
                        {work.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </div>
              
              {/* Floating Image */}
              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="mt-16 md:mt-24 relative"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full md:w-[80%] mx-auto aspect-[4/3] overflow-hidden shadow-2xl"
                >
                  <img
                    src={work.images && work.images.length > 0 ? work.images[0] : work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="relative bg-white py-20 md:py-32 overflow-hidden">
          <div className="px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-16 md:mb-24">
                <motion.h2
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[15vw] md:text-[120px] font-bold text-black leading-none tracking-tight"
                >
                  solutions
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col justify-center"
                >
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-8">
                    {work.solutions}
                  </p>
                  {work.technologies && work.technologies.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-lg font-bold mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {work.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Image Grid */}
              {work.images && work.images.length > 1 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {work.images.slice(1, 3).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="relative aspect-[4/3] overflow-hidden shadow-xl"
                    >
                      <img
                        src={img}
                        alt={`${work.title} - Image ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/3] overflow-hidden shadow-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                      alt="Process"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 30 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/3] overflow-hidden shadow-xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                      alt="Design"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="relative bg-neutral-50 py-20 md:py-32">
          <div className="px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12"
              >
                <h2 className="text-[15vw] md:text-[120px] font-bold text-black leading-none tracking-tight mb-8">
                  process
                </h2>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-3xl">
                  {work.process || "We studied the company's activities, target audience, and competitors. Then we developed a creative concept and wrote the copy. We infused the design concept with the ideas, then created and animated the visual elements."}
                </p>
              </motion.div>

              {/* Large Floating Image */}
              <motion.div
                initial={{ opacity: 0, y: 80, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 1, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-full aspect-[16/9] overflow-hidden shadow-2xl"
                >
                  <img
                    src={work.images && work.images.length > 3 ? work.images[3] : (work.images && work.images.length > 0 ? work.images[0] : work.image)}
                    alt={work.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Showcase Section */}
        <section className="relative bg-neutral-900 py-20 md:py-32 overflow-hidden">
          <div className="px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12 text-center"
              >
                <h2 className="text-[15vw] md:text-[120px] font-bold text-white leading-none tracking-tight mb-8">
                  result
                </h2>
                <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                  {work.result || "A website that breaks conventions while respecting the industry's visual language. Bold, innovative, and distinctly memorable."}
                </p>
              </motion.div>

              {work.images && work.images.length >= 3 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {work.images.slice(0, 3).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="relative aspect-[3/4] overflow-hidden shadow-2xl"
                    >
                      <img
                        src={img}
                        alt={`${work.title} - Result ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[3/4] overflow-hidden shadow-2xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=800&fit=crop"
                      alt="Result 1"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[3/4] overflow-hidden shadow-2xl"
                  >
                    <img
                      src={work.image}
                      alt="Result 2"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[3/4] overflow-hidden shadow-2xl"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=800&fit=crop"
                      alt="Result 3"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Back to Works */}
        <section className="relative bg-white py-20 md:py-32">
          <div className="px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
              <Link
                href="/#works"
                className="inline-block bg-[#BAF038] text-black font-medium px-12 py-4 rounded-full hover:bg-[#a8d832] transition-colors"
              >
                Back to Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

