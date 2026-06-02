"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import GalleryLightbox from "./GalleryLightbox";

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

function GalleryCard({
  item,
  index,
  scrollYProgress,
  onClick,
}: {
  item: (typeof galleryItems)[0];
  index: number;
  scrollYProgress: any;
  onClick: () => void;
}) {
  const startOffset = 0.05 + index * 0.025;
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [60 - index * 6, 0, 0, -40 + index * 4]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, startOffset, startOffset + 0.15, 1],
    [0.88, 0.88, 1, 0.92]
  );
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, startOffset, startOffset + 0.12, 0.85, 1],
    [0, 0, 1, 1, 0.3]
  );

  return (
    <motion.div style={{ y, scale, opacity: cardOpacity }} className="shrink-0">
      <motion.button
        onClick={onClick}
        className="relative w-[270px] sm:w-[310px] lg:w-[370px] aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer text-left block"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 270px, 370px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-torta-black/80 via-transparent to-torta-black/10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute inset-0 ring-1 ring-white/5 rounded-2xl group-hover:ring-white/15 transition-all duration-500" />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-torta-white/80 text-[10px] font-bold tracking-wider uppercase">
            {item.tag}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <h3 className="text-lg font-bold text-torta-white drop-shadow-lg">
            {item.label}
          </h3>
          <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-torta-white/70 text-[10px] font-semibold tracking-wider uppercase transition-all duration-300 group-hover:bg-white/20 group-hover:text-torta-white group-hover:gap-2">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span>Explore</span>
            <svg
              className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.button>
    </motion.div>
  );
}

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-58%"]);

  const headerOpacity = useTransform(
    smoothProgress,
    [0, 0.05, 0.92, 1],
    [0.4, 1, 1, 0]
  );

  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh] bg-torta-black overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ opacity: headerOpacity }} className="w-full">
          <div className="absolute top-14 left-0 right-0 z-10">
            <Container>
              <div className="flex items-end justify-between">
                <div>
                  <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-2">
                    Gallery
                  </span>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-torta-white leading-tight">
                    A Taste of{" "}
                    <span className="text-torta-white/80">Torta Boyz</span>
                  </h2>
                </div>
                <div className="hidden md:flex items-center gap-3 text-torta-white/25 text-[10px] tracking-[0.15em] uppercase font-medium">
                  <span>Scroll</span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-8 h-px bg-torta-white/30"
                  />
                </div>
              </div>
            </Container>
          </div>

          <motion.div
            style={{ x }}
            className="flex gap-5 lg:gap-6 pl-6 sm:pl-10 lg:pl-14 mt-28"
          >
            {galleryItems.map((item, i) => (
              <GalleryCard
                key={i}
                item={item}
                index={i}
                scrollYProgress={smoothProgress}
                onClick={() => openLightbox(i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-torta-black to-transparent z-10 pointer-events-none" />

      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="w-48 h-px bg-white/[0.06] relative overflow-hidden rounded-full">
          <motion.div
            style={{ width: progressWidth }}
            className="absolute inset-y-0 left-0 bg-white/30 rounded-full"
          />
        </div>
      </div>

      <GalleryLightbox
        items={galleryItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </section>
  );
}
