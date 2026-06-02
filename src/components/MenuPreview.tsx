"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import { Button } from "./ui";
import UberEatsIcon from "./ui/UberEatsIcon";
import DoorDashIcon from "./ui/DoorDashIcon";

const UBER_EATS_URL = "https://www.ubereats.com/ca/store/torta-boyz/uV2CrrhcXP-wbVKS09-wyA";
const DOORDASH_URL = "#";

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

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="menu" ref={sectionRef} className="relative py-28 md:py-36 bg-torta-black overflow-hidden">
      <Container className="relative z-10">
        <motion.div style={{ opacity }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-torta-white/40 font-semibold text-xs tracking-[0.2em] uppercase mb-4">
            Our Menu
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-torta-white leading-tight">
            Bold Flavors,{" "}
            <span className="text-torta-white/80">Big Portions</span>
          </h2>
          <p className="mt-5 text-lg text-torta-white/40 max-w-lg mx-auto">
            From our signature tortas to hand-shaken cocktails &mdash; every dish
            is made to order with the freshest ingredients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-torta-white/5 bg-torta-charcoal/60 transition-all duration-500 hover:border-torta-white/20 hover:shadow-2xl hover:shadow-white/5">
                <div className="absolute inset-0 bg-gradient-to-br from-torta-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative p-7 lg:p-9">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-torta-white transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-torta-white/40 mt-1">
                        {cat.description}
                      </p>
                    </div>
                    <span className="text-torta-white/10 text-5xl font-black leading-none">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-3 border-b border-torta-white/5 last:border-0 last:pb-0"
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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-torta-white/30 mb-6 font-medium tracking-wider uppercase">
            Prefer delivery?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button as="a" href={UBER_EATS_URL} target="_blank" variant="primary" size="md">
              <UberEatsIcon className="w-4 h-4" />
              Order on Uber Eats
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button as="a" href={DOORDASH_URL} target="_blank" variant="outline" size="md">
              <DoorDashIcon className="w-4 h-4" />
              Order on DoorDash
            </Button>
            <Button as="a" href="#" variant="ghost" size="md">
              View Full Menu
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
