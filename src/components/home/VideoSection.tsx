
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  creator: string;
  views: number;
}

const educationalVideos: Video[] = [{
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

const VideoSection = () => {
  return (
    <section className="py-16 bg-tani-light-brown/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Video Edukasi</h2>
          <Button asChild variant="outline" className="text-tani-brown border-tani-brown hover:bg-tani-light-brown">
            <Link to="/edukasi">Lihat Semua</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationalVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

const VideoCard = ({ video }: { video: Video }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
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
  </Card>
);

export default VideoSection;
