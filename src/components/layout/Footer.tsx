
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-tani-green text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Tani Digital</h3>
            <p className="text-gray-200 mb-4">
              Platform digitalisasi pertanian yang menghubungkan petani langsung dengan pembeli dan menyediakan edukasi pertanian modern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-tani-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-tani-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-white hover:text-tani-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-white hover:text-tani-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-200 hover:text-white">Beranda</Link></li>
              <li><Link to="/marketplace" className="text-gray-200 hover:text-white">Marketplace</Link></li>
              <li><Link to="/edukasi" className="text-gray-200 hover:text-white">Edukasi</Link></li>
              <li><Link to="/tentang" className="text-gray-200 hover:text-white">Tentang Kami</Link></li>
              <li><Link to="/kontak" className="text-gray-200 hover:text-white">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kategori</h3>
            <ul className="space-y-2">
              <li><Link to="/marketplace?category=sayuran" className="text-gray-200 hover:text-white">Sayuran Organik</Link></li>
              <li><Link to="/marketplace?category=buah" className="text-gray-200 hover:text-white">Buah Segar</Link></li>
              <li><Link to="/marketplace?category=rempah" className="text-gray-200 hover:text-white">Rempah-rempah</Link></li>
              <li><Link to="/marketplace?category=bibit" className="text-gray-200 hover:text-white">Bibit Unggul</Link></li>
              <li><Link to="/marketplace?category=alat" className="text-gray-200 hover:text-white">Peralatan Tani</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mr-2 mt-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-gray-200">Jl. Pertanian No. 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone mr-2 mt-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span className="text-gray-200">+62 812 3456 7890</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail mr-2 mt-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span className="text-gray-200">info@tanidigital.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200/20 mt-8 pt-8 text-center text-gray-200">
          <p>&copy; 2025 Tani Digital. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
