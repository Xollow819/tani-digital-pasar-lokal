
import { useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, MessageSquare, Share2, Video } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [comment, setComment] = useState("");

  // Data video (contoh data statis, pada implementasi nyata akan diambil dari API)
  const video = {
    id: 1,
    title: "Teknik Hidroponik untuk Pemula",
    description: "Dalam video ini, Dr. Agus Budiman menjelaskan cara memulai sistem hidroponik sederhana di rumah. Hidroponik adalah metode bertanam tanpa tanah yang memanfaatkan larutan nutrisi. Keuntungan dari sistem hidroponik antara lain efisiensi air, penggunaan lahan yang minimal, dan hasil panen yang lebih cepat.\n\nMateri yang dibahas dalam video ini meliputi:\n- Pengenalan sistem hidroponik\n- Jenis-jenis sistem hidroponik untuk pemula\n- Bahan dan alat yang diperlukan\n- Langkah-langkah pembuatan sistem NFT (Nutrient Film Technique)\n- Cara membuat nutrisi hidroponik\n- Pemilihan tanaman yang cocok untuk hidroponik\n- Perawatan dan monitoring sistem\n\nSetelah menonton video ini, Anda akan memiliki pengetahuan dasar untuk memulai bercocok tanam dengan sistem hidroponik di rumah.",
    thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder, pada implementasi nyata akan menggunakan URL video sebenarnya
    duration: "12:45",
    views: 15600,
    likes: 1250,
    date: "10 April 2025",
    creator: "Dr. Agus Budiman",
    creatorAvatar: "https://i.pravatar.cc/150?img=12",
    subscribers: 25600,
    category: "Teknik Menanam",
    tags: ["hidroponik", "sayuran", "urban farming", "bertanam tanpa tanah"],
    comments: [
      {
        id: 1,
        user: "Budi Santoso",
        avatar: "https://i.pravatar.cc/150?img=51",
        content: "Video yang sangat informatif! Saya sudah mencoba sistem hidroponik sederhana di rumah dan hasilnya luar biasa. Terima kasih atas tutorialnya.",
        date: "11 April 2025",
        likes: 28
      },
      {
        id: 2,
        user: "Siti Nurhaliza",
        avatar: "https://i.pravatar.cc/150?img=32",
        content: "Apakah bisa diterapkan untuk tanaman buah seperti strawberry?",
        date: "10 April 2025",
        likes: 15,
        replies: [
          {
            id: 21,
            user: "Dr. Agus Budiman",
            avatar: "https://i.pravatar.cc/150?img=12",
            content: "Tentu saja bisa! Strawberry termasuk tanaman yang cocok untuk sistem hidroponik. Pada video berikutnya saya akan membahas khusus tentang budidaya strawberry hidroponik.",
            date: "10 April 2025",
            likes: 20
          }
        ]
      },
      {
        id: 3,
        user: "Ahmad Rasyid",
        avatar: "https://i.pravatar.cc/150?img=67",
        content: "Berapa estimasi biaya untuk membuat sistem hidroponik seperti yang dijelaskan dalam video?",
        date: "9 April 2025",
        likes: 10
      }
    ],
    relatedVideos: [
      {
        id: 2,
        title: "Mengatasi Hama Tanaman Secara Alami",
        thumbnail: "https://images.unsplash.com/photo-1566045638967-51a1b087be69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "18:22",
        views: 8900,
        creator: "Tani Mandiri"
      },
      {
        id: 3,
        title: "Budidaya Sayuran Organik",
        thumbnail: "https://images.unsplash.com/photo-1528359645462-5ff231885278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "21:10",
        views: 12400,
        creator: "Pertanian Maju"
      },
      {
        id: 4,
        title: "Teknik Pemupukan yang Efektif",
        thumbnail: "https://images.unsplash.com/photo-1599401759022-1856e1ee6b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        duration: "15:30",
        views: 7800,
        creator: "Kebun Hijau"
      }
    ]
  };

  // Handle fungsi mengirim komentar
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    console.log("Submitting comment:", comment);
    // Reset input setelah mengirim
    setComment("");
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
              <Link to="/edukasi">Edukasi</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span>{video.title}</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Video Player */}
            <div className="aspect-video bg-black mb-6 rounded-lg overflow-hidden">
              <iframe 
                src={video.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
                title={video.title}
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
              <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4">
                <span className="mr-4">{video.views.toLocaleString('id-ID')} tayangan</span>
                <span className="mr-4">{video.date}</span>
                <div className="flex items-center">
                  <span className="mr-4">Kategori: {video.category}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-between items-center mb-6 pb-4 border-b">
                <div className="flex items-center mb-2 md:mb-0">
                  <Avatar className="h-12 w-12 mr-3">
                    <AvatarImage src={video.creatorAvatar} alt={video.creator} />
                    <AvatarFallback>{video.creator.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <Link to={`/edukasi/creator/${video.creator}`} className="font-medium hover:text-tani-green">
                      {video.creator}
                    </Link>
                    <p className="text-sm text-gray-500">{video.subscribers.toLocaleString('id-ID')} subscribers</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex items-center">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    <span>{video.likes.toLocaleString('id-ID')}</span>
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Share2 className="mr-2 h-4 w-4" />
                    <span>Bagikan</span>
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h2 className="font-semibold mb-3">Deskripsi</h2>
                <div className="whitespace-pre-line text-gray-700">
                  {video.description}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {video.tags.map((tag, index) => (
                    <Link 
                      key={index}
                      to={`/edukasi?tag=${tag}`}
                      className="bg-tani-light-green text-tani-green px-2 py-1 rounded-full text-xs hover:bg-tani-green hover:text-white transition"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Comments Section */}
              <div>
                <h2 className="font-semibold mb-6">{video.comments.length} Komentar</h2>
                
                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-6">
                  <div className="flex gap-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Tulis komentar..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="mb-2"
                      />
                      <div className="flex justify-end">
                        <Button type="submit" className="bg-tani-green hover:bg-tani-green/90">
                          Kirim Komentar
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>

                {/* Comment List */}
                <div className="space-y-6">
                  {video.comments.map((comment) => (
                    <div key={comment.id} className="pb-4 border-b last:border-0">
                      <div className="flex gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={comment.avatar} alt={comment.user} />
                          <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            <p className="font-medium mr-2">{comment.user}</p>
                            <p className="text-gray-500 text-xs">{comment.date}</p>
                          </div>
                          <p className="text-gray-700 mb-2">{comment.content}</p>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-tani-green">
                              <ThumbsUp className="h-4 w-4 mr-1" /> {comment.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-gray-500 hover:text-tani-green">
                              <MessageSquare className="h-4 w-4 mr-1" /> Balas
                            </Button>
                          </div>

                          {/* Replies */}
                          {comment.replies && comment.replies.length > 0 && (
                            <div className="mt-4 pl-6 border-l space-y-4">
                              {comment.replies.map((reply) => (
                                <div key={reply.id} className="flex gap-3">
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage src={reply.avatar} alt={reply.user} />
                                    <AvatarFallback>{reply.user.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="flex items-center mb-1">
                                      <p className="font-medium mr-2">{reply.user}</p>
                                      <p className="text-gray-500 text-xs">{reply.date}</p>
                                    </div>
                                    <p className="text-gray-700 mb-2">{reply.content}</p>
                                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-tani-green">
                                      <ThumbsUp className="h-4 w-4 mr-1" /> {reply.likes}
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related Videos */}
            <h3 className="font-semibold mb-4">Video Terkait</h3>
            <div className="space-y-4">
              {video.relatedVideos.map((related) => (
                <Card key={related.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row lg:flex-col">
                    <div className="relative w-full sm:w-40 lg:w-full h-32 sm:h-24 lg:h-32">
                      <img 
                        src={related.thumbnail} 
                        alt={related.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Link to={`/edukasi/video/${related.id}`}>
                          <div className="w-10 h-10 bg-tani-green rounded-full flex items-center justify-center cursor-pointer hover:bg-tani-green/90 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                          </div>
                        </Link>
                      </div>
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs font-medium px-1 py-0.5 rounded">
                        {related.duration}
                      </div>
                    </div>
                    <CardContent className="p-3 flex-1">
                      <Link to={`/edukasi/video/${related.id}`}>
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-tani-green">
                          {related.title}
                        </h4>
                      </Link>
                      <p className="text-gray-500 text-xs mt-1">{related.creator}</p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {related.views.toLocaleString('id-ID')} tayangan
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-tani-light-brown/50 p-4 rounded-lg mt-6">
              <h3 className="font-semibold mb-3">Bagikan Pengetahuan Anda</h3>
              <p className="text-sm text-gray-700 mb-4">
                Punya pengetahuan atau pengalaman bertani yang ingin dibagikan? Unggah video edukasi Anda sekarang.
              </p>
              <Button asChild className="w-full bg-tani-brown hover:bg-tani-brown/90">
                <Link to="/edukasi/upload">
                  <Video className="mr-2 h-4 w-4" /> Unggah Video
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoDetail;
