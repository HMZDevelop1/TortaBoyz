"use client";

import { motion } from "framer-motion";

interface DeliveryCardProps {
  icon: React.ReactNode;
  brandName: string;
  href: string;
  accentColor: string;
  description?: string;
  variant?: "card" | "pill" | "footer";
}

export default function DeliveryCard({
  icon,
  brandName,
  href,
  accentColor,
  description,
  variant = "card",
}: DeliveryCardProps) {
  if (variant === "pill") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300"
        style={{
          boxShadow: `0 0 0 0 transparent`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at center, ${accentColor}15 0%, transparent 70%)`,
          }}
        />
        <span className="relative z-10 w-5 h-5 flex items-center justify-center">
          {icon}
        </span>
        <span className="relative z-10 text-xs font-semibold tracking-wider uppercase text-torta-white/60 group-hover:text-torta-white transition-colors duration-300">
          {brandName}
        </span>
      </motion.a>
    );
  }

  if (variant === "footer") {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-300"
        style={{
          boxShadow: `0 0 0 0 transparent`,
        }}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(ellipse at left, ${accentColor}10 0%, transparent 70%)`,
          }}
        />
        <span className="relative z-10 w-[18px] h-[18px] flex items-center justify-center shrink-0">
          {icon}
        </span>
        <span className="relative z-10 text-xs font-semibold text-torta-white/50 group-hover:text-torta-white transition-colors duration-300">
          {brandName}
        </span>
        <svg
          className="relative z-10 w-3 h-3 ml-auto text-torta-white/20 group-hover:text-torta-white/50 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17l9-9M9 8h8v8" />
        </svg>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-7 md:p-8 transition-all duration-500"
      style={{
        boxShadow: `0 4px 30px rgba(0,0,0,0.3)`,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${accentColor}18 0%, transparent 70%)`,
        }}
      />

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{
          boxShadow: `inset 0 0 0 1px ${accentColor}40`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${accentColor}25 0%, ${accentColor}10 100%)`,
            boxShadow: `0 0 0 0 ${accentColor}20`,
          }}
        >
          <span className="w-7 h-7">{icon}</span>
        </div>

        <div>
          <h3 className="text-base font-bold text-torta-white group-hover:text-torta-white transition-colors duration-300">
            {brandName}
          </h3>
          {description && (
            <p className="text-xs text-torta-white/40 mt-1 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>

        <div
          className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 group-hover:gap-2.5"
          style={{
            color: `${accentColor}bb`,
          }}
        >
          Order Now
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
