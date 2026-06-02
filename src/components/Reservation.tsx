"use client";

import { motion } from "framer-motion";
import { Sun, Wine, Leaf } from "lucide-react";
import Container from "./ui/Container";
import { Button } from "./ui";

const perks = [
  { icon: Sun, text: "Outdoor seating available" },
  { icon: Wine, text: "Excellent cocktails" },
  { icon: Leaf, text: "Vegetarian options" },
];

export default function Reservation() {
  return (
    <section className="relative py-28 md:py-36 bg-torta-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-torta-black via-torta-charcoal to-torta-gray-900" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Reserve a Table
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight"
          >
            Get Your{" "}
            <span className="text-torta-white/80">Torta Fix</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-torta-white/50 max-w-lg mx-auto"
          >
            Join us on Preston Street for handcrafted cocktails and bold Mexican
            flavors. Reserve your table today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            {perks.map((perk) => (
              <div
                key={perk.text}
                className="flex items-center gap-2 text-torta-white/50 text-sm font-medium"
              >
                <perk.icon className="w-4 h-4 text-torta-white/70" />
                {perk.text}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Button
              as="a"
              href="https://www.opentable.com/"
              target="_blank"
              variant="primary"
              size="lg"
            >
              Reserve on OpenTable
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-torta-black to-transparent" />
    </section>
  );
}
