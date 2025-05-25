
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
    thumbnail: "https://img.youtube.com/vi/RTvWpWsyD5Y/maxresdefault.jpg",
    duration: "10:32",
    creator: "Kebun Kita TV",
    views: 425000,
    videoUrl: "https://www.youtube.com/embed/RTvWpWsyD5Y"
  },
  {
    id: 2,
    title: "Tutorial Hidroponik untuk Pemula",
    thumbnail: "https://img.youtube.com/vi/HGU85tkV2y8/maxresdefault.jpg",
    duration: "15:45",
    creator: "Tani Cerdas",
    views: 312000,
    videoUrl: "https://www.youtube.com/embed/HGU85tkV2y8"
  },
  {
    id: 3,
    title: "Teknik Pemupukan yang Benar untuk Tanaman",
    thumbnail: "https://img.youtube.com/vi/4XmA7b0_FfA/maxresdefault.jpg",
    duration: "12:18",
    creator: "Petani Milenial",
    views: 198000,
    videoUrl: "https://www.youtube.com/embed/4XmA7b0_FfA"
  },
  {
    id: 4,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://img.youtube.com/vi/Z8q8VYV8iQs/maxresdefault.jpg",
    duration: "14:25",
    creator: "Organik Indonesia",
    views: 267000,
    videoUrl: "https://www.youtube.com/embed/Z8q8VYV8iQs"
  },
  {
    id: 5,
    title: "Cara Menanam Cabai yang Menguntungkan",
    thumbnail: "https://img.youtube.com/vi/u_vJW8XaJuM/maxresdefault.jpg",
    duration: "18:42",
    creator: "Agrobisnis Modern",
    views: 389000,
    videoUrl: "https://www.youtube.com/embed/u_vJW8XaJuM"
  },
  {
    id: 6,
    title: "Budidaya Jamur Tiram di Rumah",
    thumbnail: "https://img.youtube.com/vi/gNbdqGcMUGE/maxresdefault.jpg",
    duration: "16:33",
    creator: "Jamur Organik",
    views: 156000,
    videoUrl: "https://www.youtube.com/embed/gNbdqGcMUGE"
  }
];
