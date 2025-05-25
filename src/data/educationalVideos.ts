
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
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "3:32",
    creator: "RickAstleyVEVO",
    views: 1400000000,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Tutorial Hidroponik untuk Pemula",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    duration: "7:33",
    creator: "Gangnam Style",
    views: 4800000000,
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0"
  },
  {
    id: 3,
    title: "Teknik Pemupukan yang Benar untuk Tanaman",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg",
    duration: "3:36",
    creator: "Luis Fonsi",
    views: 8100000000,
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk"
  },
  {
    id: 4,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://img.youtube.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
    duration: "4:20",
    creator: "Ed Sheeran",
    views: 5500000000,
    videoUrl: "https://www.youtube.com/embed/JGwWNGJdvx8"
  },
  {
    id: 5,
    title: "Cara Menanam Cabai yang Menguntungkan",
    thumbnail: "https://img.youtube.com/vi/YQHsXMglC9A/maxresdefault.jpg",
    duration: "3:31",
    creator: "Adele",
    views: 3200000000,
    videoUrl: "https://www.youtube.com/embed/YQHsXMglC9A"
  },
  {
    id: 6,
    title: "Budidaya Jamur Tiram di Rumah",
    thumbnail: "https://img.youtube.com/vi/fJ9rUzIMcZQ/maxresdefault.jpg",
    duration: "4:04",
    creator: "Queen Official",
    views: 1800000000,
    videoUrl: "https://www.youtube.com/embed/fJ9rUzIMcZQ"
  }
];
