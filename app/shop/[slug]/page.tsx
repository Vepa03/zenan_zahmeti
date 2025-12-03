// src/app/shop/[productId]/page.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { fetchProductById } from '@/services/ProductService'; 
import { Product } from '@/constants/types';
import { ShoppingBag, Star, Heart } from 'lucide-react'; 

interface ProductDetailPageProps {
  params: {
    productId: string; 
  };
}

const BASE_IMAGE_URL = 'http://34.10.166.242:8001/media/'; 

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const productData = await fetchProductById(productId); 
        setProduct(productData);
      } catch (err: any) {
        // Hata durumunda yüklemeyi durdurur ve hata mesajını gösterir (stuck loading sorununu çözer)
        setError(err.message || `Ürün (${productId}) detayları yüklenirken bir sorun oluştu.`);
      } finally {
        setLoading(false);
      }
    }
    
    if (productId) {
      getProduct();
    }
    
  }, [productId]); 

  if (loading) {
    return <div className="p-8 text-center text-xl font-medium">Ürün Detayları Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600 border border-red-300 rounded-lg">Hata: {error}</div>;
  }
  
  if (!product) {
    return <div className="p-8 text-center text-gray-500">Ürün bulunamadı. ID: {productId}</div>;
  }

  // --- JSX Render Kısmı (Ürün Detayları) ---
  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-3xl font-bold mb-8">{product.title}</h1>
      <div className="flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-lg shadow-xl">
        
        {/* Sol: Resim Alanı */}
        <div className="lg:w-1/2">
          {product.images.length > 0 ? (
            <img
              src={`${BASE_IMAGE_URL}${product.images[0].image}`}
              alt={product.title}
              className="w-full h-auto object-contain max-h-96 rounded-lg shadow-md"
              onError={(e) => { 
                 e.currentTarget.onerror = null; 
                 e.currentTarget.src = "/placeholder.png"; 
              }}
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-xl text-gray-500 rounded-lg">
              Resim Yok
            </div>
          )}
        </div>

        {/* Sağ: Detaylar */}
        <div className="lg:w-1/2 flex flex-col">
          <p className="text-sm text-gray-500 uppercase mb-2">Kategori: **{product.category_name}**</p>
          <div className="mb-4">
              <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="ml-1 text-gray-700 font-semibold">4.5</span>
                  <span className="ml-2 text-sm text-gray-400">(150 Değerlendirme)</span>
              </div>
          </div>
          
          <p className="text-2xl font-extrabold text-green-700 mb-4">
            {product.price} {product.currency}
            <span className="ml-4 text-lg text-gray-400 line-through">220.00 {product.currency}</span>
          </p>
          
          <h3 className="text-xl font-semibold mb-2 mt-4">Ürün Açıklaması</h3>
          <p className="text-gray-600 mb-8 flex-grow">{product.description || "Bu ürün için henüz bir açıklama girilmemiştir."}</p>
          
          <div className="flex gap-4 mt-auto">
            <button className="flex-1 flex items-center justify-center py-3 bg-green-700 text-white text-lg font-semibold rounded-lg hover:bg-green-800 transition-colors">
              <ShoppingBag className="w-5 h-5 mr-2" />
              Sepete Ekle
            </button>
            <button className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-red-50 transition-colors">
              <Heart className="w-6 h-6 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;