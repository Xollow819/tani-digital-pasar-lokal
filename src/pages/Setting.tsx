// src/pages/Settings.tsx
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
// import { Separator } from '@/components/ui/separator'; // Tidak terpakai di contoh ini, bisa dihapus jika tidak ada rencana penggunaan
import { useTheme } from '@/components/layout/ThemeProvider';
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
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logging out from settings");
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

  // Data untuk bagian-bagian pengaturan
  const settingsSections = [
    {
      title: 'Akun',
      icon: <User className="h-5 w-5 text-tani-green" />,
      items: [
        { label: 'Profil Saya', action: () => navigate('/profile'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Alamat Tersimpan', action: () => { console.log('Navigasi ke Alamat Tersimpan'); /* Logika navigasi atau modal */ }, icon: <MapPin className="h-4 w-4 text-gray-400 mr-2" />, hasChevron: true },
        { label: 'Metode Pembayaran', action: () => { console.log('Navigasi ke Metode Pembayaran'); /* Logika navigasi atau modal */ }, icon: <CreditCard className="h-4 w-4 text-gray-400 mr-2" />, hasChevron: true },
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
                aria-label="Toggle dark mode"
              />
              <Moon className={`h-5 w-5 ${theme === 'dark' ? 'text-tani-blue' : 'text-gray-400'}`} />
            </div>
          ),
        },
        { label: 'Bahasa', action: () => { console.log('Ganti Bahasa'); /* Logika ganti bahasa */ }, current: 'Indonesia', icon: <Languages className="h-4 w-4 text-gray-400 mr-2" />, hasChevron: true },
      ],
    },
    {
      title: 'Privasi & Keamanan',
      icon: <ShieldCheck className="h-5 w-5 text-red-500" />,
      items: [
        { label: 'Ubah Password', action: () => { console.log('Navigasi ke Ubah Password'); /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Kelola Perangkat Terhubung', action: () => { console.log('Navigasi ke Kelola Perangkat'); /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Kebijakan Privasi', action: () => navigate('/syarat-ketentuan'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
      ],
    },
    {
      title: 'Bantuan & Dukungan',
      icon: <HelpCircle className="h-5 w-5 text-purple-500" />,
      items: [
        { label: 'Pusat Bantuan (FAQ)', action: () => navigate('/tentang#faq'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Hubungi Kami', action: () => navigate('/tentang#kontak'), icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
        { label: 'Laporkan Masalah', action: () => { console.log('Navigasi ke Laporkan Masalah'); /* Logika navigasi atau modal */ }, icon: <ChevronRight className="h-4 w-4 text-gray-400" /> },
      ],
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">Pengaturan</h1>

        <div className="space-y-8">
          {settingsSections.map((section, sectionIdx) => (
            <Card key={sectionIdx} className="overflow-hidden bg-card text-card-foreground">
              <CardHeader className="bg-muted/50 dark:bg-gray-800/50 p-4 border-b border-border">
                <div className="flex items-center space-x-3">
                  <span className="p-2 bg-background dark:bg-gray-700 rounded-full shadow-sm">{section.icon}</span>
                  <CardTitle className="text-xl text-foreground">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-border">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className={`flex items-center justify-between p-4 ${item.action ? 'hover:bg-accent/50 dark:hover:bg-gray-700/50 cursor-pointer transition-colors' : ''}`}
                      onClick={item.action}
                      role={item.action ? "button" : undefined}
                      tabIndex={item.action ? 0 : undefined}
                      onKeyDown={item.action ? (e) => { if (e.key === 'Enter' || e.key === ' ') item.action?.(); } : undefined}
                    >
                      <div className="flex items-center">
                        {item.icon && !item.action && !item.hasChevron && item.icon}
                        {item.icon && (item.action || item.hasChevron) && React.isValidElement(item.icon) && React.cloneElement(item.icon as React.ReactElement, {className: `h-4 w-4 ${item.action || item.hasChevron ? 'text-gray-500 dark:text-gray-400' : ''} mr-3`})}

                        <Label htmlFor={item.control ? (item.control as React.ReactElement).props.id : undefined} className="text-base text-foreground">
                          {item.label}
                        </Label>
                      </div>
                      {item.control ? (
                        item.control
                      ) : item.action || item.hasChevron ? (
                        <div className="flex items-center">
                          {item.current && <span className="text-sm text-muted-foreground mr-2">{item.current}</span>}
                          {item.icon && (item.action || item.hasChevron) && React.isValidElement(item.icon) && (item.action || item.hasChevron) ? React.cloneElement(item.icon as React.ReactElement, {className: "h-5 w-5 text-gray-400"}) : <ChevronRight className="h-5 w-5 text-gray-400" />}
                        </div>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="overflow-hidden bg-card">
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
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Ganti nama import jika Sonner sudah ada
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
import SettingsPage from "./pages/Settings";
import { ThemeProvider } from './components/layout/ThemeProvider';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider> {/* Bungkus dengan ThemeProvider */}
      <TooltipProvider>
        <Toaster />
        <SonnerToaster /> {/* Gunakan nama import yang sudah diganti */}
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
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/syarat-ketentuan" element={<div>Halaman Syarat & Ketentuan</div>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
```ts
