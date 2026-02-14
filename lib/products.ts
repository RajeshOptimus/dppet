import productData from "@/products.json";

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  breeds: string[];
  category: string;
  dp_review: string;
  amazon_url: string;
  yt_video_id: string;
  verified: boolean;
  trending?: boolean;
  asin?: string;
  affiliate_tag?: string;
  commission_percent?: number;
}

export function getProducts(): Product[] {
  return productData as Product[];
}

export function getProductsByBreed(breedName: string): Product[] {
  const products = getProducts();
  return products.filter((p) =>
    p.breeds.some((b) => b.toLowerCase().includes(breedName.toLowerCase()))
  );
}
