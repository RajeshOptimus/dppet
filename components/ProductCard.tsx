"use client";

import Image from "next/image";

interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  verified?: boolean;
  trending?: boolean;
}

export default function ProductCard({
  name,
  brand,
  price,
  image,
  verified,
}: Product) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden">
      
      {/* Product Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {verified && (
          <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            ✓ Verified by DP
          </span>
        )}

        <h3 className="text-lg font-bold text-secondary">
          {name}
        </h3>

        <p className="text-sm text-gray-500">
          {brand}
        </p>

        <p className="text-primary font-semibold">
          {price}
        </p>

        {/* Coming Soon Button */}
        <button
          disabled
          className="w-full mt-4 bg-gray-200 text-gray-600 py-2 rounded-xl cursor-not-allowed font-semibold"
        >
          🚧 Coming Soon
        </button>
      </div>
    </div>
  );
}
