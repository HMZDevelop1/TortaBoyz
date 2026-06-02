"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import Container from "./ui/Container";
import { Button } from "./ui";

export default function Location() {
  return (
    <section id="location" className="relative py-28 md:py-36 bg-torta-black overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Location
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            Find Us in{" "}
            <span className="text-torta-white/80">Little Italy</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-torta-charcoal/60 rounded-2xl border border-torta-white/5 p-8 lg:p-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-torta-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-torta-white/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-torta-white">
                    Our Address
                  </h3>
                  <p className="mt-2 text-sm text-torta-white/50 leading-relaxed">
                    354A Preston Street
                    <br />
                    Ottawa, ON K1S 3J2
                  </p>
                  <a
                    href="https://maps.google.com/?q=354A+Preston+Ottawa+ON+K1S+3J2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-torta-white/50 hover:text-torta-white tracking-wider uppercase transition-colors"
                  >
                    Get Directions
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-torta-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-torta-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-torta-white/70" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-torta-white">
                      Opening Hours
                    </h3>
                    <div className="mt-4 space-y-1">
                      {[
                        { days: "Mon\u2013Thu", hours: "11AM\u201310PM" },
                        { days: "Fri\u2013Sat", hours: "11AM\u201311PM" },
                        { days: "Sunday", hours: "11AM\u20139PM" },
                      ].map((row) => {
                        const isToday =
                          (row.days === "Mon\u2013Thu" && [1, 2, 3, 4].includes(new Date().getDay())) ||
                          (row.days === "Fri\u2013Sat" && [5, 6].includes(new Date().getDay())) ||
                          (row.days === "Sunday" && new Date().getDay() === 0);
                        return (
                          <div
                            key={row.days}
                            className={`flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-300 ${
                              isToday
                                ? "bg-torta-white/10 ring-1 ring-torta-white/20"
                                : "hover:bg-torta-white/5"
                            }`}
                          >
                            <span
                              className={`text-sm font-medium ${
                                isToday ? "text-torta-white" : "text-torta-white/50"
                              }`}
                            >
                              {row.days}
                            </span>
                            <span
                              className={`text-sm tabular-nums ${
                                isToday
                                  ? "text-torta-white font-bold"
                                  : "text-torta-white/60 font-medium"
                              }`}
                            >
                              {row.hours}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    <p className="mt-3 text-[11px] text-torta-white/20 tracking-wider uppercase">
                      Today&rsquo;s hours highlighted
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  as="a"
                  href="https://www.opentable.com/r/torta-boyz-ottawa"
                  target="_blank"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Reserve on OpenTable
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <img
              src="/images/exterior.jpg"
              alt="Torta Boyz restaurant exterior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-torta-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-torta-white/5 rounded-2xl" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-torta-black/70 backdrop-blur-md border border-torta-white/10">
                <span className="w-2 h-2 rounded-full bg-torta-white animate-pulse" />
                <span className="text-xs font-medium text-torta-white/70">
                  Now Open &middot; 354A Preston St
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
