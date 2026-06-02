"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";

const feedItems = [
  { src: "/images/food1.jpg", label: "Torta al Pastor", likes: "2.4k" },
  { src: "/images/food2.jpg", label: "Happy Hour", likes: "1.8k" },
  { src: "/images/food3.jpg", label: "Taco Tuesday", likes: "3.1k" },
  { src: "/images/exterior.jpg", label: "Patio Season", likes: "1.2k" },
  { src: "/images/food1.jpg", label: "Night Vibe", likes: "2.7k" },
  { src: "/images/food2.jpg", label: "Veggie Love", likes: "1.5k" },
  { src: "/images/food3.jpg", label: "Food Prep", likes: "2.9k" },
  { src: "/images/exterior.jpg", label: "Street Style", likes: "2.2k" },
];

export default function InstagramFeed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
      {feedItems.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className={`${i === 0 || i === 4 ? "row-span-2" : "row-span-1"}`}
        >
          <div className="relative w-full h-full min-h-[180px] md:min-h-[220px] rounded-xl overflow-hidden group cursor-pointer">
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-torta-black/60 via-transparent to-torta-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 ring-1 ring-torta-white/5 rounded-xl group-hover:ring-torta-white/20 transition-all duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center justify-between">
                <span className="text-white text-xs font-bold drop-shadow-lg">
                  {item.label}
                </span>
                <span className="text-white/80 text-xs font-medium flex items-center gap-1 drop-shadow-lg">
                  <Heart className="w-3 h-3" fill="currentColor" />
                  {item.likes}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
