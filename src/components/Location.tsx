"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/3RXk52pvpFtfBMbk7";

const businessHours = [
  { day: "Mon", hours: "11:00 AM \u2013 10:00 PM" },
  { day: "Tue", hours: "11:00 AM \u2013 10:00 PM" },
  { day: "Wed", hours: "11:00 AM \u2013 10:00 PM" },
  { day: "Thu", hours: "11:00 AM \u2013 10:00 PM" },
  { day: "Fri", hours: "11:00 AM \u2013 12:00 AM" },
  { day: "Sat", hours: "10:00 AM \u2013 12:00 AM" },
  { day: "Sun", hours: "10:00 AM \u2013 9:00 PM" },
];

function getTodayIndex(): number {
  const d = new Date().getDay();
  return d === 0 ? 6 : d - 1;
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17l9-9M9 8h8v8" />
    </svg>
  );
}

export default function Location() {
  const todayIdx = getTodayIndex();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.4, 1, 1, 0.4]
  );

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative py-28 md:py-32 bg-torta-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-subtle opacity-[0.06]" />
      <Container className="relative z-10">
        <motion.div style={{ opacity: cardOpacity }} className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Visit Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-torta-white leading-tight">
              Find Us in{" "}
              <span className="text-torta-white/80">Little Italy</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <motion.div
              onClick={() => window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-torta-charcoal/80 to-torta-charcoal/40 p-6 lg:p-8 transition-all duration-500 hover:ring-card-hover hover:shadow-card-hover cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full -translate-y-24 translate-x-24 pointer-events-none" />

              <div className="relative space-y-5">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-torta-white group-hover:text-torta-white transition-colors duration-300">
                      Torta Boyz
                    </h3>
                    <p className="text-sm text-torta-white/60 group-hover:text-torta-white/80 transition-colors duration-300">
                      354A Preston Street
                      <br />
                      Ottawa, ON K1S 3J2
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                    <MapPinIcon className="w-5 h-5 text-torta-white/40 group-hover:text-torta-white/70 transition-colors duration-300" />
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                  </span>
                  <span className="text-xs font-bold text-torta-white/70 tracking-wider uppercase">
                    Now Open
                  </span>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-torta-white/40 uppercase tracking-wider mb-3">
                    Hours
                  </h4>
                  <table className="w-full text-sm">
                    <tbody>
                      {businessHours.map(({ day, hours }) => {
                        const isToday =
                          businessHours.indexOf({ day, hours }) === todayIdx;
                        return (
                          <tr
                            key={day}
                            className={`${
                              isToday ? "bg-white/5 rounded-lg" : ""
                            }`}
                          >
                            <td
                              className={`py-1.5 pr-4 font-medium ${
                                isToday
                                  ? "text-torta-white"
                                  : "text-torta-white/50"
                              }`}
                            >
                              {day}
                            </td>
                            <td
                              className={`py-1.5 text-right ${
                                isToday
                                  ? "text-torta-white font-medium"
                                  : "text-torta-white/40"
                              }`}
                            >
                              {hours}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
                  }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-torta-white text-torta-black text-sm font-bold tracking-wide transition-all duration-300 hover:bg-white/90 hover:gap-3 w-full justify-center cursor-pointer"
                >
                  <MapPinIcon className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </button>

                <a
                  href="https://www.opentable.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-white/10 text-torta-white/70 text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white/5 hover:text-torta-white w-full justify-center"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Reserve on OpenTable</span>
                  <ArrowUpRightIcon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-torta-charcoal/60 min-h-[300px] lg:min-h-full transition-all duration-500 hover:ring-card-hover hover:shadow-card-hover"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.123!2d-75.687!3d45.407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI0JzI1LjIiTiA3NcKwNDEnMTMuMiJX!5e0!3m2!1sen!2sca!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", inset: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Torta Boyz location on Google Maps"
                  className="pointer-events-none"
                />

                <div className="absolute inset-0 bg-torta-black/0 group-hover:bg-torta-black/20 transition-all duration-500" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 text-torta-white text-sm font-semibold translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <MapPinIcon className="w-4 h-4" />
                    View on Google Maps
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
