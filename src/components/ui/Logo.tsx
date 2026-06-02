"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LogoSize = "xs" | "sm" | "md" | "lg" | "xl";

interface LogoProps {
  size?: LogoSize;
  showText?: boolean;
  className?: string;
  animated?: boolean;
  href?: string;
}

const sizeMap: Record<LogoSize, { img: number; text: string }> = {
  xs: { img: 24, text: "text-sm" },
  sm: { img: 32, text: "text-base" },
  md: { img: 40, text: "text-xl" },
  lg: { img: 56, text: "text-2xl" },
  xl: { img: 80, text: "text-4xl" },
};

const containerVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 },
  },
};

export default function Logo({
  size = "md",
  showText = true,
  className = "",
  animated = false,
  href,
}: LogoProps) {
  const { img, text } = sizeMap[size];
  const Tag = href ? motion.a : motion.div;

  return (
    <Tag
      {...(href ? { href } : {})}
      className={`inline-flex items-center gap-2 sm:gap-3 ${className}`}
      initial={animated ? "hidden" : false}
      animate="visible"
      whileHover="hover"
      variants={animated ? containerVariants : undefined}
    >
      <motion.div
        className="relative flex-shrink-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ width: img, height: img }}
      >
        <Image
          src="/images/logo.jpg"
          alt="Torta Boyz"
          width={img * 2}
          height={img * 2}
          className="rounded-full object-cover"
          style={{ width: img, height: img }}
          priority
        />
      </motion.div>

      {showText && (
        <motion.span
          variants={animated ? textVariants : undefined}
          className={`font-black tracking-tight leading-none ${text}`}
        >
          <span className="text-torta-white">TORTA</span>{" "}
          <span className="text-torta-white/60">BOYZ</span>
        </motion.span>
      )}
    </Tag>
  );
}
