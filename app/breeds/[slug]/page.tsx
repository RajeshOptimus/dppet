import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByBreed, type Product } from "@/lib/products";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const breedInfo: {
  [key: string]: {
    name: string;
    description: string;
    review: string;
  };
} = {
  indie: {
    name: "Indie",
    description:
      "Street-smart and resilient, Indie dogs are known for their adaptability and incredible stamina.",
    review:
      "Indie dogs are highly intelligent, low-maintenance, and extremely adaptable to Indian climates. They have strong immunity and thrive on balanced, simple nutrition. Dharampal personally recommends products that support their energy levels, digestion, and coat health while keeping things natural and affordable.",
  },
  "golden-retriever": {
    name: "Golden Retriever",
    description:
      "Friendly and energetic, Golden Retrievers need high-quality nutrition.",
    review:
      "Golden Retrievers are affectionate and energetic family companions. They require premium nutrition to maintain their beautiful coat and joint health. Dharampal selects products that support coat shine, immunity, and active lifestyles.",
  },
  labrador: {
    name: "Labrador",
    description:
      "Strong and loyal, Labs are food-motivated and athletic.",
    review:
      "Labradors are playful, food-loving, and energetic. Proper portion control and balanced nutrition are key. Dharampal recommends products that help maintain lean muscle mass and digestive health.",
  },
  "german-shepherd": {
    name: "German Shepherd",
    description:
      "Intelligent and powerful working dogs.",
    review:
      "German Shepherds are highly intelligent and protective. They require premium nutrition and strong training tools. Dharampal recommends products that support joint strength and muscle development.",
  },
  beagle: {
    name: "Beagle",
    description:
      "Small but mighty with big appetites.",
    review:
      "Beagles are curious and energetic scent hounds. They need properly portioned meals and mental stimulation. Dharampal selects products that support digestion and healthy weight management.",
  },
};

/* ✅ Breed Image Mapping */
const breedImages: { [key: string]: string } = {
  indie: "/images/dharampal1.webp",
  "golden-retriever": "/images/golden.webp",
  labrador: "/images/labrador.webp",
  "german-shepherd": "/images/german.webp",
  beagle: "/images/beagle.webp",
};

async function getBreedProducts(
  slug: string
): Promise<{ products: Product[]; breedInfo: (typeof breedInfo)[string] }> {
  const breedName = breedInfo[slug]?.name || "";
  const filtered = getProductsByBreed(breedName);

  return {
    products:
      filtered.length > 0
        ? filtered
        : getProductsByBreed("Indie").slice(0, 3),
    breedInfo: breedInfo[slug] || {
      name: "Dog",
      description: "",
      review: "",
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

        {/* Breed Review Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary">
                {breed.name} Breed Review 🐾
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed">
                {breed.review}
              </p>
            </div>

            {/* RIGHT IMAGE (Dynamic) */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-3xl overflow-hidden">
              <Image
                src={breedImages[slug] || "/images/dharampal1.webp"}
                alt={`${breed.name} dog`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Expert Advice Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary/10 to-orange-100 border-l-4 border-primary p-6 rounded-2xl">
            <h3 className="font-bold text-secondary text-lg mb-2">
              Why Dharampal Recommends These for {breed.name}
            </h3>
            <p className="text-gray-700">
              Based on real-world experience with {breed.name} dogs, Dharampal
              selects products that match their temperament, nutrition needs,
              and energy levels. Every recommendation is personally tested and
              verified.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section>
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
        </section>

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
