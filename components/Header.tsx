"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
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
  const [isBreedOpen, setIsBreedOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const breedRef = useRef<HTMLDivElement>(null);

  // Close breed dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        breedRef.current &&
        !breedRef.current.contains(event.target as Node)
      ) {
        setIsBreedOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

          {/* Breeds Dropdown */}
          <div className="relative" ref={breedRef}>
            <button
              onClick={() => setIsBreedOpen(!isBreedOpen)}
              className="hover:text-primary transition"
            >
              Breeds
            </button>

            {isBreedOpen && (
              <div className="absolute mt-3 bg-white shadow-lg rounded-2xl py-2 min-w-48 z-50">
                {breeds.map((breed) => (
                  <Link
                    key={breed.slug}
                    href={`/breeds/${breed.slug}`}
                    onClick={() => setIsBreedOpen(false)}
                    className="block px-4 py-2 hover:bg-orange-50 text-secondary"
                  >
                    {breed.name}
                  </Link>
                ))}
              </div>
            )}
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
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col gap-4 p-4">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>

              {breeds.map((breed) => (
                <Link
                  key={breed.slug}
                  href={`/breeds/${breed.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="ml-4"
                >
                  {breed.name}
                </Link>
              ))}

              <Link href="/" onClick={() => setIsOpen(false)}>
                Best Sellers
              </Link>

              <a
                href="https://youtube.com/@farmingzilla?si=W8CnUpkLhXE9raIe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
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
