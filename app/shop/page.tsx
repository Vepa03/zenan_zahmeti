// app/products/page.tsx
import { Product } from "@/constants/types";
import ProductsWithFilter from "@/components/CategoryFilter";

const API_URL = "http://34.10.166.242:8001/products";

async function getProducts(): Promise<Product[]> {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 }, // 60 sn'de bir yeniden fetch et (ISR)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return <ProductsWithFilter products={products} />;
}
