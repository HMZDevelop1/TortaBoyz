"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryItem {
  src: string;
  label: string;
  tag: string;
}

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const [zoomed, setZoomed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setZoomed(false);
    setLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, currentIndex]);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleDragEnd = (_: any, info: any) => {
    if (zoomed) return;
    if (info.offset.x < -60) goNext();
    if (info.offset.x > 60) goPrev();
  };

  const current = items[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <div className="relative w-full h-full group">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all duration-300"
              aria-label="Close gallery"
            >
              <svg
                className="w-4 h-4 text-torta-white/50 hover:text-torta-white transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="absolute top-5 left-5 z-30 text-[11px] text-torta-white/25 font-medium tracking-[0.15em] tabular-nums">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")}
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 md:p-16"
              onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
              }}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: loaded ? 1 : 0, scale: loaded ? 1 : 0.92 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative flex items-center justify-center"
                onClick={() => setZoomed(!zoomed)}
                drag={zoomed ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.08}
                onDragEnd={handleDragEnd}
                style={{ touchAction: zoomed ? "auto" : "pan-y" }}
              >
                <div
                  className={`transition-transform duration-500 ease-out will-change-transform ${
                    zoomed ? "scale-[2] cursor-zoom-out" : "scale-100 cursor-zoom-in"
                  }`}
                >
                  <Image
                    src={current.src}
                    alt={current.label}
                    width={1200}
                    height={1500}
                    className="max-w-[92vw] max-h-[78vh] sm:max-h-[82vh] w-auto h-auto object-contain rounded-lg pointer-events-none select-none"
                    onLoad={() => setLoaded(true)}
                    priority
                    draggable={false}
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute bottom-6 left-0 right-0 text-center z-30 pointer-events-none"
            >
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/[0.06]">
                <span className="text-[10px] font-bold tracking-wider uppercase text-torta-white/40">
                  {current.tag}
                </span>
                <span className="w-px h-3 bg-white/10" />
                <span className="text-xs font-semibold text-torta-white/80">
                  {current.label}
                </span>
              </span>
            </motion.div>

            <button
              onClick={goPrev}
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:!opacity-100 focus:opacity-100"
              aria-label="Previous image"
            >
              <svg
                className="w-5 h-5 text-torta-white/40 group-hover:text-torta-white/70 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:!opacity-100 focus:opacity-100"
              aria-label="Next image"
            >
              <svg
                className="w-5 h-5 text-torta-white/40 group-hover:text-torta-white/70 transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
