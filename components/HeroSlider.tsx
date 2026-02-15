"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/dharampal1.webp",
  "/images/dharampal2.webp",
  "/images/dharampal3.webp",
  "/images/dharampal4.webp",
  "/images/dharampal5.webp",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden">
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt="Dharampal"
          fill
          priority={i === 0}
          className={`absolute object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-2 rounded-2xl font-bold text-sm">
        🐾 Dharampal - 25k+ Subscribers
      </div>
    </div>
  );
}
