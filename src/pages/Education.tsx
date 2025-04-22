
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { TabsList, TabsTrigger, Tabs, TabsContent } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, Video, ArrowRight } from "lucide-react";
import { useState } from "react";

const Education = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Data kategori video
  const categories = [
    { id: "all", name: "Semua" },
    { id: "planting", name: "Teknik Menanam" },
    { id: "fertilizing", name: "Pemupukan" },
    { id: "pests", name: "Pengendalian Hama" },
    { id: "harvesting", name: "Panen" },
    { id: "marketing", name: "Pemasaran" },
    { id: "tools", name: "Alat Pertanian" },
  ];

  // Data video edukasi
  const videos = [
    {
      id: 1,
      title: "Teknik Hidroponik untuk Pemula",
      description: "Pelajari cara menanam sayuran dengan teknik hidroponik sederhana yang bisa diterapkan di rumah.",
      thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "12:45",
      views: 15600,
      date: "10 April 2025",
      creator: "Dr. Agus Budiman",
      category: "planting",
      featured: true
    },
    {
      id: 2,
      title: "Mengatasi Hama Tanaman Secara Alami",
      description: "Berbagai cara alami untuk mengatasi serangan hama pada tanaman tanpa menggunakan pestisida kimia.",
      thumbnail: "https://images.unsplash.com/photo-1566045638967-51a1b087be69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "18:22",
      views: 8900,
      date: "5 April 2025",
      creator: "Tani Mandiri",
      category: "pests",
      featured: true
    },
    {
      id: 3,
      title: "Budidaya Sayuran Organik",
      description: "Panduan lengkap untuk budidaya sayuran organik dari persiapan lahan hingga panen.",
      thumbnail: "https://images.unsplash.com/photo-1528359645462-5ff231885278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "21:10",
      views: 12400,
      date: "1 April 2025",
      creator: "Pertanian Maju",
      category: "planting",
      featured: true
    },
    {
      id: 4,
      title: "Teknik Pemupukan yang Efektif",
      description: "Pelajari cara pemberian pupuk yang tepat untuk hasil panen maksimal.",
      thumbnail: "https://images.unsplash.com/photo-1599401759022-1856e1ee6b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "15:30",
      views: 7800,
      date: "28 Maret 2025",
      creator: "Kebun Hijau",
      category: "fertilizing"
    },
    {
      id: 5,
      title: "Teknik Panen dan Pasca Panen",
      description: "Panduan lengkap tentang teknik panen yang benar dan penanganan pasca panen.",
      thumbnail: "https://images.unsplash.com/photo-1595841696141-5dea5f218d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "19:15",
      views: 6500,
      date: "25 Maret 2025",
      creator: "Agri Sukses",
      category: "harvesting"
    },
    {
      id: 6,
      title: "Strategi Pemasaran Produk Pertanian",
      description: "Tips dan strategi memasarkan produk pertanian baik secara online maupun offline.",
      thumbnail: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "23:45",
      views: 9200,
      date: "20 Maret 2025",
      creator: "Marketing Tani",
      category: "marketing"
    },
    {
      id: 7,
      title: "Pengenalan Alat Pertanian Modern",
      description: "Mengenal berbagai alat pertanian modern yang dapat meningkatkan efisiensi bertani.",
      thumbnail: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "17:20",
      views: 5600,
      date: "15 Maret 2025",
      creator: "Tekno Tani",
      category: "tools"
    },
    {
      id: 8,
      title: "Budidaya Tanaman Rempah",
      description: "Panduan lengkap budidaya tanaman rempah yang bernilai ekonomi tinggi.",
      thumbnail: "https://images.unsplash.com/photo-1599909850389-8e032313abf4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "20:15",
      views: 4800,
      date: "10 Maret 2025",
      creator: "Rempah Nusantara",
      category: "planting"
    }
  ];

  // Mendapatkan video unggulan
  const featuredVideos = videos.filter(video => video.featured);

  // Filter video berdasarkan kategori
  const filterVideosByCategory = (category: string) => {
    if (category === "all") return videos;
    return videos.filter(video => video.category === category);
  };

  // Handle pencarian
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[400px] flex items-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")' 
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Edukasi Pertanian Digital
            </h1>
            <p className="text-xl text-white mb-8">
              Tingkatkan pengetahuan dan keterampilan pertanian Anda melalui video edukasi berkualitas
            </p>
            <form onSubmit={handleSearch} className="flex w-full max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Cari video edukasi..."
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

      {/* Featured Videos */}
      <section className="py-12 bg-tani-light-green/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Video Unggulan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Link to={`/edukasi/video/${video.id}`}>
                      <div className="w-12 h-12 bg-tani-green rounded-full flex items-center justify-center cursor-pointer hover:bg-tani-green/90 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      </div>
                    </Link>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link to={`/edukasi/video/${video.id}`}>
                    <h3 className="font-semibold hover:text-tani-green">{video.title}</h3>
                  </Link>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{video.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-gray-500 text-sm">Oleh: {video.creator}</p>
                    <p className="text-gray-500 text-xs">{video.views.toLocaleString('id-ID')} tayangan</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Videos Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Jelajahi Video Edukasi</h2>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="flex flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="mb-2">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterVideosByCategory(category.id).map((video) => (
                    <Card key={video.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title} 
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <Link to={`/edukasi/video/${video.id}`}>
                            <div className="w-10 h-10 bg-tani-green rounded-full flex items-center justify-center cursor-pointer hover:bg-tani-green/90 transition-colors">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                            </div>
                          </Link>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <Link to={`/edukasi/video/${video.id}`}>
                          <h3 className="font-medium text-sm line-clamp-2 hover:text-tani-green">{video.title}</h3>
                        </Link>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-gray-500 text-xs">{video.creator}</p>
                          <p className="text-gray-500 text-xs">{video.views.toLocaleString('id-ID')} tayangan</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-tani-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ingin Berkontribusi?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Bagikan pengetahuan pertanian Anda melalui video edukasi dan bantu petani lain meningkatkan keterampilannya.
          </p>
          <Button asChild size="lg" className="bg-white text-tani-brown hover:bg-white/90">
            <Link to="/edukasi/upload">
              Unggah Video <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Education;
