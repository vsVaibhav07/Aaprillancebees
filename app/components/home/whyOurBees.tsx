"use client";

import Image from "next/image";
import { FaLeaf, FaHandsHelping, FaTools } from "react-icons/fa"; // Import relevant icons

export default function WhyOurBees() {
  const points = [
    {
      title: "Local & Chemical-Free",
      description:
        "Our bees are lovingly raised and free from synthetic treatments — healthier and more sustainable.",
      icon: FaLeaf, // Leaf icon for natural/chemical-free
    },
    {
      title: "Gentle & Easy to Manage",
      description:
        "Perfect for first-time beekeepers — calm bees make beekeeping rewarding and stress-free.",
      icon: FaHandsHelping, // Helping hands icon for gentle/support
    },
    {
      title: "Full Support & Tools",
      description:
        "We offer quality equipment plus guidance to help you succeed.",
      icon: FaTools, // Tools icon for equipment/support
    },
  ];

  return (
    <section className="md:py-24 bg-[var(--cream-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
          Why Choose Our Bees?
        </h2>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:px-10 items-center">
          {/* Left Side */}
          <div className="space-y-10">
            {points.map((p, i) => {
              const IconComponent = p.icon; // Get the icon for this point
              return (
                <div key={i} className="flex gap-5 items-start">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[var(--honey-gold)]/20 flex items-center justify-center shrink-0">
                    <IconComponent className="text-[var(--honey-gold)] text-xl" />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/bee.png"
              alt="Honey Bee"
              width={420}
              height={420}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-gray-300" />
      </div>
    </section>
  );
}
