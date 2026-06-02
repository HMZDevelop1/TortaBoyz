"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("torta-boyz-loaded");
    if (hasLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("torta-boyz-loaded", "true");
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-torta-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Torta Boyz"
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-2xl font-black tracking-tight text-torta-white">
                TORTA BOYZ
              </div>
              <div className="text-torta-white/30 text-xs font-medium mt-1 tracking-widest uppercase">
                Authentic Mexican Street Food
              </div>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="h-0.5 bg-torta-white/30 rounded-full mt-2"
              style={{ width: 80 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
