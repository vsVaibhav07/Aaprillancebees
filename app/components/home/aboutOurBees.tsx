export default function AboutOurBees() {
  return (
    <section className="py-20 bg-[var(--cream-bg)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our Story — Bees With Purpose
        </h2>
        <p className="text-gray-700 mb-8">
          Aprillance Bees is dedicated to raising lovingly bred, treatment-free
          honey bees right here in Sonoma County and Northern California. We
          believe adding bees to your land supports pollination, garden health,
          and connects you with nature’s sweetest harvest.
        </p>
        <button className="bg-[var(--honey-gold)] text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition">
          Meet Our Beekeeping Philosophy
        </button>
      </div>
    </section>
  );
}
