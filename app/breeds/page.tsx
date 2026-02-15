import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductsByBreed } from "@/lib/products";

const breeds = [
  { name: "Indie", slug: "indie" },
  { name: "Golden Retriever", slug: "golden-retriever" },
  { name: "Labrador", slug: "labrador" },
  { name: "German Shepherd", slug: "german-shepherd" },
  { name: "Beagle", slug: "beagle" },
];

export default function AllBreedsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 py-12">

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-12">
          Shop by Breed 🐾
        </h1>

        {breeds.map((breed) => {
          const products = getProductsByBreed(breed.name).slice(0, 3);

          return (
            <section key={breed.slug} className="mb-16">

              {/* Breed Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-secondary">
                  {breed.name}
                </h2>

                <a
                  href={`/breeds/${breed.slug}`}
                  className="text-primary font-semibold hover:underline"
                >
                  View All →
                </a>
              </div>

              {/* Products */}
              {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="bg-orange-50 rounded-2xl p-6 text-gray-600">
                  Products coming soon for {breed.name}.
                </div>
              )}
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
