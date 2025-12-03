// src/app/products/page.tsx (App Router) veya src/pages/products.tsx (Pages Router)

'use client'; // App Router kullanıyorsanız, Client Component olduğunu belirtin

import React, { useEffect, useState } from 'react';
import { fetchProducts } from '@/services/ProductService'; // Yolu doğru ayarlayın
import { Product } from '@/constants/types'; // Yolu doğru ayarlayın

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (err) {
        setError('Ürünler yüklenirken bir sorun oluştu.');
      } finally {
        setLoading(false);
      }
    }
    
    getProducts();
  }, []); // Bağımlılık dizisi boş olduğu için sadece bileşen yüklendiğinde çalışır

  if (loading) {
    return <div className="p-4">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">Hata: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">✨ Ürünlerimiz</h1>
      {products.length === 0 ? (
        <p>Henüz hiç ürün bulunmamaktadır.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              
              {/* İlk resmi göster */}
              {product.images.length > 0 && (
                // NOT: API'den gelen resim yolları göreceli olabilir.
                // Eğer Next.js'in Image bileşenini kullanıyorsanız, 
                // domainleri next.config.js'de tanımlamanız gerekir.
                // Basitlik için img etiketi kullanıldı.
                // API'den gelen resim yolu sadece dosya adıdır. 
                // Tam URL için bir ön ek gerekebilir (örneğin: http://34.10.166.242:8001/media/)
                <img 
                  src={`http://34.10.166.242:8001/media/${product.images[0].image}`} 
                  alt={product.title} 
                  className="w-full h-48 object-cover mb-3 rounded"
                />
              )}

              <p className="text-gray-700 mb-2">
                **Açıklama:** {product.description}
              </p>
              <p className="font-bold text-lg text-green-600">
                **Fiyat:** {product.price} {product.currency}
              </p>
              <p className="text-sm text-gray-500">
                **Kategori:** {product.category_name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;