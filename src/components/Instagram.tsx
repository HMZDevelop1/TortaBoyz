"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";

const feedImages = [
  { src: "/images/food1.jpg", label: "Torta al Pastor", likes: "2.4k" },
  { src: "/images/food3.jpg", label: "Happy Hour", likes: "1.8k" },
  { src: "/images/food2.jpg", label: "Taco Tuesday", likes: "3.1k" },
  { src: "/images/exterior.jpg", label: "Patio Season", likes: "1.2k" },
  { src: "/images/food1.jpg", label: "Night Vibe", likes: "2.7k" },
  { src: "/images/food2.jpg", label: "Veggie Love", likes: "1.5k" },
  { src: "/images/food3.jpg", label: "Food Prep", likes: "2.9k" },
  { src: "/images/exterior.jpg", label: "Street Style", likes: "2.2k" },
  { src: "/images/food1.jpg", label: "Brunch Vibes", likes: "1.9k" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-32 bg-torta-black overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Follow Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-torta-white leading-tight">
            <span className="text-torta-white/80">@TortaBoyzOttawa</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-torta-white/40 max-w-lg mx-auto">
            Tag us in your photos for a chance to be featured. Follow for daily specials,
            behind-the-scenes, and mouth-watering food content.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 lg:gap-3">
          {feedImages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-torta-black/0 group-hover:bg-torta-black/40 transition-all duration-500" />
              <div className="absolute inset-0 ring-1 ring-white/5 rounded-xl group-hover:ring-white/15 transition-all duration-500" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-torta-white drop-shadow-lg shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
                <span className="text-xs font-bold text-torta-white drop-shadow-lg">
                  {item.likes}
                </span>
                <span className="text-[10px] text-torta-white/60 drop-shadow-lg ml-auto truncate">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-torta-white/70 text-sm font-semibold hover:bg-white/5 hover:text-torta-white hover:border-white/20 transition-all duration-300 active:scale-[0.97]"
          >
            <InstagramIcon className="w-4 h-4" />
            Follow on Instagram
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
