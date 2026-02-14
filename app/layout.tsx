import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "dppet.shop - Dharampal's Official Pet Recommendations",
  description:
    "DP Approved pet products and recommendations for all dog breeds. Premium affiliate marketing platform by Dharampal.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "dppet.shop - Pet Recommendations",
    description: "DP Approved pet products for your furry friends",
    type: "website",
    siteName: "dppet.shop",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#F97316" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "dppet.shop",
              url: "https://dppet.shop",
              description: "Dharampal's Official Pet Recommendations",
            }),
          }}
        />
      </head>
      <body className="bg-background text-secondary">{children}</body>
    </html>
  );
}
