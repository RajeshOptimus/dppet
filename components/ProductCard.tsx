"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBag, Play } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  dp_review: string;
  amazon_url: string;
  yt_video_id: string;
  verified: boolean;
}

export default function ProductCard({
  name,
  brand,
  price,
  image,
  dp_review,
  amazon_url,
  yt_video_id,
  verified,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative h-56 overflow-hidden group">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {verified && (
          <div className="absolute top-3 right-3 badge-verified">
            ✓ Verified by DP
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-gray-500 font-semibold">{brand}</p>
          <h3 className="text-sm font-bold text-secondary line-clamp-2">
            {name}
          </h3>
        </div>

        {/* DP Review */}
        <p className="text-xs text-gray-600 italic border-l-2 border-primary pl-2">
          "{dp_review}"
        </p>

        {/* Price */}
        <div className="text-lg font-bold text-primary">₹{price}</div>

        {/* CTAs */}
        <div className="flex gap-2">
          <a
            href={amazon_url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm"
          >
            <ShoppingBag size={16} />
            Check Price
          </a>
          <a
            href={`https://youtube.com/watch?v=${yt_video_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary flex items-center justify-center gap-2 text-sm"
          >
            <Play size={16} />
            Review
          </a>
        </div>

        {/* Affiliates & Disclaimers */}
        <div className="space-y-2 pt-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">
              💰 Earns commission
            </p>
            {verified && (
              <p className="text-xs text-green-600 font-semibold">
                ✓ Verified
              </p>
            )}
          </div>
          <p className="text-xs text-gray-400 text-center">
            Amazon Associate Link • No extra cost to you
          </p>
        </div>
      </div>
    </motion.div>
  );
}
