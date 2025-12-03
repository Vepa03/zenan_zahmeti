// src/constants/types.ts

export interface Image {
  id: number;
  product_id: number;
  image: string;
  alt: string;
  position: number;
}

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: string;
  currency: string;
  description: string;
  images: Image[];
  category_id: number;
  category_name: string; // Filtre için kullanışlı
}

// Görseldeki gibi basit bir kategori listesi için (API'den geliyorsa da bu yapıya uyar)
export interface Category {
    id: number;
    name: string;
    slug: string;
}