// src/services/ProductService.ts

import { Product, Category } from '@/constants/types';

// next.config.ts'de tanımlanan proxy yolunu kullanıyoruz
const API_URL = '/api/products'; 

/**
 * Tüm ürünleri API'dan çeker.
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL, {
        cache: 'no-store' 
    });
    
    if (!response.ok) {
      throw new Error(`API hatası! Durum: ${response.status} (Ürün Listesi)`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Ürünler çekilirken bir hata oluştu:", error);
    // Hatanın bileşen tarafından yakalanabilmesi için yeniden fırlatılır.
    throw error; 
  }
}

/**
 * Tek bir ürünü ID'ye göre API'dan çeker.
 * Eğer bir hata olursa, bu hata Ürün Detay sayfasında yakalanarak 'loading' durumundan çıkılmasını sağlar.
 */
export async function fetchProductById(id: string | number): Promise<Product> {
  // Tekil ürün endpoint'i: /api/products/{id}
  const PRODUCT_DETAIL_URL = `${API_URL}/${id}`;
  
  try {
    const response = await fetch(PRODUCT_DETAIL_URL, {
        cache: 'no-store' 
    });
    
    if (!response.ok) {
      if (response.status === 404) {
          throw new Error(`Ürün ID ${id} bulunamadı.`);
      }
      throw new Error(`API hatası! Durum: ${response.status} (Ürün ID: ${id})`);
    }

    const data: Product = await response.json();
    return data;
  } catch (error) {
    console.error(`Ürün ${id} çekilirken bir hata oluştu:`, error);
    throw error; 
  }
}


/**
 * API verisinden benzersiz kategorileri çıkarır.
 */
export function extractCategories(products: Product[]): Category[] {
    const categoryMap = new Map<number, Category>();
    
    products.forEach(product => {
        if (!categoryMap.has(product.category_id)) {
            categoryMap.set(product.category_id, {
                id: product.category_id,
                name: product.category_name,
                slug: product.slug, 
            });
        }
    });
    return Array.from(categoryMap.values());
}