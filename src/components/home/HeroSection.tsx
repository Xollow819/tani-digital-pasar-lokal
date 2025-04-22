
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-[500px] flex items-center" style={{
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")'
    }}>
      <div className="container mx-auto px-4">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Informasi Pintar Pemberdayaan Petani
          </h1>
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
  );
};

export default HeroSection;
