"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";

const galleryItems = [
  { src: "/images/food1.jpg", label: "Signature Tortas", tag: "Bestseller" },
  { src: "/images/food2.jpg", label: "Street Tacos", tag: "Authentic" },
  { src: "/images/food3.jpg", label: "Crafted Cocktails", tag: "Bar Favorite" },
  { src: "/images/exterior.jpg", label: "Outdoor Patio", tag: "Seasonal" },
  { src: "/images/food1.jpg", label: "Torta al Pastor", tag: "Signature" },
  { src: "/images/food2.jpg", label: "Taco Tuesday", tag: "Special" },
  { src: "/images/food3.jpg", label: "Happy Hour", tag: "5-7 PM" },
  { src: "/images/exterior.jpg", label: "Night Ambiance", tag: "Warm Vibes" },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const smoothX = useSpring(x, { stiffness: 40, damping: 15 });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] bg-torta-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ scale, opacity }} className="w-full">
          <div className="absolute top-16 left-0 right-0 z-10">
            <Container>
              <div className="flex items-end justify-between">
                <div>
                  <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-3">
                    Gallery
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-torta-white leading-tight">
                    A Taste of{" "}
                    <span className="text-torta-white/80">Torta Boyz</span>
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-2 text-torta-white/30 text-xs tracking-[0.15em] uppercase">
                  <span>Scroll</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-8 h-px bg-torta-white/40"
                  />
                </div>
              </div>
            </Container>
          </div>

          <motion.div
            style={{ x: smoothX }}
            className="flex gap-6 lg:gap-8 pl-8 lg:pl-14 mt-24"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="shrink-0"
              >
                <div className="relative w-[320px] lg:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 320px, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-torta-black/80 via-transparent to-torta-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 ring-1 ring-torta-white/5 rounded-2xl group-hover:ring-torta-white/20 transition-all duration-500" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-torta-white/10 backdrop-blur-md text-torta-white/80 text-[10px] font-bold tracking-wider uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-xl font-bold text-torta-white drop-shadow-lg">
                      {item.label}
                    </h3>
                    <p className="text-sm text-torta-white/50 mt-1">
                      Tap to explore
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-torta-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
