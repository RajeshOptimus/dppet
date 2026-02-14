"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X, Search, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const breeds = [
  { name: "Indie", slug: "indie" },
  { name: "Golden Retriever", slug: "golden-retriever" },
  { name: "Labrador", slug: "labrador" },
  { name: "German Shepherd", slug: "german-shepherd" },
  { name: "Beagle", slug: "beagle" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white shadow-md"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="bg-gradient-to-r from-primary to-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center">
            DP
          </div>
          <span className="text-secondary">pet.shop</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <div className="group relative">
            <button className="hover:text-primary transition">Breeds</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-2xl py-2 mt-2 min-w-48">
              {breeds.map((breed) => (
                <Link
                  key={breed.slug}
                  href={`/breeds/${breed.slug}`}
                  className="block px-4 py-2 hover:bg-orange-50 text-secondary"
                >
                  {breed.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/" className="hover:text-primary transition">
            Best Sellers
          </Link>
          <a
            href="https://youtube.com/@farmingzilla?si=W8CnUpkLhXE9raIe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition"
          >
            <Youtube size={18} />
            YouTube
          </a>
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center gap-2 bg-orange-50 rounded-2xl px-4 py-2"
        >
          <Search size={18} className="text-primary" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent outline-none text-sm w-40"
          />
        </form>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" className="text-secondary hover:text-primary">
                Home
              </Link>
              {breeds.map((breed) => (
                <Link
                  key={breed.slug}
                  href={`/breeds/${breed.slug}`}
                  className="text-secondary hover:text-primary ml-4"
                >
                  {breed.name}
                </Link>
              ))}
              <Link href="/" className="text-secondary hover:text-primary">
                Best Sellers
              </Link>
              <a
                href="https://youtube.com/@farmingzilla?si=W8CnUpkLhXE9raIe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary flex items-center gap-1"
              >
                <Youtube size={18} />
                YouTube
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Trust Bar */}
      <div className="bg-gradient-to-r from-primary to-orange-400 text-white text-center py-2 text-sm font-semibold">
        🐾 Personally tested & loved by Dharampal • 25k+ YouTube Subscribers 🌟
      </div>
    </motion.header>
  );
}
