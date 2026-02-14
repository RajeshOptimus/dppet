"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dog, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  breeds: string[];
  category: string;
  dp_review: string;
  amazon_url: string;
  yt_video_id: string;
  verified: boolean;
  trending?: boolean;
}

interface Breed {
  name: string;
  slug: string;
  icon: string;
}

const breeds: Breed[] = [
  { name: "Indie", slug: "indie", icon: "🐕" },
  { name: "Golden Retriever", slug: "golden-retriever", icon: "🦴" },
  { name: "Labrador", slug: "labrador", icon: "🐶" },
  { name: "German Shepherd", slug: "german-shepherd", icon: "🦮" },
  { name: "Beagle", slug: "beagle", icon: "👃" },
];

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load products from JSON
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-primary/10 via-background to-secondary/5 py-16 md:py-24 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Text */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-2">
                <Dog className="text-primary" size={32} />
                <h1 className="text-4xl md:text-5xl font-black text-secondary">
                  Meet Dharampal<span className="block text-primary">& DP Approved Gear!</span>
                </h1>
              </div>
              <p className="text-lg text-gray-600 max-w-md">
                Trusted recommendations from Dharampal, your friendly indie pup 🐕 with 25k+ YouTube subscribers. Every product is tested and approved personally.
              </p>
              <Link href="#products" className="btn-primary inline-block">
                Shop by Breed →
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl"></div>
              <Image
                src="/images/dharampal.jpg"
                alt="Dharampal - The Star of dppet.shop"
                fill
                className="object-cover rounded-3xl"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-2xl font-bold text-sm">
                🐾 Dharampal - 25k+ Subscribers
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 text-6xl opacity-10">🐾</div>
          <div className="absolute bottom-10 left-10 text-6xl opacity-10">🦴</div>
        </motion.section>

        {/* Affiliate Disclaimer */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <AffiliateDisclaimer />
        </section>

        {/* Breed Selection Section */}
        <section className="max-w-7xl mx-auto px-4 py-16" id="breeds">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Pick Your Pup's Breed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get curated product recommendations tailored specifically for your
              dog's breed and needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {breeds.map((breed, idx) => (
              <motion.div
                key={breed.slug}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/breeds/${breed.slug}`}>
                  <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-lg hover:bg-orange-50 transition-all cursor-pointer group">
                    <span className="text-4xl group-hover:scale-110 transition">
                      {breed.icon}
                    </span>
                    <p className="font-semibold text-secondary text-center text-sm">
                      {breed.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trending Products Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Zap className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                🔥 Trending This Week
              </h2>
              <Zap className="text-primary" size={28} />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The products that are flying off the shelves! What Dharampal's followers are loving right now.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="bg-white h-80 rounded-2xl animate-pulse"
                ></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products
                .filter((p) => p.trending)
                .slice(0, 3)
                .map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
            </div>
          )}
        </section>

        {/* Featured Products Section */}
        <section className="bg-orange-50 py-16" id="products">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="text-primary" size={24} />
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  DP's Top Picks
                </h2>
                <Zap className="text-primary" size={24} />
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Handpicked products that Dharampal personally recommends for
                your furry friend's health and happiness.
              </p>
            </motion.div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white h-80 rounded-2xl animate-pulse"
                  ></div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.slice(0, 6).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-orange-400 text-white py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center px-4 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Dharampal on YouTube 🐾
            </h2>
            <p className="text-lg opacity-90">
              Follow Dharampal, your favorite indie pup, for honest product reviews, dog care tips, and daily adventures! Join 25k+ subscribers in the DP family.
            </p>
            <a
              href="https://youtube.com/@farmingzilla?si=W8CnUpkLhXE9raIe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:shadow-lg transition"
            >
              Watch Dharampal's Channel →
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
