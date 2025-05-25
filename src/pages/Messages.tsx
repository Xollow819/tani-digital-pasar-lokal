// src/pages/Messages.tsx
import React from 'react'; // Ditambahkan
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, ShoppingCart, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SystemMessage {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
  read: boolean;
  type: "order" | "info" | "promo";
}

const dummySystemMessages: SystemMessage[] = [
  {
    id: "msg001",
    title: "Pesanan Diterima Penjual",
    description: "Pesanan Anda #ORD-001 untuk Bibit Sayuran Organik telah diterima oleh penjual Tani Makmur.",
    date: "25 Mei 2025, 10:05",
    icon: <ShoppingCart className="h-5 w-5 text-blue-500" />,
    read: false,
    type: "order",
  },
  {
    id: "msg002",
    title: "Pesanan Diproses",
    description: "Pesanan Anda #ORD-001 sedang disiapkan oleh penjual.",
    date: "25 Mei 2025, 11:30",
    icon: <ShoppingCart className="h-5 w-5 text-yellow-500" />,
    read: false,
    type: "order",
  },
  {
    id: "msg003",
    title: "Selamat Datang di IPINI!",
    description: "Terima kasih telah bergabung dengan platform kami. Jelajahi marketplace dan fitur edukasi kami.",
    date: "24 Mei 2025, 15:00",
    icon: <Bell className="h-5 w-5 text-green-500" />,
    read: true,
    type: "info",
  },
  {
    id: "msg004",
    title: "Pesanan Terkirim",
    description: "Pesanan Anda #ORD-002 (Alat Semprot Hama) telah dikirim dengan nomor resi TRK987654321.",
    date: "11 Mei 2025, 09:00",
    icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    read: true,
    type: "order",
  }
];

const MessagesPage = () => {
  // Di aplikasi nyata, ini akan berasal dari state atau API
  const [messages, setMessages] = React.useState<SystemMessage[]>(dummySystemMessages);

  const markAsRead = (id: string) => {
    setMessages(prevMessages =>
      prevMessages.map(msg =>
        msg.id === id ? { ...msg, read: true } : msg
      )
    );
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Pesan & Notifikasi</h1>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="text-sm">
              {unreadCount} Belum Dibaca
            </Badge>
          )}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notifikasi Sistem</CardTitle>
          </CardHeader>
          <CardContent>
            {messages.length === 0 ? (
              <p className="text-gray-500">Tidak ada pesan atau notifikasi baru.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 border rounded-lg flex items-start space-x-4 transition-colors ${
                      msg.read ? 'bg-gray-50 opacity-70' : 'bg-white hover:bg-gray-50 cursor-pointer'
                    }`}
                    onClick={() => !msg.read && markAsRead(msg.id)}
                  >
                    <div className="flex-shrink-0 mt-1">{msg.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className={`font-semibold ${!msg.read ? 'text-gray-800' : 'text-gray-600'}`}>{msg.title}</h3>
                        {!msg.read && (
                           <span className="w-2 h-2 bg-tani-green rounded-full"></span>
                        )}
                      </div>
                      <p className={`text-sm ${!msg.read ? 'text-gray-700' : 'text-gray-500'}`}>{msg.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{msg.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MessagesPage;
