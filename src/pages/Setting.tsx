// src/pages/Setting.tsx
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
// Mengubah path impor ke path relatif untuk mengatasi masalah resolusi alias
import { useTheme } from '../components/layout/ThemeProvider'; 
import { Sun, Moon, ChevronRight, UserCircle2, Bell, Palette, ShieldCheck, HelpCircle, LogOut, Languages, Info } from 'lucide-react';

// Definisikan tipe untuk item menu pengaturan
interface SettingsItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description?: string;
  actionType: 'navigation' | 'toggle' | 'button';
  onClick?: () => void;
  navigateTo?: string; // Untuk navigasi jika diperlukan di masa mendatang
}

const SettingPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen sudah ter-mount sebelum mengakses theme dari localStorage
  // Ini untuk menghindari hydration mismatch antara server dan client
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (isDark: boolean) => {
    setTheme(isDark ? 'dark' : 'light');
  };

  const settingsSections: { title: string; items: SettingsItem[] }[] = [
    {
      title: 'Akun',
      items: [
        { id: 'profile', icon: UserCircle2, title: 'Profil Saya', description: 'Atur detail profil Anda', actionType: 'navigation', navigateTo: '/profile' },
        { id: 'security', icon: ShieldCheck, title: 'Keamanan Akun', description: 'Ubah kata sandi, verifikasi dua langkah', actionType: 'navigation' },
      ],
    },
    {
      title: 'Tampilan & Preferensi',
      items: [
        {
          id: 'theme',
          icon: Palette,
          title: 'Mode Tampilan',
          description: theme === 'dark' ? 'Gelap' : 'Terang',
          actionType: 'toggle',
        },
        { id: 'language', icon: Languages, title: 'Bahasa', description: 'Pilih bahasa aplikasi', actionType: 'navigation' },
        { id: 'notifications', icon: Bell, title: 'Notifikasi', description: 'Atur preferensi notifikasi', actionType: 'navigation' },
      ],
    },
    {
      title: 'Bantuan & Dukungan',
      items: [
        { id: 'help-center', icon: HelpCircle, title: 'Pusat Bantuan', description: 'Temukan jawaban atas pertanyaan Anda', actionType: 'navigation' },
        { id: 'about', icon: Info, title: 'Tentang Aplikasi', description: 'Versi aplikasi dan informasi lainnya', actionType: 'navigation' },
      ],
    },
  ];

  if (!mounted) {
    // Bisa diganti dengan skeleton loader jika diinginkan
    return <div className="p-4 md:p-6 lg:p-8"><h1 className="text-2xl font-bold mb-6">Memuat Pengaturan...</h1></div>;
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6 lg:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Pengaturan</h1>
        <p className="text-muted-foreground">Kelola preferensi akun dan aplikasi Anda.</p>
      </header>

      <div className="space-y-8">
        {settingsSections.map((section) => (
          <Card key={section.title} className="overflow-hidden rounded-lg shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {section.items.map((item) => (
                  <li key={item.id} className="px-6 py-4">
                    <button
                      onClick={item.onClick || (() => {
                        if (item.navigateTo) console.log(`Navigasi ke: ${item.navigateTo}`);
                        // Implementasi navigasi bisa ditambahkan di sini jika menggunakan router
                      })}
                      className={`w-full flex items-center justify-between text-left ${item.actionType !== 'toggle' ? 'hover:bg-muted/50 transition-colors rounded-md -mx-2 px-2 py-1' : ''}`}
                      disabled={item.actionType === 'toggle' && item.id !== 'theme'} // Nonaktifkan klik jika bukan toggle tema
                    >
                      <div className="flex items-center space-x-4">
                        <item.icon className="h-6 w-6 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{item.title}</p>
                          {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                        </div>
                      </div>
                      {item.actionType === 'navigation' && <ChevronRight className="h-5 w-5 text-muted-foreground" />}
                      {item.id === 'theme' && item.actionType === 'toggle' && (
                        <div className="flex items-center space-x-2">
                          <Sun className={`h-5 w-5 transition-colors ${theme === 'light' ? 'text-yellow-500' : 'text-muted-foreground'}`} />
                          <Switch
                            id="theme-switch"
                            checked={theme === 'dark'}
                            onCheckedChange={handleThemeChange}
                            aria-label="Ganti mode tampilan"
                          />
                          <Moon className={`h-5 w-5 transition-colors ${theme === 'dark' ? 'text-blue-400' : 'text-muted-foreground'}`} />
                        </div>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}

        <Card className="overflow-hidden rounded-lg shadow-sm">
            <CardContent className="p-0">
                 <ul>
                    <li className="px-6 py-4">
                        <Button variant="ghost" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 p-0">
                             <div className="flex items-center space-x-4 px-2 py-1">
                                <LogOut className="h-6 w-6" />
                                <span>Keluar</span>
                            </div>
                        </Button>
                    </li>
                 </ul>
            </CardContent>
        </Card>
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Tani Digital Pasar Lokal v1.0.0</p>
      </footer>
    </div>
  );
};

export default SettingPage;
