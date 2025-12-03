export interface Image {
  id: number;
  product_id: number;
  image: string; // Resim dosyasının yolu
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
  category_name: string;
}