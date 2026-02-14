import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                DP
              </div>
              <span className="text-xl font-bold">pet.shop</span>
            </div>
            <p className="text-gray-400 text-sm">
              Dharampal's Official Pet Recommendations - An indie pup with 25k+ YouTube subscribers sharing honest product reviews and dog care tips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/breeds/indie" className="hover:text-primary transition">
                  Breeds
                </Link>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition"
                >
                  YouTube Channel
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-bold mb-4">Compliance & Affiliate</h4>
            <p className="text-gray-400 text-sm mb-3">
              💰 <strong>Affiliate Disclosure:</strong> We earn commissions from Amazon when you purchase through our links at no extra cost to you.
            </p>
            <p className="text-gray-400 text-xs">
              🔒 All reviews are honest & unbiased. Commission never influences our recommendations. 
              <a href="/affiliate-policy" className="text-primary hover:underline"> View affiliate policy</a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-primary" />
            <span>
              for dog lovers • © {currentYear} dppet.shop • All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
