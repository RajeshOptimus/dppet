"use client";

import HeroSlider from "@/components/HeroSlider";
import { motion } from "framer-motion";
import Link from "next/link";
import { Dog } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AffiliateDisclaimer from "@/components/AffiliateDisclaimer";

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
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-r from-primary/10 via-background to-secondary/5 py-12 sm:py-16 md:py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Dog className="text-primary" size={32} />
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary leading-tight">
                  Meet Dharampal
                  <span className="block text-primary">
                    & DP Approved Gear!
                  </span>
                </h1>
              </div>

              <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto md:mx-0">
                Trusted recommendations from Dharampal 🐕 with 25k+ YouTube subscribers. Every product is tested and approved personally.
              </p>

              <Link
                href="/breeds"
                className="inline-block bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Shop by Breed →
              </Link>
            </motion.div>

            {/* HERO SLIDER */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[250px] sm:h-[350px] md:h-96"
            >
              <HeroSlider />
            </motion.div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="max-w-7xl mx-auto px-4 py-8">
          <AffiliateDisclaimer />
        </section>

        {/* BREED SECTION */}
        <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              Pick Your Pup's Breed 🐾
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Explore curated recommendations tailored for your dog’s breed.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {breeds.map((breed, index) => (
              <motion.div
                key={breed.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/breeds/${breed.slug}`}>
                  <div className="flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer">
                    <span className="text-3xl sm:text-4xl">
                      {breed.icon}
                    </span>
                    <p className="font-semibold text-secondary text-center text-sm sm:text-base">
                      {breed.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
