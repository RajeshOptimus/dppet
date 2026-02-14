import { getProducts } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.toLowerCase().trim();
  const allProducts = getProducts();

  // Filter products by search query
  const results = allProducts.filter((product) => {
    const searchableText = `${product.name} ${product.brand} ${product.category} ${product.breeds.join(" ")}`.toLowerCase();
    return searchableText.includes(query);
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-secondary">Search Results</h1>

          {query ? (
            <p className="text-gray-600 text-lg">
              Found <span className="font-bold text-primary">{results.length}</span> product{results.length !== 1 ? "s" : ""} for{" "}
              <span className="font-bold">"{q}"</span>
            </p>
          ) : (
            <p className="text-gray-600 text-lg">
              Enter a search term to find DP Approved products
            </p>
          )}
        </div>

        {/* Results Grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : query ? (
          <div className="text-center py-12 bg-orange-50 rounded-2xl">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-secondary mb-2">
              No products found
            </h2>
            <p className="text-gray-600 mb-6">
              Try searching for product names, brands, or dog breeds
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-primary text-white rounded-2xl font-semibold hover:bg-orange-600 transition-all"
            >
              Back to Home
            </a>
          </div>
        ) : (
          <div className="text-center py-12 bg-orange-50 rounded-2xl">
            <div className="text-6xl mb-4">🐾</div>
            <p className="text-gray-600 text-lg">
              Start typing to search for products!
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
