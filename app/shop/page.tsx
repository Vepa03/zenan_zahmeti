// src/app/shop/page.tsx 

'use client'; 

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link'; // Tıklanabilir kartlar için eklendi
import { fetchProducts, extractCategories } from '@/services/ProductService';
import { Product, Category } from '@/constants/types';
import { ShoppingBag, Star, Heart } from 'lucide-react'; 

import CategoryFilter from '@/components/CategoryFilter';

const BASE_IMAGE_URL = 'http://34.10.166.242:8001/media/'; 


const ProductsPage: React.FC = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]); 
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const productList = await fetchProducts();
        setAllProducts(productList);
        setCategories(extractCategories(productList)); 
      } catch (err: any) { 
        setError(`Ürünler yüklenirken bir sorun oluştu: ${err.message}`);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  // Kategori Filtreleme Fonksiyonu
  const handleCategoryChange = (name: string) => {
    setSelectedCategories(prev =>
      prev.includes(name)
        ? prev.filter(c => c !== name)
        : [...prev, name]
    );
  };
  

  // Filtrelenmiş Ürünler
  const filteredProducts = useMemo(() => {
    let currentProducts = allProducts;
    
    // Sadece Kategori Filtresi Uygulanır
    if (selectedCategories.length > 0) {
      currentProducts = currentProducts.filter(product =>
        selectedCategories.includes(product.category_name)
      );
    }
    
    return currentProducts;
  }, [allProducts, selectedCategories]); 

  if (loading) {
    return <div className="p-8 text-center text-xl font-medium">Ürünler Yükleniyor...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-600 border border-red-300 rounded-lg">Hata: {error}</div>;
  }

  // --- JSX Render Kısmı ---
  return (
    <div className="container mx-auto p-4 pt-10">
      <h1 className="text-2xl font-bold mb-6">GET THE PRODUCTS AS YOUR NEEDS</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sol Panel: Sadece Kategoriler Filtresi */}
        <aside className="w-full lg:w-1/4 p-4 rounded-lg bg-white">
          
          <CategoryFilter 
            categories={categories}
            selectedCategories={selectedCategories}
            onCategoryChange={handleCategoryChange}
          />
          
        </aside>

        {/* Sağ Panel: Ürün Listesi */}
        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              
              // Ürün kartı Link ile sarıldı
              <Link 
                key={product.id} 
                href={`/shop/${product.id}`} 
                className="block" 
              >
                <div 
                    className="border p-3 rounded-xl bg-white shadow-sm relative flex flex-col transition-shadow hover:shadow-lg h-full cursor-pointer"
                >
                  
                  {product.images.length > 0 ? (
                    <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden mb-3">
                      <img
                        src={`${BASE_IMAGE_URL}${product.images[0].image}`} 
                        alt={product.title}
                        className="object-contain w-full h-full p-2"
                        onError={(e) => { 
                           e.currentTarget.onerror = null; 
                           e.currentTarget.src = "/placeholder.png"; 
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded-lg mb-3">
                      Resim Yok
                    </div>
                  )}
                  
                  <p className="text-xs text-gray-500 uppercase">{product.category_name}</p>
                  
                  <h3 className="text-md font-semibold mb-1 truncate" title={product.title}>
                      {product.title}
                  </h3>

                  <div className="mt-auto">
                      <div className="flex items-center mb-3">
                          <span className="text-lg font-bold text-gray-900 mr-2">
                              {product.price} {product.currency}
                          </span>
                          <span className="text-sm text-gray-400 line-through">
                              220.00 {product.currency}
                          </span>
                      </div>
                      
                      <button 
                        className="flex items-center justify-center w-full py-2 bg-green-700 text-white text-sm font-semibold rounded hover:bg-green-800 transition-colors"
                        onClick={(e) => {
                            // Link'in yönlendirmesini engeller (Sepete Ekle butonu için gerekli)
                            e.preventDefault(); 
                            e.stopPropagation(); 
                            console.log(`Ürün ${product.id} sepete eklendi.`);
                        }}
                      >
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Add to Cart
                      </button>
                  </div>

                </div>
              </Link>
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="p-10 text-center text-gray-500 border border-dashed rounded-lg mt-8">
                Seçili kriterlere uygun ürün bulunamadı.
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;