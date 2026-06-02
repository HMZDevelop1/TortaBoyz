"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./ui/Container";
import UberEatsIcon from "./ui/UberEatsIcon";
import DoorDashIcon from "./ui/DoorDashIcon";
import DeliveryCard from "./ui/DeliveryCard";

const UBER_EATS_URL = "https://www.ubereats.com/ca/store/torta-boyz/uV2CrrhcXP-wbVKS09-wyA";
const DOORDASH_URL = "https://www.doordash.com/business/taco-boyz-11187188?srsltid=AfmBOop7O0EGWAuhARCURqfibSWstO5oLp7choxtOTY_kqF_2xf5n5lx";

const categories = [
  {
    name: "Signature Tortas",
    description: "Loaded telera rolls with premium ingredients",
    items: [
      { name: "Torta al Pastor", price: "$16", desc: "Marinated pork, pineapple, cilantro" },
      { name: "Torta de Asada", price: "$18", desc: "Grilled beef, avocado, refried beans" },
      { name: "Torta de Pollo", price: "$16", desc: "Chicken tinga, chipotle crema" },
    ],
  },
  {
    name: "Street Tacos",
    description: "Authentic corn tortilla creations",
    items: [
      { name: "Taco al Pastor", price: "$5", desc: "Pork, pineapple, fresh cilantro" },
      { name: "Taco de Barbacoa", price: "$6", desc: "Slow-cooked beef, consomm\u00e9" },
      { name: "Taco Vegetariano", price: "$5", desc: "Grilled veggies, guacamole" },
    ],
  },
  {
    name: "Crafted Cocktails",
    description: "Hand-shaken margaritas and more",
    items: [
      { name: "Spicy Margarita", price: "$14", desc: "Tequila, lime, jalape\u00f1o" },
      { name: "Paloma Cl\u00e1sica", price: "$13", desc: "Tequila, grapefruit, soda" },
      { name: "Mezcal Mule", price: "$15", desc: "Mezcal, ginger beer, lime" },
    ],
  },
  {
    name: "Vegetarian",
    description: "Bold flavors, plant-powered",
    items: [
      { name: "Veggie Torta", price: "$15", desc: "Grilled vegetables, guacamole" },
      { name: "Quesadilla de Hongos", price: "$13", desc: "Wild mushrooms, Oaxaca cheese" },
      { name: "Ensalada de Nopal", price: "$12", desc: "Cactus salad, cotija cheese" },
    ],
  },
];

export default function MenuPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="menu" ref={sectionRef} className="relative py-28 md:py-32 bg-torta-black overflow-hidden">
      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Our Menu
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            Bold Flavors,{" "}
            <span className="text-torta-white/80">Big Portions</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-torta-white/40 max-w-lg mx-auto">
            From our signature tortas to hand-shaken cocktails &mdash; every dish
            is made to order with the freshest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-torta-charcoal/60 transition-all duration-500 hover:ring-card-hover hover:shadow-card-hover">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-5">
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-torta-white transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-torta-white/40">
                        {cat.description}
                      </p>
                    </div>
                    <span className="text-torta-white/[0.07] text-4xl font-black leading-none mt-0.5">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-2.5 border-b border-white/[0.04] last:border-0"
                      >
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-torta-white/90 text-sm">
                            {item.name}
                          </span>
                          <p className="text-xs text-torta-white/40 mt-0.5 truncate">
                            {item.desc}
                          </p>
                        </div>
                        <span className="text-base font-bold text-torta-white/80 whitespace-nowrap ml-4 tabular-nums">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-14"
        >
          <div className="text-center mb-6">
            <p className="text-xs text-torta-white/30 font-medium tracking-[0.15em] uppercase">
              Prefer delivery?
            </p>
            <p className="text-sm text-torta-white/40 mt-1">
              Order your favorites straight to your door
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <DeliveryCard
              icon={<UberEatsIcon className="w-full h-full" />}
              brandName="Uber Eats"
              description="Fast delivery &amp; real-time tracking"
              href={UBER_EATS_URL}
              accentColor="#06C167"
            />
            <DeliveryCard
              icon={<DoorDashIcon className="w-full h-full" />}
              brandName="DoorDash"
              description="DashPass members save on every order"
              href={DOORDASH_URL}
              accentColor="#FF3008"
            />
          </div>
          <div className="text-center mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-torta-white/40 hover:text-torta-white transition-all duration-300 hover:gap-2.5 group"
            >
              View Full Menu
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
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
