import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, MessageSquare, Menu, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logging out");
    
    // Clear any stored user data (if any)
    localStorage.clear();
    sessionStorage.clear();
    
    // Show logout success message
    toast({
      title: "Berhasil Keluar",
      description: "Anda telah keluar dari akun IPINI.",
    });
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-tani-green text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <span className="text-xl font-bold text-tani-green">IPINI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-tani-green font-medium">Beranda</Link>
            <Link to="/marketplace" className="text-gray-700 hover:text-tani-green font-medium">Marketplace</Link>
            <Link to="/edukasi" className="text-gray-700 hover:text-tani-green font-medium">Edukasi</Link>
            <Link to="/tentang" className="text-gray-700 hover:text-tani-green font-medium">Tentang Kami</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-tani-yellow text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-tani-green text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>TD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profil Saya</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/messages" className="w-full">Pesan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/orders" className="w-full">Pesanan Saya</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings" className="w-full">Pengaturan</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 hover:text-red-700">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/" className="text-gray-700 hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
              <Link to="/marketplace" className="text-gray-700 hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link>
              <Link to="/edukasi" className="text-gray-700 hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Edukasi</Link>
              <Link to="/tentang" className="text-gray-700 hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
              <Button 
                variant="ghost" 
                className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50" 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleLogout();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Keluar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
