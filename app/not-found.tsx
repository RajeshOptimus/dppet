"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-6 px-4 py-20">
          <div className="text-8xl">🐾</div>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            Looks like we couldn&apos;t find the page you&apos;re looking for. Maybe your
            pup wandered off! 🐕
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-block">
              Back to Home
            </Link>
            <Link href="/" className="btn-secondary inline-block">
              Shop by Breed
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
