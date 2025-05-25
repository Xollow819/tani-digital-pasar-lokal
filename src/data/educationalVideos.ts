
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
    title: "Teknik Hidroponik untuk Pemula",
    thumbnail: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "12:45",
    creator: "Dr. Agus Budiman",
    views: 15600,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Mengatasi Hama Tanaman Secara Alami",
    thumbnail: "https://images.unsplash.com/photo-1566045638967-51a1b087be69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "18:22",
    creator: "Tani Mandiri",
    views: 8900,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "Budidaya Sayuran Organik",
    thumbnail: "https://images.unsplash.com/photo-1528359645462-5ff231885278?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "21:10",
    creator: "Pertanian Maju",
    views: 12400,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
