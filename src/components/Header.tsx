"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-torta-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between h-18 md:h-20">
          <a
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Torta Boyz"
          >
            <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="text-torta-black font-black text-sm tracking-tight">TB</span>
            </div>
            <span className="text-base font-bold text-torta-white tracking-tight hidden sm:block">
              Torta Boyz
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold text-torta-white/50 hover:text-torta-white transition-colors duration-300 tracking-wider uppercase"
              >
                {link.label}
              </a>
            ))}
            <Button
              as="a"
              href="https://www.opentable.com/"
              target="_blank"
              variant="primary"
              size="sm"
            >
              Reserve a Table
            </Button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-torta-white/70 hover:text-torta-white transition-colors duration-300"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-torta-black/98 backdrop-blur-2xl z-40 md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-torta-white/60 hover:text-torta-white transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.06 }}
                onClick={() => setIsOpen(false)}
              >
                <Button
                  as="a"
                  href="https://www.opentable.com/"
                  target="_blank"
                  variant="primary"
                  size="lg"
                >
                  Reserve a Table
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
