
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { 
  Star, 
  MessageSquare, 
  ShoppingCart, 
  ArrowRight,
  Share2,
  Heart,
  Truck,
  ShieldCheck,
  User
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Data produk (contoh data statis, pada implementasi nyata akan diambil dari API)
  const product = {
    id: 1,
    name: "Bibit Sayuran Organik Premium",
    category: "Bibit",
    subcategory: "Sayuran",
    price: 35000,
    discountedPrice: 30000,
    stock: 150,
    seller: "Tani Makmur",
    location: "Bandung, Jawa Barat",
    shopee: "tanimakmur",
    description: "Bibit sayuran organik premium berkualitas tinggi, ditanam dengan metode pertanian organik tanpa pestisida dan bahan kimia berbahaya. Cocok untuk ditanam di pekarangan rumah, kebun, atau pot. Menghasilkan sayuran yang sehat, segar, dan kaya nutrisi.",
    rating: 4.8,
    reviewCount: 156,
    sales: 523,
    images: [
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    specifications: [
      { name: "Jenis Bibit", value: "Sayuran Organik" },
      { name: "Varietas", value: "Mix (Bayam, Kangkung, Sawi, Selada)" },
      { name: "Daya Tumbuh", value: "95%" },
      { name: "Masa Panen", value: "30-45 hari" },
      { name: "Sertifikasi", value: "Organik Indonesia" },
      { name: "Berat Kemasan", value: "50 gram" },
      { name: "Tanggal Kemas", value: "April 2025" },
      { name: "Masa Simpan", value: "12 bulan" }
    ],
    reviews: [
      {
        id: 1,
        user: "Ahmad Sulaiman",
        avatar: "https://i.pravatar.cc/150?img=11",
        rating: 5,
        date: "2 April 2025",
        content: "Bibit sangat berkualitas, semua tumbuh dengan baik. Panen melimpah dan sayurannya enak sekali. Sangat direkomendasikan!",
        images: ["https://images.unsplash.com/photo-1590136519928-afeef928419d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: 2,
        user: "Siti Nurhaliza",
        avatar: "https://i.pravatar.cc/150?img=32",
        rating: 4,
        date: "27 Maret 2025",
        content: "Bibit tumbuh dengan cepat dan subur. Hanya ada beberapa yang tidak tumbuh, tapi secara keseluruhan bagus.",
        images: []
      },
      {
        id: 3,
        user: "Budi Santoso",
        avatar: "https://i.pravatar.cc/150?img=51",
        rating: 5,
        date: "20 Maret 2025",
        content: "Pengiriman cepat dan pengemasan rapi. Bibit tumbuh dengan baik. Puas dengan produk ini. Akan beli lagi.",
        images: ["https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
      },
      {
        id: 4,
        user: "Dewi Anggraini",
        avatar: "https://i.pravatar.cc/150?img=44",
        rating: 5,
        date: "15 Maret 2025",
        content: "Bibit tumbuh dengan cepat. Sangat cocok untuk kebun kecil di rumah. Harga terjangkau untuk kualitas yang bagus.",
        images: []
      },
      {
        id: 5,
        user: "Rudi Hartono",
        avatar: "https://i.pravatar.cc/150?img=60",
        rating: 4,
        date: "10 Maret 2025",
        content: "Puas dengan produknya, pengiriman agak lama tapi bibit tetap bagus saat sampai. Pertumbuhan baik.",
        images: []
      }
    ]
  };

  // Handle increment and decrement quantity
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Calculate average rating dari review
  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  // Count rating distribution
  const ratingDistribution = Array(5).fill(0);
  product.reviews.forEach(review => {
    ratingDistribution[5 - review.rating]++;
  });

  // Rating percentage
  const ratingPercentage = ratingDistribution.map(count => (count / product.reviews.length) * 100);

  // Handle review submit
  const [reviewText, setReviewText] = useState("");
  const [userRating, setUserRating] = useState(0);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting review:", { rating: userRating, text: reviewText });
    // Reset after submit
    setReviewText("");
    setUserRating(0);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Beranda</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/marketplace">Marketplace</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to="/marketplace?category=bibit">Bibit</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span>{product.name}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Product Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 rounded-lg overflow-hidden border">
              <img 
                src={product.images[activeImageIndex]} 
                alt={product.name} 
                className="w-full h-96 object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`rounded-md overflow-hidden border h-20 ${
                    activeImageIndex === index ? 'ring-2 ring-tani-green' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                <Star className="w-5 h-5 fill-tani-yellow text-tani-yellow" />
                <span className="ml-1 font-semibold">{product.rating}</span>
                <span className="mx-1 text-gray-400">•</span>
                <span className="text-gray-600">{product.reviewCount} ulasan</span>
              </div>
              <div className="text-gray-600">
                <span>{product.sales} terjual</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <p className="text-3xl font-bold text-tani-green">
                  Rp {product.discountedPrice.toLocaleString('id-ID')}
                </p>
                {product.discountedPrice < product.price && (
                  <p className="ml-3 text-gray-500 line-through">
                    Rp {product.price.toLocaleString('id-ID')}
                  </p>
                )}
              </div>
              {product.discountedPrice < product.price && (
                <p className="text-red-500 text-sm mt-1">
                  Hemat {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}%
                </p>
              )}
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                {product.description}
              </p>
              <div className="flex items-center text-gray-600 mb-2">
                <User className="w-4 h-4 mr-2" />
                <span className="mr-1">Penjual:</span>
                <Link to={`/seller/${product.seller}`} className="font-medium text-tani-green hover:underline">{product.seller}</Link>
              </div>
              <div className="flex items-center text-gray-600">
                <Truck className="w-4 h-4 mr-2" />
                <span>Lokasi: {product.location}</span>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="border rounded-md flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-1 text-lg"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1 text-center border-x">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-1 text-lg"
                  disabled={quantity >= product.stock}
                >
                  +
                </button>
              </div>
              <p className="ml-4 text-gray-600">Stok: {product.stock}</p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <Button className="bg-tani-green hover:bg-tani-green/90 flex-1 sm:flex-none">
                <ShoppingCart className="mr-2 h-4 w-4" /> Beli Sekarang
              </Button>
              <Button variant="outline" className="border-tani-green text-tani-green hover:bg-tani-light-green flex-1 sm:flex-none">
                <ShoppingCart className="mr-2 h-4 w-4" /> Tambah ke Keranjang
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-300">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center p-4 bg-tani-light-yellow rounded-lg">
              <ShieldCheck className="h-5 w-5 text-tani-yellow mr-3" />
              <div>
                <p className="font-medium">Juga tersedia di Shopee</p>
                <a 
                  href={`https://shopee.co.id/${product.shopee}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-tani-green hover:underline flex items-center mt-1"
                >
                  Kunjungi toko <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Description, Specifications, and Reviews */}
        <Tabs defaultValue="specifications" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="specifications">Spesifikasi</TabsTrigger>
            <TabsTrigger value="reviews">Ulasan ({product.reviews.length})</TabsTrigger>
            <TabsTrigger value="discussion">Diskusi</TabsTrigger>
          </TabsList>
          <TabsContent value="specifications" className="p-4 border rounded-b-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex py-2 border-b">
                  <span className="font-medium w-40">{spec.name}</span>
                  <span className="text-gray-700">{spec.value}</span>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="p-4 border rounded-b-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Rating summary */}
              <div className="col-span-1 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-tani-green mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex items-center mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.round(averageRating) ? 'fill-tani-yellow text-tani-yellow' : 'text-gray-300'}`} />
                  ))}
                </div>
                <p className="text-gray-600">{product.reviews.length} ulasan</p>
              </div>

              {/* Rating breakdown */}
              <div className="col-span-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center mb-2">
                    <div className="flex items-center w-20">
                      <span className="mr-1">{rating}</span>
                      <Star className="w-4 h-4 fill-tani-yellow text-tani-yellow" />
                    </div>
                    <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-tani-yellow rounded-full"
                        style={{ width: `${ratingPercentage[5 - rating]}%` }}
                      ></div>
                    </div>
                    <div className="w-10 text-right text-sm text-gray-600">
                      {ratingDistribution[5 - rating]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Write review form */}
            <div className="mb-8 p-4 border rounded-md">
              <h3 className="font-semibold text-lg mb-4">Tulis Ulasan Anda</h3>
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <p className="mb-2">Rating:</p>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        className="mr-1"
                      >
                        <Star className={`w-8 h-8 ${userRating >= star ? 'fill-tani-yellow text-tani-yellow' : 'text-gray-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <Textarea
                    placeholder="Bagikan pengalaman Anda dengan produk ini..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="min-h-32"
                  />
                </div>
                <div className="flex justify-end">
                  <Button type="submit" className="bg-tani-green hover:bg-tani-green/90">
                    Kirim Ulasan
                  </Button>
                </div>
              </form>
            </div>

            {/* Reviews */}
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b pb-6">
                  <div className="flex items-start mb-3">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={review.avatar} alt={review.user} />
                      <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{review.user}</p>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-tani-yellow text-tani-yellow' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3">{review.content}</p>
                  {review.images.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {review.images.map((image, index) => (
                        <img 
                          key={index} 
                          src={image} 
                          alt={`Review ${review.id} image ${index+1}`} 
                          className="w-16 h-16 object-cover rounded-md cursor-pointer"
                        />
                      ))}
                    </div>
                  )}
                  <Button variant="ghost" size="sm" className="text-tani-green hover:text-tani-green/90 hover:bg-tani-light-green">
                    <MessageSquare className="mr-1 h-4 w-4" /> Balas
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="discussion" className="p-4 border rounded-b-md">
            <div className="mb-6 p-4 bg-gray-50 rounded-md">
              <h3 className="font-medium mb-4">Tanya Penjual</h3>
              <form>
                <Textarea
                  placeholder="Tulis pertanyaan Anda tentang produk ini..."
                  className="mb-4"
                />
                <div className="flex justify-end">
                  <Button className="bg-tani-green hover:bg-tani-green/90">
                    <MessageSquare className="mr-2 h-4 w-4" /> Kirim Pertanyaan
                  </Button>
                </div>
              </form>
            </div>
            <div className="text-center py-8">
              <p className="text-gray-500">Belum ada diskusi untuk produk ini</p>
              <p className="text-gray-500 text-sm">Jadilah yang pertama bertanya!</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Produk Terkait</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="border rounded-md overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200">
                  <img 
                    src={`https://images.unsplash.com/photo-${1580136579 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} 
                    alt={`Related product ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-sm line-clamp-2 mb-1 hover:text-tani-green">
                    Bibit Organik Premium Varietas {i+1}
                  </h3>
                  <p className="text-tani-green font-bold">Rp {(25000 + i * 5000).toLocaleString('id-ID')}</p>
                  <div className="flex items-center mt-1 text-xs text-gray-500">
                    <Star className="w-3 h-3 fill-tani-yellow text-tani-yellow" />
                    <span className="ml-1">4.{7+i}</span>
                    <span className="mx-1">•</span>
                    <span>Terjual {50 + i * 12}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
