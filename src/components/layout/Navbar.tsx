import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, MessageSquare, Menu, LogOut, SettingsIcon, Sun, Moon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    console.log("User logging out");
    
    localStorage.clear();
    sessionStorage.clear();
    
    toast({
      title: "Berhasil Keluar",
      description: "Anda telah keluar dari akun IPINI.",
    });
    
    navigate("/login");
  };

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50"> {/* Peningkatan z-index */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center gap-2">
              <div className="bg-tani-green text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <span className="text-xl font-bold text-tani-green">IPINI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/home" className="text-foreground hover:text-tani-green font-medium transition-colors">Beranda</Link>
            <Link to="/marketplace" className="text-foreground hover:text-tani-green font-medium transition-colors">Marketplace</Link>
            <Link to="/edukasi" className="text-foreground hover:text-tani-green font-medium transition-colors">Edukasi</Link>
            <Link to="/tentang" className="text-foreground hover:text-tani-green font-medium transition-colors">Tentang Kami</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground hover:text-tani-yellow transition-colors" aria-label="Toggle theme">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Link to="/cart" aria-label="Keranjang Belanja">
              <Button variant="ghost" size="icon" className="relative text-foreground hover:text-tani-green transition-colors">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-tani-yellow text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">3</span>
              </Button>
            </Link>
            <Link to="/messages" aria-label="Pesan">
              <Button variant="ghost" size="icon" className="relative text-foreground hover:text-tani-green transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-tani-green text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-semibold">5</span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User Avatar" /> {/* Ganti dengan avatar pengguna yang sebenarnya atau placeholder yang lebih baik */}
                    <AvatarFallback>TD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mt-2" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full flex items-center cursor-pointer">
                    <User className="mr-2 h-4 w-4" /> Profil Saya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="w-full flex items-center cursor-pointer">
                     <ShoppingCart className="mr-2 h-4 w-4" /> Pesanan Saya
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link to="/messages" className="w-full flex items-center cursor-pointer">
                     <MessageSquare className="mr-2 h-4 w-4" /> Pesan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="w-full flex items-center cursor-pointer">
                    <SettingsIcon className="mr-2 h-4 w-4" /> Pengaturan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer flex items-center">
                  {theme === 'light' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  <span>Mode {theme === 'light' ? 'Gelap' : 'Terang'}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive hover:!text-destructive focus:!text-destructive hover:!bg-destructive/10 focus:!bg-destructive/10 flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground" aria-label="Buka menu">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-border">
            <div className="flex flex-col space-y-1 pt-2">
              <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
              <Link to="/marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link>
              <Link to="/edukasi" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>Edukasi</Link>
              <Link to="/tentang" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
              <Link to="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground" onClick={() => setIsMobileMenuOpen(false)}>Pengaturan</Link>
              <Button 
                variant="ghost" 
                className="w-full justify-start px-3 py-2 rounded-md text-base font-medium text-destructive hover:text-destructive hover:bg-destructive/10" 
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
