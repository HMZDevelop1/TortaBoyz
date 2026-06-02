"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";

const ratings = [
  { platform: "Google", rating: "4.8", reviews: "961 reviews", color: "#FAFAF8" },
  { platform: "Uber Eats", rating: "4.7", reviews: "320+ reviews", color: "#FAFAF8" },
  { platform: "OpenTable", rating: "4.9", reviews: "180+ reviews", color: "#FAFAF8" },
];

const testimonials = [
  {
    text: "Service exceptionnel, nourriture extra, surtout la torta au boeuf!",
    author: "Sophie L.",
    source: "Google Reviews",
  },
  {
    text: "Les portions sont plus que généreuses et la qualité est incroyable.",
    author: "Marc T.",
    source: "Google Reviews",
  },
  {
    text: "Mention spéciale aux tortas, bien garnies et pleines de goût.",
    author: "Émilie R.",
    source: "Google Reviews",
  },
];

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-32 bg-torta-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.06]" />

      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            What Our{" "}
            <span className="text-torta-white/80">Guests Say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {ratings.map((r, i) => (
            <motion.div
              key={r.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-torta-charcoal/50 p-5 md:p-6 text-center transition-all duration-300 hover:ring-card-hover hover:shadow-card-hover"
            >
              <div className="text-xs text-torta-white/40 font-semibold tracking-wider uppercase mb-2">
                {r.platform}
              </div>
              <div className="text-3xl md:text-4xl font-black text-torta-white tabular-nums">
                {r.rating}
              </div>
              <div className="flex justify-center gap-0.5 my-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className="w-3 h-3 text-torta-white" />
                ))}
              </div>
              <div className="text-xs text-torta-white/40">{r.reviews}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-torta-charcoal/50 p-6 h-full transition-all duration-300 hover:ring-card-hover hover:shadow-card-hover">
                <QuoteIcon className="w-6 h-6 text-torta-white/10 mb-4" />
                <p className="text-sm text-torta-white/60 leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <div className="text-sm font-semibold text-torta-white">
                    {t.author}
                  </div>
                  <div className="text-xs text-torta-white/40 mt-0.5">
                    {t.source}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
