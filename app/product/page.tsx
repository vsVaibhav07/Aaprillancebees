import Image from "next/image";
import Link from "next/link";

export default function HoneyBeesPage() {
  return (
    <section className="bg-[var(--cream-bg)] py-20 pt-44 lg:pt-48 lg:px-32">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Up and Running Hive
            </h2>

            <p className="text-xl font-bold text-[var(--deep-honey-brown)] mb-6">
              $490 Full Price | Deposit $90
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Ready to set up in your backyard</li>
              <li>New Spring 2025 Queen</li>
              <li>Lots of bees (3-5 frames full)</li>
              <li>Metal lid, inner thicker cover</li>
              <li>Deep box with 10 frames</li>
              <li>Bottom with observation board</li>
            </ul>

            <p className="text-gray-700 mb-4">
              Bring $400 cash for balance. They will be available for pickup in
              Healdsburg, CA. We will forward you directions for pick up.
            </p>

            <p className="text-gray-800 font-medium mb-6">
              Gentle, Calm, Lovingly Raised, Treatment Free Honey Bees
            </p>

            <Link
              href="/product/up-and-running-hive"
              className="inline-block bg-[var(--honey-gold)] text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Book Now
            </Link>
          </div>

          <div className="flex md:justify-end">
            <div className="relative w-full md:max-w-md h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/hive.webp"
                alt="Up and Running Hive"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Package Bees
            </h2>

            <p className="text-xl font-bold text-[var(--deep-honey-brown)] mb-6">
              $180 Full Price | Deposit $40
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
              <li>With New Well-Bred Spring Queen</li>
              <li>Generous 3 lb Package Ready to Install</li>
              <li className="font-semibold text-black">
                2025 Sold Out! See you in Spring, 2026.
              </li>
              <li>We will send pickup address via email</li>
              <li>
                Full price $180.00 Deposit $40.00. When picking up, please bring
                $140 in cash.
              </li>
            </ul>

            <p className="text-lg font-semibold text-gray-900 mt-6 mb-2">
              Local Northern California Honey Bees
            </p>

            <p className="text-gray-700 mb-6">
              Gentle, Calm, Lovingly Raised, Treatment Free Honey Bees
            </p>

            <Link
              href="/product/package-bees"
              className="inline-block bg-[var(--honey-gold)] text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Book Now
            </Link>
          </div>

          <div className="flex md:justify-end">
            <div className="relative w-full md:max-w-md h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/bee-package.webp"
                alt="Package Bees"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-3">
              Queen Bee
            </h2>

            <p className="text-xl font-bold text-[var(--deep-honey-brown)] mb-6">
              $42.00 in full
            </p>

            <p className="text-gray-700 mb-3">
              New, Local Northern California well Bred Spring Italian Honey Bee Queen
            </p>

            <p className="font-semibold text-black mb-3">
              2025 Sold Out! See you in Spring, 2026.
            </p>

            <p className="text-gray-700 mb-6">
              Gentle, Calm, Lovingly Raised, Treatment Free Honey Bee
            </p>

            <Link
              href="/product/queen-bees"
              className="inline-block bg-[var(--honey-gold)] text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Book Now
            </Link>
          </div>

          <div className="flex md:justify-end">
            <div className="relative w-full md:max-w-md h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/queen-bees.webp"
                alt="Queen Bee"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
