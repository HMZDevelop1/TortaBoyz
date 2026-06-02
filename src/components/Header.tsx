"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { Logo } from "./ui";
import InstagramIcon from "./ui/InstagramIcon";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenu = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-torta-black/95 backdrop-blur-xl shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 sm:px-10 lg:px-14 h-20 md:h-24">
          <Logo href="#" size="sm" showText animated />

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="text-xs font-semibold text-torta-white/70 hover:text-torta-white tracking-[0.15em] uppercase transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-torta-white transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-torta-white/50 hover:text-torta-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </motion.a>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              <Button
                as="a"
                href="https://www.opentable.com/r/torta-boyz-ottawa"
                target="_blank"
                variant="primary"
                size="sm"
              >
                Reserve
              </Button>
            </motion.div>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex items-center justify-center p-2 text-torta-white/80"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-torta-black/98 z-50 flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between px-6 h-20 border-b border-torta-white/5">
                <Logo size="xs" showText animated />
                <button
                  onClick={closeMenu}
                  className="flex items-center justify-center p-2 text-torta-white/60"
                  aria-label="Close menu"
                  autoFocus
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 gap-10 px-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="text-2xl font-bold text-torta-white/80 hover:text-torta-white tracking-wide transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="text-torta-white/40 hover:text-torta-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-6 h-6" />
                </motion.a>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  className="flex flex-col gap-3 w-full max-w-xs"
                >
                  <Button
                    as="a"
                    href="https://www.opentable.com/r/torta-boyz-ottawa"
                    target="_blank"
                    variant="primary"
                    size="lg"
                    onClick={closeMenu}
                  >
                    Reserve a Table
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
