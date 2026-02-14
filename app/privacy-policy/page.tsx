"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-secondary mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">1. Affiliate Relationships</h2>
            <p>
              <strong>dppet.shop</strong> is a participant in the Amazon Services LLC Associates Program, 
              an affiliate advertising program designed to provide a means for sites to earn advertising 
              fees by advertising and linking to amazon.in.
            </p>
            <p>
              When you click on an Amazon affiliate link on our website, we may earn a commission if you 
              make a purchase. This commission comes at no additional cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">2. Information We Collect</h2>
            <p>We collect minimal personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Search queries (used to improve site experience)</li>
              <li>Cookie data for analytics (Google Analytics)</li>
              <li>Clicked links and pages visited</li>
              <li>No email or personal data stored by us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">3. Third-Party Data Collection</h2>
            <p>
              <strong>Amazon:</strong> When you click our affiliate links, Amazon collects data per their privacy policy.
            </p>
            <p>
              <strong>Google Analytics:</strong> We use Google Analytics to understand site traffic and user behavior.
            </p>
            <p>
              We do NOT sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">4. Cookies</h2>
            <p>
              Our website uses cookies for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session management</li>
              <li>Analytics tracking (Google Analytics)</li>
              <li>Amazon affiliate tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">5. Reviews & Content</h2>
            <p>
              All product reviews on dppet.shop are honest opinions based on personal testing 
              by Dharampal. Our affiliate commission does not influence our recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">6. Medical Disclaimer</h2>
            <p>
              dppet.shop is NOT a substitute for professional veterinary advice. 
              Always consult a licensed veterinarian for health-related pet concerns. 
              Our reviews are educational content only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">7. Product Information</h2>
            <p>
              While we strive for accuracy, prices and product availability may change. 
              Always verify current prices and details on Amazon before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">8. Images & Content</h2>
            <p>
              All product images are sourced from Amazon or copyright-free sources 
              (Unsplash, Pexels). Dharampal&apos;s photos are used with full rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">9. YouTube Channel</h2>
            <p>
              dppet.shop links to Dharampal&apos;s YouTube channel. YouTube&apos;s own privacy policy applies to content there. 
              All YouTube product reviews include affiliate disclosures per FTC guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">10. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Know what data we collect</li>
              <li>Request data deletion (limited to our site)</li>
              <li>Opt-out of analytics (browser settings)</li>
              <li>Disable cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">11. Contact Us</h2>
            <p>
              For privacy concerns or questions about our affiliate relationships:
            </p>
            <p>
              Email: privacy@dppet.shop<br />
              YouTube: Dharampal&apos;s Channel
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-secondary mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this privacy policy. Changes will be posted on this page. 
              Your continued use means acceptance of updates.
            </p>
            <p>
              <strong>Last Updated:</strong> February 14, 2026
            </p>
          </section>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm text-blue-900">
              <strong>FTC Compliance:</strong> This website discloses material connections 
              between dppet.shop and Amazon. As a participant in the Amazon Associates Program, 
              we earn from qualifying purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
