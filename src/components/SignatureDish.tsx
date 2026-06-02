"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";

const dishes = [
  {
    src: "/images/food1.jpg",
    title: "Torta al Pastor",
    desc: "Marinated pork shoulder grilled to perfection, topped with caramelized pineapple, fresh cilantro, and our house-made chipotle crema.",
    tags: ["Signature", "Most Popular"],
    position: "left" as const,
  },
  {
    src: "/images/food2.jpg",
    title: "Tacos de Barbacoa",
    desc: "Slow-braised beef cheek simmered for hours with guajillo chilies, garlic, and aromatic spices. Wrapped in warm corn tortillas.",
    tags: ["House Specialty", "Slow-Cooked"],
    position: "right" as const,
  },
  {
    src: "/images/food3.jpg",
    title: "Spicy Jalape\u00f1o Margarita",
    desc: "Our signature twist on the classic. Fresh-squeezed lime, premium tequila, agave nectar, and muddled jalape\u00f1o for the perfect heat.",
    tags: ["Bar Favorite", "Signature Cocktail"],
    position: "left" as const,
  },
];

function DishRow({ dish, index }: { dish: (typeof dishes)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = dish.position === "left";

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const imgX = useTransform(scrollYProgress, [0, 1], [isLeft ? -80 : 80, 0]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.88, 1, 1, 0.88]);

  const textX = useTransform(scrollYProgress, [0, 1], [isLeft ? 80 : -80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="min-h-[60vh] flex items-center py-10">
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isLeft ? "" : "lg:direction-rtl"
        }`}
      >
        <motion.div
          style={{ x: imgX, opacity: imgOpacity, scale: imgScale }}
          className={`${isLeft ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative aspect-[5/6] rounded-2xl overflow-hidden">
            <Image
              src={dish.src}
              alt={dish.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-torta-black/50 via-transparent to-transparent" />
            <div className="absolute inset-0 ring-1 ring-torta-white/5 rounded-2xl" />
          </div>
        </motion.div>

        <motion.div
          style={{ x: textX, opacity: textOpacity }}
          className={`${isLeft ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="max-w-lg">
            <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
              {"0" + (index + 1)}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-torta-white leading-tight">
              {dish.title}
            </h3>
            <p className="mt-5 text-base text-torta-white/50 leading-relaxed">
              {dish.desc}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {dish.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full bg-torta-white/10 text-torta-white/70 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SignatureDishes() {
  return (
    <section className="relative py-28 md:py-36 bg-torta-black overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-0"
        >
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Signature Dishes
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight max-w-2xl mx-auto">
            Crafted by Hand,{" "}
            <span className="text-torta-white/80">Loaded with Flavor</span>
          </h2>
        </motion.div>
      </Container>

      {dishes.map((dish, i) => (
        <Container key={dish.title}>
          <DishRow dish={dish} index={i} />
        </Container>
      ))}
    </section>
  );
}
