
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  seller: string;
  rating: number;
  reviewCount: number;
}

const featuredProducts: Product[] = [{
  id: 1,
  name: "Bibit Sayuran Organik",
  image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 35000,
  seller: "Tani Makmur",
  rating: 4.8,
  reviewCount: 156
}, {
  id: 2,
  name: "Pupuk Kompos Premium",
  image: "https://images.unsplash.com/photo-1584736286279-a9b8df642c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 75000,
  seller: "Organik Nusantara",
  rating: 4.9,
  reviewCount: 203
}, {
  id: 3,
  name: "Alat Penyiram Otomatis",
  image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 450000,
  seller: "Agritech Indonesia",
  rating: 4.7,
  reviewCount: 89
}, {
  id: 4,
  name: "Buah Alpukat Madu",
  image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  price: 85000,
  seller: "Kebun Subur Abadi",
  rating: 5.0,
  reviewCount: 128
}];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Produk Unggulan</h2>
          <Button asChild variant="outline" className="text-tani-green border-tani-green hover:bg-tani-light-green">
            <Link to="/marketplace">Lihat Semua</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
    <div className="relative h-48">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-tani-green hover:text-tani-yellow">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </div>
    <CardContent className="p-4">
      <Link to={`/product/${product.id}`}>
        <h3 className="font-semibold text-lg mb-1 hover:text-tani-green">{product.name}</h3>
      </Link>
      <p className="text-gray-500 text-sm mb-2">Oleh: {product.seller}</p>
      <div className="flex items-center mb-3">
        <Star className="w-4 h-4 fill-tani-yellow text-tani-yellow" />
        <span className="ml-1 text-sm font-medium">{product.rating}</span>
        <span className="mx-1 text-gray-400">•</span>
        <span className="text-sm text-gray-500">{product.reviewCount} ulasan</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold text-lg">Rp {product.price.toLocaleString('id-ID')}</p>
        <Link to={`/product/${product.id}`}>
          <Button variant="ghost" size="sm" className="text-tani-green hover:text-tani-green/90 hover:bg-tani-light-green">
            Detail
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);

export default ProductsSection;
