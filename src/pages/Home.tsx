
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import VideoSection from "@/components/home/VideoSection";
import CTASection from "@/components/home/CTASection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <VideoSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
