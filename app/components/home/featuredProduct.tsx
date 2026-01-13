"use client";

import { motion } from "framer-motion";

const products = [
  {
    title: "Package Bees – Ready to Install",
    description: "Gentle 3 lb bees with well-bred queen (2026 season coming soon!).",
  },
  {
    title: "Up & Running Hive",
    description: "Includes bees, box, queen & essential components.",
  },
  {
    title: "Queen Bees",
    description: "Newly bred, calm Italian honeybee queens (seasonal).",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-[var(--cream-bg)]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our Best Sellers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.description}</p>
            </motion.div>
          ))}
        </div>
        <button className="mt-10 cursor-pointer bg-[var(--honey-gold)] text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
          Browse Full Beekeeping Selection
        </button>
      </div>
      <div className="mt-20 border-t border-gray-300" />
    </section>
  );
}
