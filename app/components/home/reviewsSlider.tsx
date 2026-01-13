"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    text: "The bees arrived calm and ready — setup was easy and rewarding!",
    name: "User 1",
    image: "/images/user.webp", 
  },
  {
    text: "Beautiful stock and helpful guidance. My first hive is thriving.",
    name: "User 2",
    image: "/images/user.webp", 
  },
  
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section className="py-20 bg-[var(--cream-bg)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Beekeeper Stories & Testimonials
        </h2>

        <div className="relative flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden md:flex w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-[var(--honey-gold)] hover:text-black transition"
          >
            <FaChevronLeft />
          </button>

          {/* Slider */}
          <div className="relative overflow-hidden w-full rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-lg flex flex-col items-center gap-4"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[var(--honey-gold)]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-6 text-center">
                  “{reviews[current].text}”
                </p>

                {/* Reviewer Info */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src={reviews[current].image}
                      alt={reviews[current].name}
                      width={72}
                      height={72}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {reviews[current].name}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden md:flex w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-[var(--honey-gold)] hover:text-black transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === current ? "bg-[var(--honey-gold)]" : "bg-gray-400/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
