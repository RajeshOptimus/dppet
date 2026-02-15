import Link from "next/link";
import { Heart, Youtube } from "lucide-react";

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

            <p className="text-gray-400 text-sm leading-relaxed">
              Dharampal&apos;s Official Pet Recommendations — An indie pup with
              25k+ YouTube subscribers sharing honest product reviews and dog
              care tips.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/breeds" className="hover:text-primary transition">
                  Breeds
                </Link>
              </li>

              {/* Highlighted YouTube Link */}
              <li>
                <a
                  href="https://youtube.com/@farmingzilla?si=W8CnUpkLhXE9raIe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-600/10 text-red-500 px-3 py-2 rounded-lg hover:bg-red-600/20 hover:scale-105 transition-all font-semibold"
                >
                  <Youtube size={18} />
                  YouTube Channel
                </a>
              </li>

            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-bold mb-4">Compliance & Affiliate</h4>

            <p className="text-gray-400 text-sm mb-3 leading-relaxed">
              💰 <strong>Affiliate Disclosure:</strong> We may earn commissions
              from Amazon when you purchase through our links at no extra cost
              to you.
            </p>

            <p className="text-gray-400 text-xs leading-relaxed">
              🔒 All reviews are honest & unbiased. Commission never influences
              our recommendations.{" "}
              <Link
                href="/affiliate-policy"
                className="text-primary hover:underline"
              >
                View affiliate policy
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-400 text-sm text-center">
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
