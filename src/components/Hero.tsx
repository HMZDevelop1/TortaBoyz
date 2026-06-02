"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const stats = [
  { label: "Google Rating", value: "4.8" },
  { label: "Reviews", value: "960+" },
  { label: "OpenTable Rating", value: "4.9" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.65, 0.85]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-torta-black"
    >
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <Image
          src="/images/food1.jpg"
          alt="Torta Boyz signature dish"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-r from-torta-black/95 via-torta-black/80 to-torta-black/60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-torta-black/70 via-transparent to-torta-black/30" />
      </motion.div>

      <div className="absolute inset-0 bg-grid-subtle opacity-20" />

      <motion.div
        style={{ y: textY }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-20"
      >
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-torta-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-torta-white/60 text-sm font-medium tracking-wide">
              4.8 &middot; 960+ reviews
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-torta-white leading-[0.92] tracking-tight"
          >
            Authentic
            <br />
            Mexican
            <br />
            Tortas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 text-lg md:text-xl text-torta-white/50 max-w-lg leading-relaxed"
          >
            Generous portions, handcrafted cocktails, and bold vegetarian options.
            Real Mexican street food on Ottawa&rsquo;s Preston Street.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              as="a"
              href="#menu"
              variant="primary"
              size="lg"
            >
              View Our Menu
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              as="a"
              href="https://www.opentable.com/"
              target="_blank"
              variant="outline"
              size="lg"
            >
              Reserve a Table
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-10 flex flex-wrap gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black text-torta-white">
                  {stat.value}
                </div>
                <div className="text-xs text-torta-white/40 font-medium mt-1 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-torta-white/30"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-torta-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
