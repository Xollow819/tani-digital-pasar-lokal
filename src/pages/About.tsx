import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leaf, MessageSquare, ArrowRight } from "lucide-react";
const About = () => {
  // Data tim
  const teamMembers = [{
    name: "Mahda Aryo Firdaus",
    position: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?img=51",
    bio: "Seorang petani berpengalaman dan tech enthusiast yang peduli terhadap perkembangan pertanian di Indonesia."
  }, {
    name: "Muhammad Fauzan Lazwar",
    position: "Chief Technology Officer",
    avatar: "https://sea3.discourse-cdn.com/outliercommunity/user_avatar/community.outlier.ai/fauzanlazwar28/288/945157_2.png",
    bio: "Ahli teknologi digital dengan pengalaman lebih dari 100 tahun dalam pengembangan platform e-commerce."
  }, {
    name: "Lidya",
    position: "Head of Agriculture",
    avatar: "/lovable-uploads/7a8505a3-bbf6-46b7-b2ba-bbd9a229c24b.png",
    bio: "Lulusan S3 Pertanian yang telah melakukan berbagai penelitian tentang pertanian berkelanjutan."
  }, {
    name: "Lisma",
    position: "Community Manager",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Mantan aktivis yang kini fokus membangun komunitas petani digital di berbagai daerah di Indonesia."
  }, {
    name: "Adam Anom Jati",
    position: "Head of Agriculture",
    avatar: "https://i.pravatar.cc/150?img=11",
    bio: "Lulusan S3 Pertanian yang telah melakukan berbagai penelitian tentang pertanian berkelanjutan."
  }, {
    name: "Tari",
    position: "Head of Agriculture",
    avatar: "/lovable-uploads/633d5544-9ac3-469a-bbc1-c4d4a1b6e110.png",
    bio: "Lulusan S3 Pertanian yang telah melakukan berbagai penelitian tentang pertanian berkelanjutan."
  }];

  // Data pertanyaan umum
  const faqs = [{
    question: "Apa itu IPINI?",
    answer: "IPINI adalah platform yang menghubungkan petani dengan pembeli secara langsung, sekaligus menyediakan konten edukasi berupa video tutorial untuk meningkatkan keterampilan pertanian."
  }, {
    question: "Bagaimana cara menjual produk di IPINI?",
    answer: "Untuk menjual produk, Anda perlu mendaftar sebagai penjual, melengkapi profil, dan mengunggah produk pertanian yang ingin dijual. Platform kami terintegrasi dengan Shopee untuk kemudahan transaksi."
  }, {
    question: "Apakah semua petani bisa bergabung?",
    answer: "Ya, semua petani di Indonesia bisa bergabung dengan platform IPINI tanpa biaya. Kami membuka kesempatan bagi petani skala kecil hingga besar."
  }, {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran dilakukan melalui platform Shopee yang sudah terintegrasi dengan IPINI, menjamin keamanan transaksi bagi penjual dan pembeli."
  }, {
    question: "Bagaimana cara berkontribusi dalam video edukasi?",
    answer: "Anda dapat mendaftar sebagai kontributor dan mengunggah video edukasi pertanian setelah melalui proses verifikasi oleh tim kami."
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-tani-light-green to-tani-light-blue">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Tentang IPINI
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Mendukung petani Indonesia melalui digitalisasi, edukasi, dan akses pasar yang lebih luas
          </p>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-tani-light-green rounded-full flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-tani-green" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
              <p className="text-gray-700 mb-4">
                Menjadi platform terdepan dalam digitalisasi pertanian Indonesia yang menghubungkan petani dengan pasar secara langsung, meningkatkan kesejahteraan petani, dan mendukung ketahanan pangan nasional.
              </p>
              <p className="text-gray-700">
                Kami percaya bahwa dengan teknologi, pengetahuan, dan akses pasar yang tepat, petani Indonesia dapat berkembang dan berdaya saing di era digital.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-tani-light-blue rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-tani-blue"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Membangun platform yang menghubungkan petani langsung dengan pembeli.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Memberikan edukasi pertanian modern melalui video tutorial berkualitas.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Mengintegrasikan platform dengan e-commerce lokal untuk memperluas jangkauan pasar.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Membangun komunitas petani digital yang saling mendukung dan berbagi pengetahuan.</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Mendorong praktik pertanian berkelanjutan yang ramah lingkungan.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cerita Kami */}
      <section className="py-16 bg-tani-light-brown/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cerita Kami</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">Ipini berasal dari kata lidya yang berati ...</p>
            <p className="text-lg mb-6">Pada tahun 2025 sekian dan terima kasih</p>
            <p className="text-lg mb-6">anj susah bgt</p>
            <p className="text-lg mb-6">Kamu Bohong</p>
            <div className="mt-10 text-center">
              <Button asChild size="lg" className="bg-tani-green hover:bg-tani-green/90">
                <Link to="/marketplace">
                  Jelajahi Marketplace Kami <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tim Kami</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-tani-green mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-tani-light-green/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pertanyaan Umum</h2>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y">
              {faqs.map((faq, index) => <div key={index} className="py-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Kontak & CTA */}
      <section className="py-16 bg-tani-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Kami senang mendengar dari Anda!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" className="bg-white text-tani-brown hover:bg-white/90">
              <Link to="/kontak">
                <MessageSquare className="mr-2 h-5 w-5" /> Kirim Pesan
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="mailto:info@tanidigital.id">
                Email Kami
              </a>
            </Button>
          </div>
          <div className="max-w-md mx-auto text-center text-gray-200">
            <p className="mb-1">Jl. Padjajaran Sekolah Vokasi IPB</p>
            <p className="mb-1">Telepon: +62 895 2753 6850</p>
            <p>Email: info@ipini.com</p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;
