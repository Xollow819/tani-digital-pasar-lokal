
import { ShoppingCart, TreeDeciduous, Video } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-tani-light-green/40 to-tani-light-blue/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fitur Utama Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShoppingCart className="w-8 h-8 text-tani-green" />}
            title="Marketplace Pertanian"
            description="Jual dan beli produk pertanian berkualitas langsung dari petani, dengan integrasi ke platform e-commerce lokal seperti Shopee."
            iconBgColor="bg-tani-light-green"
          />
          <FeatureCard
            icon={<TreeDeciduous className="w-8 h-8 text-tani-brown" />}
            title="Sistem Komunikasi"
            description="Komunikasi langsung antara petani dan pembeli melalui fitur pesan dalam aplikasi dan sistem ulasan produk terintegrasi."
            iconBgColor="bg-tani-light-yellow"
          />
          <FeatureCard
            icon={<Video className="w-8 h-8 text-tani-blue" />}
            title="Edukasi Petani"
            description="Akses ke ratusan video tutorial dan materi pembelajaran untuk meningkatkan keterampilan dan pengetahuan petani modern."
            iconBgColor="bg-tani-light-blue"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description, iconBgColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}) => (
  <div className="bg-white p-8 rounded-lg shadow-md text-center">
    <div className={`${iconBgColor} w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeaturesSection;
