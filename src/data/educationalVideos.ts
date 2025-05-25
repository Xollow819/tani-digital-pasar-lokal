
export interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  creator: string;
  views: number;
  videoUrl: string;
}

export const educationalVideos: Video[] = [
  {
    id: 1,
    title: "Cara Menanam Hidroponik Sederhana di Rumah",
    thumbnail: "https://img.youtube.com/vi/ZSuTDI8eR8k/maxresdefault.jpg",
    duration: "15:32",
    creator: "Kebun Hidroponik",
    views: 245000,
    videoUrl: "https://www.youtube.com/embed/ZSuTDI8eR8k"
  },
  {
    id: 2,
    title: "Budidaya Sayuran Organik Untuk Pemula",
    thumbnail: "https://img.youtube.com/vi/4VY2_m5NFQE/maxresdefault.jpg",
    duration: "22:15",
    creator: "Tani Organik Indonesia",
    views: 156000,
    videoUrl: "https://www.youtube.com/embed/4VY2_m5NFQE"
  },
  {
    id: 3,
    title: "Teknik Pemupukan yang Benar untuk Tanaman",
    thumbnail: "https://img.youtube.com/vi/n7iEKBh5WxY/maxresdefault.jpg",
    duration: "18:45",
    creator: "Pertanian Modern",
    views: 89000,
    videoUrl: "https://www.youtube.com/embed/n7iEKBh5WxY"
  },
  {
    id: 4,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://img.youtube.com/vi/7xgw-qzF8Ro/maxresdefault.jpg",
    duration: "16:20",
    creator: "Tani Sehat",
    views: 134000,
    videoUrl: "https://www.youtube.com/embed/7xgw-qzF8Ro"
  },
  {
    id: 5,
    title: "Cara Menanam Cabai yang Menguntungkan",
    thumbnail: "https://img.youtube.com/vi/Sx4lxKl1TgI/maxresdefault.jpg",
    duration: "25:10",
    creator: "Agro Bisnis",
    views: 198000,
    videoUrl: "https://www.youtube.com/embed/Sx4lxKl1TgI"
  },
  {
    id: 6,
    title: "Budidaya Jamur Tiram di Rumah",
    thumbnail: "https://img.youtube.com/vi/rVd4KL8YqGo/maxresdefault.jpg",
    duration: "19:55",
    creator: "Jamur Nusantara",
    views: 167000,
    videoUrl: "https://www.youtube.com/embed/rVd4KL8YqGo"
  }
];
