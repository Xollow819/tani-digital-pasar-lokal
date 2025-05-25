
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Truck, CheckCircle, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  seller: string;
  trackingNumber?: string;
}

const OrdersPage = () => {
  const orders: Order[] = [
    {
      id: "ORD-001",
      date: "15 Mei 2025",
      status: "delivered",
      total: 120000,
      seller: "Tani Makmur",
      trackingNumber: "TRK123456789",
      items: [
        {
          id: 1,
          name: "Bibit Sayuran Organik Premium",
          price: 30000,
          quantity: 2,
          image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
          id: 2,
          name: "Pupuk Kompos Organik",
          price: 60000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "ORD-002",
      date: "10 Mei 2025",
      status: "shipped",
      total: 85000,
      seller: "Kebun Subur",
      trackingNumber: "TRK987654321",
      items: [
        {
          id: 3,
          name: "Alat Semprot Hama",
          price: 85000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    },
    {
      id: "ORD-003",
      date: "5 Mei 2025",
      status: "processing",
      total: 150000,
      seller: "Tani Modern",
      items: [
        {
          id: 4,
          name: "Set Alat Berkebun Lengkap",
          price: 150000,
          quantity: 1,
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        }
      ]
    }
  ];

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />;
      case "processing":
        return <Package className="h-4 w-4" />;
      case "shipped":
        return <Truck className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusText = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "Menunggu Konfirmasi";
      case "processing":
        return "Sedang Diproses";
      case "shipped":
        return "Dalam Pengiriman";
      case "delivered":
        return "Selesai";
      case "cancelled":
        return "Dibatalkan";
      default:
        return "Unknown";
    }
  };

  const getStatusVariant = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "default";
      case "shipped":
        return "secondary";
      case "processing":
        return "outline";
      case "pending":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "outline";
    }
  };

  const filterOrdersByStatus = (status: Order["status"] | "all") => {
    if (status === "all") return orders;
    return orders.filter(order => order.status === status);
  };

  const OrderCard = ({ order }: { order: Order }) => (
    <Card className="mb-4">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{order.id}</CardTitle>
            <p className="text-sm text-gray-600">{order.date}</p>
            <p className="text-sm text-gray-600">Penjual: {order.seller}</p>
          </div>
          <Badge variant={getStatusVariant(order.status)} className="flex items-center gap-1">
            {getStatusIcon(order.status)}
            {getStatusText(order.status)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="font-medium text-sm">{item.name}</h4>
                <p className="text-xs text-gray-600">
                  {item.quantity}x - Rp {item.price.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {order.trackingNumber && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <p className="text-sm font-medium">Nomor Resi: {order.trackingNumber}</p>
          </div>
        )}

        <div className="flex justify-between items-center mt-4 pt-3 border-t">
          <div>
            <p className="font-bold text-lg text-tani-green">
              Total: Rp {order.total.toLocaleString('id-ID')}
            </p>
          </div>
          <div className="flex space-x-2">
            {order.status === "delivered" && (
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Beri Ulasan
              </Button>
            )}
            <Button size="sm" variant="outline" asChild>
              <Link to={`/orders/${order.id}`}>Detail</Link>
            </Button>
            {order.status === "shipped" && (
              <Button size="sm" className="bg-tani-green hover:bg-tani-green/90">
                Lacak Paket
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Pesanan Saya</h1>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">Semua</TabsTrigger>
            <TabsTrigger value="pending">Menunggu</TabsTrigger>
            <TabsTrigger value="processing">Diproses</TabsTrigger>
            <TabsTrigger value="shipped">Dikirim</TabsTrigger>
            <TabsTrigger value="delivered">Selesai</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <Package className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada pesanan</h3>
                  <p className="text-gray-600 mb-6">Mulai berbelanja untuk melihat pesanan Anda di sini</p>
                  <Button asChild className="bg-tani-green hover:bg-tani-green/90">
                    <Link to="/marketplace">Mulai Berbelanja</Link>
                  </Button>
                </div>
              ) : (
                orders.map((order) => <OrderCard key={order.id} order={order} />)
              )}
            </div>
          </TabsContent>

          <TabsContent value="pending" className="mt-6">
            <div className="space-y-4">
              {filterOrdersByStatus("pending").map((order) => <OrderCard key={order.id} order={order} />)}
            </div>
          </TabsContent>

          <TabsContent value="processing" className="mt-6">
            <div className="space-y-4">
              {filterOrdersByStatus("processing").map((order) => <OrderCard key={order.id} order={order} />)}
            </div>
          </TabsContent>

          <TabsContent value="shipped" className="mt-6">
            <div className="space-y-4">
              {filterOrdersByStatus("shipped").map((order) => <OrderCard key={order.id} order={order} />)}
            </div>
          </TabsContent>

          <TabsContent value="delivered" className="mt-6">
            <div className="space-y-4">
              {filterOrdersByStatus("delivered").map((order) => <OrderCard key={order.id} order={order} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default OrdersPage;
