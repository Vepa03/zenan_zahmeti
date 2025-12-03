// src/services/productService.ts

import { Product } from '@/constants/types';

// API'nin gerçek adresi yerine, Next.js'in proxy yolunu kullanın
const API_URL = '/api/products'; 

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL); // Artık /api/products'ı çağıracak
    
    if (!response.ok) {
      throw new Error(`HTTP hatası! Durum: ${response.status}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Ürünler çekilirken bir hata oluştu:", error);
    return []; 
  }
}