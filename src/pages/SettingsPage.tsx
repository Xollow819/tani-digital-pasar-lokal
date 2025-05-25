// src/pages/SettingsPage.tsx
import React from "react";
import { useTheme } from "next-themes";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label }
from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const isDarkMode = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/home">Beranda</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <span>Pengaturan</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="text-3xl font-bold mb-8">Pengaturan</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Navigasi Pengaturan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Profil
                </Button>
                <Button variant="secondary" className="w-full justify-start bg-tani-light-green text-tani-green">
                  Tampilan
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Notifikasi
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Privasi & Keamanan
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Bahasa
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Pengaturan Tampilan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <Label htmlFor="theme-switch" className="text-base font-medium">
                      Mode Gelap
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Aktifkan untuk tampilan yang lebih nyaman di malam hari.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Sun className={`mr-2 h-5 w-5 text-yellow-500 transition-opacity ${isDarkMode ? "opacity-50" : "opacity-100"}`} />
                    <Switch
                      id="theme-switch"
                      checked={isDarkMode}
                      onCheckedChange={toggleTheme}
                      aria-label="Switch tema gelap"
                    />
                    <Moon className={`ml-2 h-5 w-5 text-blue-500 transition-opacity ${isDarkMode ? "opacity-100" : "opacity-50"}`} />
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <Label className="text-base font-medium">Ukuran Font (Segera Hadir)</Label>
                  <p className="text-sm text-muted-foreground mb-3">
                    Sesuaikan ukuran teks di seluruh aplikasi.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" disabled>Kecil</Button>
                    <Button variant="default" size="sm" disabled className="bg-tani-green opacity-50">Normal</Button>
                    <Button variant="outline" size="sm" disabled>Besar</Button>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg">
                   <Label className="text-base font-medium">Bahasa (Segera Hadir)</Label>
                   <p className="text-sm text-muted-foreground mb-3">
                     Pilih bahasa tampilan aplikasi.
                   </p>
                   <Button variant="outline" disabled>Bahasa Indonesia</Button>
                 </div>

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SettingsPage;
