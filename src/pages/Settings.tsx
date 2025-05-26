
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { User, Bell, Shield, CreditCard, Globe, Smartphone, Mail, Lock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true,
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showOnlineStatus: false,
    allowMessages: true,
  });

  const handleSave = () => {
    toast({
      title: "Pengaturan Disimpan",
      description: "Semua perubahan pengaturan telah berhasil disimpan.",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pengaturan</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Kelola pengaturan akun dan preferensi Anda di IPINI
          </p>
        </div>

        <div className="space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profil Pengguna
              </CardTitle>
              <CardDescription>
                Ubah informasi profil dan data pribadi Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nama Depan</Label>
                  <Input id="firstName" defaultValue="Tani" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nama Belakang</Label>
                  <Input id="lastName" defaultValue="Digital" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="tani@ipini.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Nomor Telepon</Label>
                <Input id="phone" defaultValue="+62 812 3456 7890" />
              </div>
              <Button onClick={handleSave}>Simpan Perubahan</Button>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Tampilan & Tema
              </CardTitle>
              <CardDescription>
                Sesuaikan tema dan tampilan aplikasi
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Mode Tema</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pilih tema terang, gelap, atau ikuti sistem
                  </p>
                </div>
                <ThemeToggle />
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifikasi
              </CardTitle>
              <CardDescription>
                Atur preferensi notifikasi Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notifikasi Email</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Terima notifikasi melalui email
                  </p>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notifikasi Push</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Terima notifikasi push di browser
                  </p>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, push: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Notifikasi SMS</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Terima notifikasi melalui SMS
                  </p>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, sms: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Marketing</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Terima info promo dan update produk
                  </p>
                </div>
                <Switch
                  checked={notifications.marketing}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, marketing: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>

          {/* Privacy Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Privasi & Keamanan
              </CardTitle>
              <CardDescription>
                Kontrol privasi dan keamanan akun Anda
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Profil Publik</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tampilkan profil Anda kepada pengguna lain
                  </p>
                </div>
                <Switch
                  checked={privacy.profileVisible}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, profileVisible: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Status Online</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tampilkan status online Anda
                  </p>
                </div>
                <Switch
                  checked={privacy.showOnlineStatus}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, showOnlineStatus: checked })
                  }
                />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Pesan dari Orang Lain</Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Izinkan pengguna lain mengirim pesan
                  </p>
                </div>
                <Switch
                  checked={privacy.allowMessages}
                  onCheckedChange={(checked) =>
                    setPrivacy({ ...privacy, allowMessages: checked })
                  }
                />
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Lock className="h-4 w-4 mr-2" />
                  Ubah Password
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Pembayaran & Tagihan
              </CardTitle>
              <CardDescription>
                Kelola metode pembayaran dan riwayat tagihan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium">**** **** **** 4242</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              <Button variant="outline" className="w-full">
                Tambah Metode Pembayaran
              </Button>
              <Button variant="outline" className="w-full">
                Lihat Riwayat Tagihan
              </Button>
            </CardContent>
          </Card>

          {/* Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Bantuan & Dukungan
              </CardTitle>
              <CardDescription>
                Dapatkan bantuan dan hubungi tim support
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="h-4 w-4 mr-2" />
                Hubungi Support
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="h-4 w-4 mr-2" />
                Panduan Penggunaan
              </Button>
              <Button variant="outline" className="w-full justify-start">
                FAQ & Pertanyaan Umum
              </Button>
            </CardContent>
          </Card>

          {/* Save All Changes */}
          <div className="flex justify-end pt-6">
            <Button onClick={handleSave} size="lg">
              Simpan Semua Perubahan
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
