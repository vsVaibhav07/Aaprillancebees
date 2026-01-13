"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen pt-20 w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://mountainsweethoney.com/wp-content/uploads/2022/03/live-bees-background-mobile.jpg"
          alt="Happy hive and beekeeper"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl text-white"
        >
          {/* Headline */}
        <h1
  className="text-white text-3xl opacity-80 md:text-5xl font-semibold mb-6"
  style={{ color:"white" }}
>
            Gentle, Local Chemical-Free Honey Bees for Your Backyard Hive
          </h1>

          {/* Subtext */}
          <p className="text-[var(--honey-gold)] text-lg md:text-xl mb-8">
            We raise and supply treatment-free honey bees and quality beekeeping
            equipment — perfect for hobbyists or backyard beekeepers.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <FaCheckCircle className="text-[var(--honey-gold)] text-lg" />
              <span className="text-sm md:text-base">Chemical-free</span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <FaCheckCircle className="text-[var(--honey-gold)] text-lg" />
              <span className="text-sm md:text-base">Locally bred</span>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <FaCheckCircle className="text-[var(--honey-gold)] text-lg" />
              <span className="text-sm md:text-base">Easy to manage</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[var(--honey-gold)] cursor-pointer text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
              Order Bees Today
            </button>

            <button className="border cursor-pointer animate-pulse border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Learn More About Our Bees
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
