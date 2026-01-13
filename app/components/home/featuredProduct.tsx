"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    title: "Package Bees – Ready to Install",
    slug: "package-bees",
    description:
      "Gentle 3 lb bees with well-bred queen (2026 season coming soon!).",
    image: "/images/bee-package.webp",
  },
  {
    title: "Up & Running Hive",
    slug: "up-and-running-hive",
    description: "Includes bees, box, queen & essential components.",
    image: "/images/hive.webp",
  },
  {
    title: "Queen Bees",
    slug: "queen-bees",
    description: "Newly bred, calm Italian honeybee queens (seasonal).",
    image: "/images/queen-bees.webp",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[var(--cream-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
          Our Best Sellers
        </h2>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {products.map((p, i) => {
            return (
              <Link
                key={i}
                href={`/product/${p.slug}`}
                className="group h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-white rounded-3xl shadow-md hover:shadow-2xl transition overflow-hidden flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Soft overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 leading-snug">
                      {p.title}
                    </h3>

                    <p className="text-sm text-gray-700 leading-relaxed flex-grow">
                      {p.description}
                    </p>

                    {/* CTA */}
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--deep-honey-brown)] group-hover:gap-3 transition-all">
                      View Details
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-14"
          >
            <Link
              href="/product"
              className="bg-[var(--honey-gold)] text-black px-10 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition inline-block"
            >
              Browse Full Beekeeping Selection
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-24 border-t border-gray-300" />
    </section>
  );
}
