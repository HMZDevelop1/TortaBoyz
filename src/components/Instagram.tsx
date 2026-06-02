"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "./ui/InstagramIcon";
import Container from "./ui/Container";
import { Button } from "./ui";
import InstagramFeed from "./InstagramFeed";

export default function Instagram() {
  return (
    <section className="relative py-28 md:py-36 bg-torta-black overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-2 text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            <InstagramIcon className="w-4 h-4" />
            Follow Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            @TortaBoyzOttawa
          </h2>
          <p className="mt-5 text-base text-torta-white/40 max-w-md mx-auto">
            Tag us in your photos for a chance to be featured. Follow for daily
            specials, behind-the-scenes, and mouth-watering food content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <InstagramFeed />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Button
            as="a"
            href="https://instagram.com/"
            target="_blank"
            variant="outline"
            size="lg"
          >
            <InstagramIcon className="w-5 h-5" />
            Follow on Instagram
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
