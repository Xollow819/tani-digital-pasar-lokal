
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Star, Search, ShoppingCart, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Marketplace = () => {
  // Data kategori
  const categories = [
    { id: "sayuran", name: "Sayuran Organik" },
    { id: "buah", name: "Buah Segar" },
    { id: "rempah", name: "Rempah-rempah" },
    { id: "bibit", name: "Bibit Unggul" },
    { id: "pupuk", name: "Pupuk & Nutrisi" },
    { id: "alat", name: "Peralatan Tani" },
  ];

  // Data lokasi
  const locations = [
    { id: "jawa", name: "Jawa" },
    { id: "sumatera", name: "Sumatera" },
    { id: "kalimantan", name: "Kalimantan" },
    { id: "sulawesi", name: "Sulawesi" },
    { id: "bali", name: "Bali & Nusa Tenggara" },
  ];

  // Data produk
  const products = [
    {
      id: 1,
      name: "Bibit Sayuran Organik",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 35000,
      seller: "Tani Makmur",
      location: "Bandung, Jawa Barat",
      shopee: "tanimakmur",
      rating: 4.8,
      reviewCount: 156,
      category: "bibit"
    },
    {
      id: 2,
      name: "Pupuk Kompos Premium",
      image: "https://images.unsplash.com/photo-1584736286279-a9b8df642c7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 75000,
      seller: "Organik Nusantara",
      location: "Bogor, Jawa Barat",
      shopee: "organik_nusantara",
      rating: 4.9,
      reviewCount: 203,
      category: "pupuk"
    },
    {
      id: 3,
      name: "Alat Penyiram Otomatis",
      image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 450000,
      seller: "Agritech Indonesia",
      location: "Surabaya, Jawa Timur",
      shopee: "agritech_id",
      rating: 4.7,
      reviewCount: 89,
      category: "alat"
    },
    {
      id: 4,
      name: "Buah Alpukat Madu",
      image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 85000,
      seller: "Kebun Subur Abadi",
      location: "Malang, Jawa Timur",
      shopee: "kebunsubur",
      rating: 5.0,
      reviewCount: 128,
      category: "buah"
    },
    {
      id: 5,
      name: "Benih Tomat Unggul",
      image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 28000,
      seller: "Bibit Berkah",
      location: "Yogyakarta",
      shopee: "bibitberkah",
      rating: 4.6,
      reviewCount: 97,
      category: "bibit"
    },
    {
      id: 6,
      name: "Rempah Kunyit Kering",
      image: "https://images.unsplash.com/photo-1615485500704-8e990f9900e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 45000,
      seller: "Rempah Nusantara",
      location: "Medan, Sumatera Utara",
      shopee: "rempahnusantara",
      rating: 4.9,
      reviewCount: 112,
      category: "rempah"
    },
    {
      id: 7,
      name: "Bayam Organik Segar",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 15000,
      seller: "Kebun Sehat",
      location: "Depok, Jawa Barat",
      shopee: "kebunsehat",
      rating: 4.7,
      reviewCount: 78,
      category: "sayuran"
    },
    {
      id: 8,
      name: "Cangkul Premium",
      image: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: 185000,
      seller: "Alat Tani Modern",
      location: "Solo, Jawa Tengah",
      shopee: "alattanimodern",
      rating: 4.8,
      reviewCount: 65,
      category: "alat"
    },
  ];

  // State untuk pencarian dan filter
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  // Handle pencarian
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi pencarian
    console.log("Searching for:", searchTerm);
  };

  // Handle filter kategori
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  // Handle filter lokasi
  const handleLocationChange = (locationId: string, checked: boolean) => {
    if (checked) {
      setSelectedLocations([...selectedLocations, locationId]);
    } else {
      setSelectedLocations(selectedLocations.filter(id => id !== locationId));
    }
  };

  // Filter produk
  const filteredProducts = products.filter(product => {
    // Filter berdasarkan pencarian
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter berdasarkan kategori
    const matchesCategory = selectedCategories.length === 0 || 
                           selectedCategories.includes(product.category);
    
    // Filter berdasarkan lokasi
    const matchesLocation = selectedLocations.length === 0 || 
                           selectedLocations.some(loc => product.location.toLowerCase().includes(loc.toLowerCase()));
    
    // Filter berdasarkan harga
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesLocation && matchesPrice;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-tani-light-green py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Marketplace Produk Pertanian
            </h1>
            <p className="text-lg mb-6">
              Temukan produk pertanian berkualitas langsung dari petani lokal ke meja Anda
            </p>
            <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Cari produk pertanian..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-r-none"
              />
              <Button type="submit" className="rounded-l-none bg-tani-green hover:bg-tani-green/90">
                <Search className="mr-2 h-4 w-4" /> Cari
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Marketplace Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-semibold text-lg mb-4">Kategori</h3>
                <div className="space-y-3">
                  {categories.map(category => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={(checked) => 
                          handleCategoryChange(category.id, checked as boolean)
                        }
                      />
                      <label htmlFor={`category-${category.id}`} className="ml-2 text-sm">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-semibold text-lg mb-4">Rentang Harga</h3>
                <Slider
                  defaultValue={[0, 500000]}
                  max={500000}
                  step={10000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm">
                  <span>Rp {priceRange[0].toLocaleString('id-ID')}</span>
                  <span>Rp {priceRange[1].toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg mb-4">Lokasi Petani</h3>
                <div className="space-y-3">
                  {locations.map(location => (
                    <div key={location.id} className="flex items-center">
                      <Checkbox
                        id={`location-${location.id}`}
                        checked={selectedLocations.includes(location.id)}
                        onCheckedChange={(checked) => 
                          handleLocationChange(location.id, checked as boolean)
                        }
                      />
                      <label htmlFor={`location-${location.id}`} className="ml-2 text-sm">
                        {location.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-lg font-medium mb-2">Tidak ada produk yang ditemukan</h3>
                  <p>Coba ubah filter atau kata kunci pencarian Anda</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
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
                        <p className="text-gray-500 text-sm mb-1">Oleh: {product.seller}</p>
                        <p className="text-gray-500 text-xs mb-2">{product.location}</p>
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
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="flex justify-center mt-10">
                <Button variant="outline" size="sm" className="mr-2">
                  Sebelumnya
                </Button>
                <Button variant="outline" size="sm" className="mx-1 bg-tani-green text-white hover:bg-tani-green/90">
                  1
                </Button>
                <Button variant="outline" size="sm" className="mx-1">
                  2
                </Button>
                <Button variant="outline" size="sm" className="mx-1">
                  3
                </Button>
                <Button variant="outline" size="sm" className="ml-2">
                  Selanjutnya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration with Shopee */}
      <section className="py-10 bg-tani-light-yellow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Terintegrasi dengan Shopee
              </h2>
              <p className="text-gray-700 mb-6">
                Produk yang Anda lihat juga tersedia di marketplace Shopee. Dapatkan kemudahan pembayaran dan pengiriman melalui platform e-commerce terpercaya.
              </p>
              <Button asChild className="bg-[#EE4D2D] hover:bg-[#EE4D2D]/90">
                <a href="https://shopee.co.id" target="_blank" rel="noopener noreferrer">
                  Kunjungi Shopee <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/2560px-Shopee_logo.svg.png" 
                alt="Shopee" 
                className="h-24 md:h-32 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Marketplace;
