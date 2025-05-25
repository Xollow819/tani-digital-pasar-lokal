import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const CTASection = () => {
  return <section className="py-16 bg-gradient-to-r from-tani-green to-tani-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Bergabunglah dengan Komunitas IPINI</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">
          Dapatkan akses ke marketplace, edukasi, dan jaringan petani di seluruh Indonesia.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-tani-green hover:bg-white/90">
            <Link to="/daftar">Daftar Sekarang</Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-tani-green hover:bg-white/90">
            <Link to="/tentang">Pelajari Lebih Lanjut</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default CTASection;
