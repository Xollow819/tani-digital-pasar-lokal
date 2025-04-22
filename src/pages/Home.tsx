import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Video, TreeDeciduous } from "lucide-react";

const Home = () => {
  // Data produk unggulan
  const featuredProducts = [{
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

  // Data video edukasi 
  const educationalVideos = [{
    id: 1,
    title: "Teknik Hidroponik untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "12:45",
    creator: "Dr. Agus Budiman",
    views: 15600
  }, {
    id: 2,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://images.unsplash.com/photo-1566045638967-51a1b087be69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "18:22",
    creator: "Tani Mandiri",
    views: 8900
  }, {
    id: 3,
    title: "Budidaya Sayuran Organik",
    thumbnail: "https://images.unsplash.com/photo-1528359645462-5ff231885278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "21:10",
    creator: "Pertanian Maju",
    views: 12400
  }];

  return <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
    }}>
        <div className="container mx-auto px-4">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Informasi Pintar Pemberdayaan Petani</h1>
            <p className="text-xl text-white mb-8">
              Hubungkan petani dan pembeli dalam satu platform, tingkatkan kualitas pertanian melalui teknologi dan edukasi.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-tani-green hover:bg-tani-green/90">
                <Link to="/marketplace">Jelajahi Marketplace</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white text-tani-green hover:bg-white/90">
                <Link to="/edukasi">Video Edukasi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="py-16 bg-gradient-to-r from-tani-light-green/40 to-tani-light-blue/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama Kami</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-tani-light-green w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-8 h-8 text-tani-green" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketplace Pertanian</h3>
              <p className="text-gray-600">
                Jual dan beli produk pertanian berkualitas langsung dari petani, dengan integrasi ke platform e-commerce lokal seperti Shopee.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-tani-light-yellow w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <TreeDeciduous className="w-8 h-8 text-tani-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sistem Komunikasi</h3>
              <p className="text-gray-600">
                Komunikasi langsung antara petani dan pembeli melalui fitur pesan dalam aplikasi dan sistem ulasan produk terintegrasi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-tani-light-blue w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Video className="w-8 h-8 text-tani-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Edukasi Petani</h3>
              <p className="text-gray-600">
                Akses ke ratusan video tutorial dan materi pembelajaran untuk meningkatkan keterampilan dan pengetahuan petani modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Produk Unggulan</h2>
            <Button asChild variant="outline" className="text-tani-green border-tani-green hover:bg-tani-light-green">
              <Link to="/marketplace">Lihat Semua</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
              </Card>)}
          </div>
        </div>
      </section>

      {/* Video Edukasi */}
      <section className="py-16 bg-tani-light-brown/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Video Edukasi</h2>
            <Button asChild variant="outline" className="text-tani-brown border-tani-brown hover:bg-tani-light-brown">
              <Link to="/edukasi">Lihat Semua</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationalVideos.map(video => <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-12 h-12 bg-tani-green rounded-full flex items-center justify-center cursor-pointer hover:bg-tani-green/90 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/edukasi/video/${video.id}`}>
                    <h3 className="font-semibold hover:text-tani-green">{video.title}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mt-1">Oleh: {video.creator}</p>
                  <p className="text-gray-500 text-sm mt-1">{video.views.toLocaleString('id-ID')} tayangan</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-tani-green to-tani-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Komunitas Tani Digital</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">
            Dapatkan akses ke marketplace, edukasi, dan jaringan petani di seluruh Indonesia.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-tani-green hover:bg-white/90">
              <Link to="/daftar">Daftar Sekarang</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/tentang">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Home;
