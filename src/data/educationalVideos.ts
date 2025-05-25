
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
    thumbnail: "https://img.youtube.com/vi/YoGGbx_7JN8/maxresdefault.jpg",
    duration: "16:45",
    creator: "Kebun Kita Channel",
    views: 340000,
    videoUrl: "https://www.youtube.com/embed/YoGGbx_7JN8"
  },
  {
    id: 2,
    title: "Tutorial Hidroponik untuk Pemula",
    thumbnail: "https://img.youtube.com/vi/1uaAgF_QSUA/maxresdefault.jpg",
    duration: "22:15",
    creator: "Tani Pintar",
    views: 285000,
    videoUrl: "https://www.youtube.com/embed/1uaAgF_QSUA"
  },
  {
    id: 3,
    title: "Teknik Pemupukan yang Benar untuk Tanaman",
    thumbnail: "https://img.youtube.com/vi/tKOVF_9ZLkA/maxresdefault.jpg",
    duration: "18:30",
    creator: "Agri Channel",
    views: 195000,
    videoUrl: "https://www.youtube.com/embed/tKOVF_9ZLkA"
  },
  {
    id: 4,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://img.youtube.com/vi/8GlXJTf8O6w/maxresdefault.jpg",
    duration: "14:20",
    creator: "Tani Organik ID",
    views: 225000,
    videoUrl: "https://www.youtube.com/embed/8GlXJTf8O6w"
  },
  {
    id: 5,
    title: "Cara Menanam Cabai yang Menguntungkan",
    thumbnail: "https://img.youtube.com/vi/XQ0WkZhLwKg/maxresdefault.jpg",
    duration: "25:40",
    creator: "Petani Sukses",
    views: 420000,
    videoUrl: "https://www.youtube.com/embed/XQ0WkZhLwKg"
  },
  {
    id: 6,
    title: "Budidaya Jamur Tiram di Rumah",
    thumbnail: "https://img.youtube.com/vi/ZVH2QHJcHsQ/maxresdefault.jpg",
    duration: "19:25",
    creator: "Jamur Praktis",
    views: 158000,
    videoUrl: "https://www.youtube.com/embed/ZVH2QHJcHsQ"
  }
];
