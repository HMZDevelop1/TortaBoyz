"use client";

import { motion } from "framer-motion";
import Container from "./ui/Container";

const ratings = [
  { platform: "Google", rating: "4.8", reviews: "961 reviews" },
  { platform: "Uber Eats", rating: "4.7", reviews: "320+ reviews" },
  { platform: "OpenTable", rating: "4.9", reviews: "180+ reviews" },
];

const testimonials = [
  {
    text: "Service exceptionnel, nourriture extra, surtout la torta au boeuf!",
    author: "Sophie L.",
    source: "Google Reviews",
  },
  {
    text: "Les portions sont plus que g\u00e9n\u00e9reuses et la qualit\u00e9 est incroyable.",
    author: "Marc T.",
    source: "Google Reviews",
  },
  {
    text: "Mention sp\u00e9ciale aux tortas, bien garnies et pleines de go\u00fbt.",
    author: "\u00c9milie R.",
    source: "Google Reviews",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative pt-10 md:pt-14 pb-28 md:pb-36 bg-torta-black overflow-hidden">
      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            What Our{" "}
            <span className="text-torta-white/80">Guests Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-5"
        >
          {ratings.map((item, i) => (
            <motion.div
              key={item.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="min-w-[200px] max-w-[260px] bg-torta-charcoal/60 rounded-2xl border border-torta-white/5 p-7 text-center transition-all duration-500 hover:border-torta-white/20 hover:shadow-xl hover:shadow-white/5">
                <div className="text-xs font-semibold text-torta-white/40 tracking-[0.15em] uppercase">
                  {item.platform}
                </div>
                <div className="mt-3 text-4xl font-black text-torta-white">
                  {item.rating}
                </div>
                <div className="mt-2 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg
                      key={s}
                      className="w-4 h-4 text-torta-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-3 text-xs text-torta-white/40 font-medium">
                  {item.reviews}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-torta-charcoal/50 rounded-2xl border border-torta-white/5 p-7 lg:p-8 transition-all duration-500 hover:border-torta-white/10 hover:shadow-lg">
                <svg className="w-8 h-8 text-torta-white/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.648-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.648-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-torta-white/70 text-sm leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t border-torta-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-torta-white/10 flex items-center justify-center text-torta-white text-xs font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-torta-white text-sm">
                        {t.author}
                      </div>
                      <div className="text-xs text-torta-white/30">
                        {t.source}
                      </div>
                    </div>
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
