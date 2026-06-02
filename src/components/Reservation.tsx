"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarDays, Clock, Wine } from "lucide-react";

const perks = [
  {
    icon: CalendarDays,
    title: "Reserve Online",
    desc: "Book your table in seconds via OpenTable. Walk-ins always welcome.",
  },
  {
    icon: Clock,
    title: "Flexible Timing",
    desc: "Open 7 days a week. Lunch, dinner, and weekend brunch available.",
  },
  {
    icon: Wine,
    title: "Private Events",
    desc: "Host your next gathering. We accommodate groups up to 40 guests.",
  },
];

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-torta-charcoal overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.04]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <motion.div style={{ opacity }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Reserve Your Table
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-torta-white leading-tight">
            Ready to{" "}
            <span className="text-torta-white/80">Experience Torta Boyz?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-torta-white/40 max-w-lg mx-auto">
            Book your table online and enjoy an authentic Mexican dining
            experience in the heart of Little Italy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-torta-black/40 p-5 md:p-6 text-center transition-all duration-300 hover:ring-card-hover hover:shadow-card-hover"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 mb-3">
                  <perk.icon className="w-4 h-4 text-torta-white/60" />
                </div>
                <h3 className="text-sm font-bold text-torta-white mb-1.5">
                  {perk.title}
                </h3>
                <p className="text-xs text-torta-white/40 leading-relaxed">
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.opentable.com/"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-torta-white text-torta-black font-bold text-sm hover:bg-white/90 transition-all duration-300 hover:gap-4 active:scale-[0.97]"
            >
              <CalendarDays className="w-4 h-4" />
              Book a Table on OpenTable
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-torta-black to-transparent pointer-events-none" />
    </section>
  );
}
