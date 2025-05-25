// src/components/layout/ThemeProvider.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Definisikan tipe untuk tema
type Theme = 'light' | 'dark';

// Definisikan tipe untuk konteks tema
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Buat konteks tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Buat komponen ThemeProvider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State untuk menyimpan tema saat ini, defaultnya 'light'
  // Kita akan mencoba mengambil tema dari localStorage jika ada
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme || 'light';
  });

  // Efek untuk menerapkan kelas tema ke elemen root (html) dan menyimpan ke localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(theme === 'light' ? 'dark' : 'light');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Fungsi untuk mengganti tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook kustom untuk menggunakan konteks tema
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
```tsx
// src/pages/Settings.tsx
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useTheme } from '@/components/layout/ThemeProvider'; // Impor useTheme
import {
  User,
  Bell,
  Palette,
  ShieldCheck,
  HelpCircle,
  ChevronRight,
  LogOut,
  CreditCard,
  MapPin,
  Languages,
  Moon,
  Sun
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';


const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme(); // Gunakan hook useTheme
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logging out from settings");
    localStorage.clear();
    sessionStorage.clear();
    toast({
      title: "Berhasil Keluar",
      description: "Anda telah keluar dari akun IPINI.",
    });
    navigate("/login");
  };

  const settingsSections = [
    {
      title: 'Akun',
      icon: <User className="h-5 w-5 text-tani-green" />,
      items: [
        { label: 'Profil Saya', action: () => navigate('/profile'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Alamat Tersimpan', action: () => { /* Logika navigasi atau modal */ }, icon: <MapPin className="h-4 w-4 text-gray-400 mr-2" /> },
        { label: 'Metode Pembayaran', action: () => { /* Logika navigasi atau modal */ }, icon: <CreditCard className="h-4 w-4 text-gray-400 mr-2" /> },
      ],
    },
    {
      title: 'Notifikasi',
      icon: <Bell className="h-5 w-5 text-tani-yellow" />,
      items: [
        { label: 'Notifikasi Promo', control: <Switch id="promo-notifications" /> },
        { label: 'Notifikasi Update Pesanan', control: <Switch id="order-notifications" defaultChecked /> },
        { label: 'Notifikasi Chat', control: <Switch id="chat-notifications" defaultChecked /> },
      ],
    },
    {
      title: 'Tampilan',
      icon: <Palette className="h-5 w-5 text-tani-blue" />,
      items: [
        {
          label: 'Mode Gelap',
          control: (
            <div className="flex items-center space-x-2">
              <Sun className={`h-5 w-5 ${theme === 'light' ? 'text-tani-yellow' : 'text-gray-400'}`} />
              <Switch
                id="dark-mode"
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
              />
              <Moon className={`h-5 w-5 ${theme === 'dark' ? 'text-tani-blue' : 'text-gray-400'}`} />
            </div>
          ),
        },
        { label: 'Bahasa', action: () => { /* Logika ganti bahasa */ }, current: 'Indonesia', icon: <Languages className="h-4 w-4 text-gray-400 mr-2" /> },
      ],
    },
    {
      title: 'Privasi & Keamanan',
      icon: <ShieldCheck className="h-5 w-5 text-red-500" />,
      items: [
        { label: 'Ubah Password', action: () => { /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Kelola Perangkat Terhubung', action: () => { /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Kebijakan Privasi', action: () => navigate('/syarat-ketentuan'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
      ],
    },
    {
      title: 'Bantuan & Dukungan',
      icon: <HelpCircle className="h-5 w-5 text-purple-500" />,
      items: [
        { label: 'Pusat Bantuan (FAQ)', action: () => navigate('/tentang#faq'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Hubungi Kami', action: () => navigate('/tentang#kontak'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Laporkan Masalah', action: () => { /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Pengaturan</h1>

        <div className="space-y-8">
          {settingsSections.map((section, sectionIdx) => (
            <Card key={sectionIdx} className="overflow-hidden">
              <CardHeader className="bg-gray-50 dark:bg-gray-800 p-4 border-b dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <span className="p-2 bg-white dark:bg-gray-700 rounded-full shadow-sm">{section.icon}</span>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y dark:divide-gray-700">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`flex items-center justify-between p-4 ${item.action ? 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors' : ''}`}
                      onClick={item.action}
                    >
                      <div className="flex items-center">
                        {item.icon && !item.action && item.icon}
                        <Label htmlFor={item.control ? (item.control as React.ReactElement).props.id : undefined} className="text-base dark:text-gray-200">
                          {item.label}
                        </Label>
                      </div>
                      {item.control ? (
                        item.control
                      ) : item.action ? (
                        <div className="flex items-center">
                          {item.current && <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">{item.current}</span>}
                          {item.icon && item.action && item.icon}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="overflow-hidden">
             <CardContent className="p-4">
                <Button
                    variant="destructive"
                    className="w-full"
                    onClick={handleLogout}
                >
                    <LogOut className="mr-2 h-4 w-4" />
                    Keluar
                </Button>
             </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
```tsx
// src/App.tsx
import React from 'react'; // Pastikan React diimpor
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import ProductDetail from "./pages/ProductDetail";
import Education from "./pages/Education";
import VideoDetail from "./pages/VideoDetail";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import MessagesPage from "./pages/Messages";
import SettingsPage from "./pages/Settings"; // Impor SettingsPage
import { ThemeProvider } from './components/layout/ThemeProvider'; // Impor ThemeProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider> {/* Bungkus dengan ThemeProvider */}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/edukasi" element={<Education />} />
            <Route path="/edukasi/video/:id" element={<VideoDetail />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/daftar" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<SettingsPage />} /> {/* Tambahkan rute untuk SettingsPage */}
            <Route path="/syarat-ketentuan" element={<div>Terms & Conditions Page Placeholder</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"], // Pastikan ini 'class'
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tani: {
					'green': '#4CAF50', // Hijau utama
					'brown': '#8D6E63', // Coklat tanah
					'yellow': '#FFC107', // Kuning matahari
					'blue': '#03A9F4',   // Biru langit
					'light-green': '#A5D6A7',
					'light-brown': '#D7CCC8',
					'light-yellow': '#FFECB3',
					'light-blue': '#B3E5FC'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tani-digital-pasar-lokal</title>
    <meta name="description" content="Lovable Generated Project" />
    <meta name="author" content="Lovable" />

    <meta property="og:title" content="tani-digital-pasar-lokal" />
    <meta property="og:description" content="Lovable Generated Project" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@lovable_dev" />
    <meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
    <script>
      // Skrip untuk menerapkan tema awal dari localStorage untuk menghindari kedipan
      (function() {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      })();
    </script>
  </head>

  <body>
    <div id="root"></div>
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```tsx
// src/components/layout/Navbar.tsx
import React, { useState } from "react"; // Impor React
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, MessageSquare, Menu, LogOut, SettingsIcon, Sun, Moon } from "lucide-react"; // Tambahkan SettingsIcon, Sun, Moon
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import { useTheme } from "./ThemeProvider"; // Impor useTheme

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // Gunakan hook useTheme

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
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-10"> {/* Gunakan variabel CSS Tailwind */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/home" className="flex items-center gap-2">
              <div className="bg-tani-green text-white p-2 rounded-full">
                <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
              </div>
              <span className="text-xl font-bold text-tani-green">IPINI</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-foreground hover:text-tani-green font-medium">Beranda</Link>
            <Link to="/marketplace" className="text-foreground hover:text-tani-green font-medium">Marketplace</Link>
            <Link to="/edukasi" className="text-foreground hover:text-tani-green font-medium">Edukasi</Link>
            <Link to="/tentang" className="text-foreground hover:text-tani-green font-medium">Tentang Kami</Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-foreground hover:text-tani-yellow">
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-foreground hover:text-tani-green">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-tani-yellow text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </Button>
            </Link>
            <Link to="/messages">
              <Button variant="ghost" size="icon" className="relative text-foreground hover:text-tani-green">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-tani-green text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="[https://github.com/shadcn.png](https://github.com/shadcn.png)" alt="@shadcn" />
                    <AvatarFallback>TD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="w-full flex items-center">
                    <User className="mr-2 h-4 w-4" /> Profil Saya
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders" className="w-full flex items-center">
                     <ShoppingCart className="mr-2 h-4 w-4" /> Pesanan Saya
                  </Link>
                </DropdownMenuItem>
                 <DropdownMenuItem asChild>
                  <Link to="/messages" className="w-full flex items-center">
                     <MessageSquare className="mr-2 h-4 w-4" /> Pesan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="w-full flex items-center">
                    <SettingsIcon className="mr-2 h-4 w-4" /> Pengaturan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer flex items-center">
                  {theme === 'light' ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
                  <span>Mode {theme === 'light' ? 'Gelap' : 'Terang'}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-600 hover:!text-red-700 hover:!bg-red-50 dark:hover:!bg-red-700/20 flex items-center">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Keluar</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pb-3 border-t border-border">
            <div className="flex flex-col space-y-3 pt-3">
              <Link to="/home" className="text-foreground hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Beranda</Link>
              <Link to="/marketplace" className="text-foreground hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Marketplace</Link>
              <Link to="/edukasi" className="text-foreground hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Edukasi</Link>
              <Link to="/tentang" className="text-foreground hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Tentang Kami</Link>
              <Link to="/settings" className="text-foreground hover:text-tani-green font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pengaturan</Link>
              <Button 
                variant="ghost" 
                className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-700/20" 
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

