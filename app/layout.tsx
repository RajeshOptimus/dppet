import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dppet.shop"),

  title: {
    default: "DP Approved Dog Products | dppet.shop",
    template: "%s | dppet.shop",
  },

  description:
    "Discover DP Approved dog products reviewed by Dharampal. Find the best food, toys, and accessories for Indie, Labrador, Golden Retriever, German Shepherd, and Beagle dogs.",

  keywords: [
    "Best dog products India",
    "Dog food for Indie",
    "Labrador dog products",
    "Golden Retriever care",
    "German Shepherd accessories",
    "Beagle nutrition",
    "DP Approved dog products",
  ],

  authors: [{ name: "dppet.shop" }],
  creator: "dppet.shop",
  publisher: "dppet.shop",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "DP Approved Dog Products | dppet.shop",
    description:
      "Personally tested and reviewed dog products by Dharampal. Breed-specific recommendations you can trust.",
    url: "https://dppet.shop",
    siteName: "dppet.shop",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "DP Approved Dog Products",
    description:
      "Find the best dog products curated and reviewed by Dharampal.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F97316" />

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "dppet.shop",
              url: "https://dppet.shop",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://dppet.shop/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body className="bg-background text-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
