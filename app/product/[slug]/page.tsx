import { notFound } from "next/navigation";
import Image from "next/image";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import products from "@/app/components/product/products.json";
import ProductTabs from "@/app/components/product/productTabs";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.title} | Aprilliance Bees`,
    description: product.description[0],
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <section className="bg-[var(--cream-bg)] py-20 pt-44 lg:pt-48">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              {product.title}
            </h1>

            <p className="text-2xl font-bold text-[var(--deep-honey-brown)] mb-3">
              {product.price}
            </p>

            <p className="flex items-center gap-2 text-sm text-gray-700 mb-6">
              <FaCheckCircle className="text-green-600" />
              {product.availability}
            </p>

            <button
              disabled={product.availability.toLowerCase().includes("out")}
              className="flex items-center gap-2 bg-[var(--honey-gold)] px-6 py-3 rounded-full font-medium hover:scale-105 transition disabled:opacity-50"
            >
              <FaShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>

        <ProductTabs
          slug={product.slug}
          description={product.description}
          additionalInfo={product.additionalInfo}
        />
      </div>
    </section>
  );
}
