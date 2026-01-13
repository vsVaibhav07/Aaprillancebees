export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-[var(--cream-bg)] text-black">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Stay in the Hive Loop
        </h2>
        <p className="mb-6 text-gray-700">
          Get beekeeping tips, announcements for next season’s bee availability,
          and exclusive offers straight to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            type="email"
            placeholder="📩 Email Address"
            className="px-4 py-3 rounded-md text-black flex-1 border border-gray-300"
          />
          <button className="bg-[var(--honey-gold)] px-6 py-3 rounded-md font-medium hover:scale-105 transition">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Subscribe & receive our Beginner Beekeeping Guide.
        </p>
      </div>
    </section>
  );
}
