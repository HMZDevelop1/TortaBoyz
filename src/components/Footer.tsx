"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ExternalLink } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import UberEatsIcon from "./ui/UberEatsIcon";
import DoorDashIcon from "./ui/DoorDashIcon";
import Container from "./ui/Container";

const UBER_EATS_URL = "https://www.ubereats.com/ca/store/torta-boyz/uV2CrrhcXP-wbVKS09-wyA";
const DOORDASH_URL = "#";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const hoursRows = [
  { days: "Mon\u2013Thu", hours: "11AM\u201310PM" },
  { days: "Fri\u2013Sat", hours: "11AM\u201311PM" },
  { days: "Sunday", hours: "11AM\u20139PM" },
];

const infoCards = [
  {
    icon: MapPin,
    title: "Location",
    content: ["354A Preston Street", "Ottawa, ON K1S 3J2"],
    href: "https://maps.google.com/?q=354A+Preston+Ottawa+ON+K1S+3J2",
    label: "Get Directions",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    hours: hoursRows,
  },
];

export default function Footer() {
  return (
    <footer className="bg-torta-black border-t border-torta-white/5">
      <Container className="py-16 md:py-24">
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="inline-flex flex-col items-center gap-4"
          >
            <div className="relative">
              <img
                src="/images/logo.jpg"
                alt="Torta Boyz"
                className="w-20 h-20 rounded-full object-cover mx-auto"
              />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-black tracking-tight">
                <span className="text-torta-white">TORTA BOYZ</span>
              </div>
              <div className="text-xs text-torta-white/30 mt-1.5 tracking-[0.15em] uppercase">
                Preston Street &middot; Ottawa
              </div>
            </div>
          </motion.div>
          <p className="mt-6 text-sm text-torta-white/40 max-w-md mx-auto leading-relaxed">
            Authentic Mexican street food. Big flavors, generous portions, and a warm welcome every time.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {infoCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
              >
                <div className="h-full bg-torta-charcoal/50 rounded-2xl border border-torta-white/5 p-7 transition-all duration-500 hover:border-torta-white/10 hover:shadow-lg">
                  <div className="w-10 h-10 rounded-xl bg-torta-white/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-torta-white/70" />
                  </div>
                  <h4 className="text-sm font-bold text-torta-white tracking-wider uppercase mb-3">
                    {card.title}
                  </h4>
                  {card.hours ? (
                    <div className="space-y-1">
                      {card.hours.map((row) => {
                        const isToday =
                          (row.days === "Mon\u2013Thu" && [1, 2, 3, 4].includes(new Date().getDay())) ||
                          (row.days === "Fri\u2013Sat" && [5, 6].includes(new Date().getDay())) ||
                          (row.days === "Sunday" && new Date().getDay() === 0);
                        return (
                          <div
                            key={row.days}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${
                              isToday ? "bg-torta-white/10" : "hover:bg-torta-white/5"
                            }`}
                          >
                            <span className={`text-sm ${isToday ? "text-torta-white font-semibold" : "text-torta-white/50"}`}>
                              {row.days}
                            </span>
                            <span className={`text-sm tabular-nums ${isToday ? "text-torta-white font-bold" : "text-torta-white/60"}`}>
                              {row.hours}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      {card.content.map((line, j) => (
                        <p key={j} className="text-sm text-torta-white/50 leading-relaxed">
                          {line}
                        </p>
                      ))}
                    </div>
                  )}
                  {card.href && (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-semibold text-torta-white/50 hover:text-torta-white tracking-wider uppercase transition-colors"
                    >
                      {card.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-torta-white/5"
        >
          <div className="flex items-center gap-4">
            <a
              href={UBER_EATS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-torta-white/30 hover:text-torta-white transition-all duration-300 hover:scale-[1.04]"
            >
              <UberEatsIcon className="w-3.5 h-3.5" />
              Uber Eats
            </a>
            <a
              href={DOORDASH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-torta-white/30 hover:text-torta-white transition-all duration-300 hover:scale-[1.04]"
            >
              <DoorDashIcon className="w-3.5 h-3.5" />
              DoorDash
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-torta-charcoal border border-torta-white/10 flex items-center justify-center text-torta-white/40 hover:text-torta-white hover:border-torta-white/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.opentable.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-torta-white/30 hover:text-torta-white transition-colors"
            >
              OpenTable
            </a>
            <span className="text-torta-white/10 text-xs">|</span>
            <a
              href="https://github.com/HMZDevelop1/TortaBoyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-torta-white/20 hover:text-torta-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-torta-white/20">
            &copy; {new Date().getFullYear()} Torta Boyz. All rights reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
}
