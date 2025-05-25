
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
    thumbnail: "https://img.youtube.com/vi/o7OPXRy6U3Y/maxresdefault.jpg",
    duration: "15:24",
    creator: "Pak Tani Digital",
    views: 125000,
    videoUrl: "https://www.youtube.com/embed/o7OPXRy6U3Y"
  },
  {
    id: 2,
    title: "Tutorial Hidroponik untuk Pemula",
    thumbnail: "https://img.youtube.com/vi/YT8s4fKDPbw/maxresdefault.jpg",
    duration: "18:32",
    creator: "Hidroponik Praktis",
    views: 89000,
    videoUrl: "https://www.youtube.com/embed/YT8s4fKDPbw"
  },
  {
    id: 3,
    title: "Teknik Pemupukan yang Benar untuk Tanaman",
    thumbnail: "https://img.youtube.com/vi/sNFBLMl2klU/maxresdefault.jpg",
    duration: "12:45",
    creator: "Tani Modern",
    views: 67000,
    videoUrl: "https://www.youtube.com/embed/sNFBLMl2klU"
  },
  {
    id: 4,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://img.youtube.com/vi/9Auq9mYxFEE/maxresdefault.jpg",
    duration: "14:18",
    creator: "Kebun Organik",
    views: 143000,
    videoUrl: "https://www.youtube.com/embed/9Auq9mYxFEE"
  },
  {
    id: 5,
    title: "Cara Menanam Cabai yang Menguntungkan",
    thumbnail: "https://img.youtube.com/vi/rCvL_FomGn0/maxresdefault.jpg",
    duration: "22:15",
    creator: "Agribisnis Sukses",
    views: 98000,
    videoUrl: "https://www.youtube.com/embed/rCvL_FomGn0"
  },
  {
    id: 6,
    title: "Budidaya Jamur Tiram di Rumah",
    thumbnail: "https://img.youtube.com/vi/bSF5rhkNa8g/maxresdefault.jpg",
    duration: "16:42",
    creator: "Jamur Indonesia",
    views: 75000,
    videoUrl: "https://www.youtube.com/embed/bSF5rhkNa8g"
  }
];
