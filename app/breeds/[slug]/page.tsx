import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByBreed, type Product } from "@/lib/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const breedInfo: { [key: string]: { name: string; description: string } } = {
  indie: {
    name: "Indie",
    description:
      "Street-smart and resilient, Indie dogs are known for their adaptability and incredible stamina. They thrive with simple, nutritious food and minimal grooming.",
  },
  "golden-retriever": {
    name: "Golden Retriever",
    description:
      "Friendly and energetic, Golden Retrievers need high-quality nutrition to maintain their beautiful coats. They're perfect family companions!",
  },
  labrador: {
    name: "Labrador",
    description:
      "Strong and loyal, Labs are food-motivated and need balanced nutrition to maintain their athletic build.",
  },
  "german-shepherd": {
    name: "German Shepherd",
    description:
      "Intelligent and powerful, GSDs need premium nutrition and proper training tools for optimal health.",
  },
  beagle: {
    name: "Beagle",
    description:
      "Small but mighty, Beagles have big appetites and need properly portioned, high-quality food.",
  },
};

async function getBreedProducts(
  slug: string
): Promise<{ products: Product[]; breedInfo: (typeof breedInfo)[string] }> {
  const breedName = breedInfo[slug]?.name || "";
  const filtered = getProductsByBreed(breedName);

  return {
    products: filtered.length > 0 ? filtered : getProductsByBreed("Indie").slice(0, 3),
    breedInfo: breedInfo[slug] || { name: "Dog", description: "" },
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const breed = breedInfo[slug];

  if (!breed) {
    return {
      title: "Breed Not Found",
    };
  }

  return {
    title: `Best Products for ${breed.name} | dppet.shop`,
    description: `DP Approved products and recommendations for ${breed.name}. Find the best dog food, toys, and accessories.`,
    openGraph: {
      title: `Best Products for ${breed.name} | dppet.shop`,
      description: `DP Approved products for ${breed.name}`,
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(breedInfo).map((slug) => ({
    slug,
  }));
}

export default async function BreedPage({ params }: PageProps) {
  const { slug } = await params;

  if (!breedInfo[slug]) {
    notFound();
  }

  const { products, breedInfo: breed } = await getBreedProducts(slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
        {/* Breed Header */}
        <div className="mb-12 space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-3">
              Best Products for {breed.name}
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl">
              {breed.description}
            </p>
          </div>

          {/* Expert Advice Section */}
          <div className="bg-gradient-to-r from-primary/10 to-orange-100 border-l-4 border-primary p-6 rounded-2xl">
            <h3 className="font-bold text-secondary text-lg mb-2">
              Why Dharampal Recommends These for {breed.name}
            </h3>
            <p className="text-gray-700">
              Based on extensive experience with {breed.name} dogs, Dharampal
              has carefully selected products that match their unique needs,
              energy levels, and temperament. Each recommendation is verified
              through real-world testing.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-8">
            Verified DP Approved Products
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-orange-50 rounded-2xl">
              <p className="text-gray-600 text-lg">
                No products yet for {breed.name}. Check back soon!
              </p>
            </div>
          )}
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: `Best Products for ${breed.name}`,
              description: breed.description,
              url: `https://dppet.shop/breeds/${slug}`,
            }),
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
