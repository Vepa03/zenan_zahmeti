// next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Gerekli diğer ayarlarınız buraya gelebilir (örneğin output: 'export' veya resim ayarları)

  async rewrites() {
    return [
      {
        // 1. Gelen istek yolu: Next.js uygulamanızın içinde çağıracağınız yol.
        source: '/api/products',

        // 2. Hedef yol: API'nin gerçek adresi.
        // **ÖNEMLİ:** Bu, sizin API'niz: http://34.10.166.242:8001/products
        destination: 'http://34.10.166.242:8001/products',
      },
    ];
  },

  // Eğer Next.js Image bileşenini kullanacaksanız bu ayarı ekleyin:
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '34.10.166.242',
        port: '8001',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;