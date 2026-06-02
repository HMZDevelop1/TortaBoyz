"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import { Button } from "./ui";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.92]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 md:py-36 bg-torta-black overflow-hidden"
    >
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/exterior.jpg"
                alt="Torta Boyz restaurant"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-torta-black/50 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-5 -right-5 bg-torta-charcoal/95 backdrop-blur-xl border border-torta-white/10 rounded-xl p-5 shadow-2xl"
            >
              <div className="text-3xl font-black text-torta-white">4.8</div>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-torta-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-xs text-torta-white/40 mt-1 font-medium">
                Google Reviews
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: contentY }}
            className="max-w-lg"
          >
            <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-[1.05]">
              Real Mexican Flavors,
              <br />
              <span className="text-torta-white/80">Right in Little Italy</span>
            </h2>
            <div className="mt-6 space-y-4 text-torta-white/50 leading-relaxed">
              <p>
                Torta Boyz was born from a love for bold, unapologetic Mexican
                street food. We bring the vibrant spirit of Mexico&rsquo;s
                taquerias to Ottawa&rsquo;s Preston Street &mdash; one generous
                torta at a time.
              </p>
              <p>
                Every torta, taco, and sip is handcrafted with care using
                traditional recipes and the freshest locally sourced
                ingredients. From our marinated al pastor to our house-made
                chipotle crema, every detail matters.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                as="a"
                href="https://www.opentable.com/"
                target="_blank"
                variant="primary"
                size="md"
              >
                Reserve a Table
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                as="a"
                href="#location"
                variant="outline"
                size="md"
              >
                Find Us
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
