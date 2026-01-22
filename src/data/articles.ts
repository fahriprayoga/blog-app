import imageMie from "@/assets/images/articles/mie instan.jpeg";
import ArticleMie from "@/components/articles/ArticleMie.vue";
import imageTenun from "@/assets/images/articles/tenun.jpeg";
import ArticleTenun from "@/components/articles/ArticleTenun.vue";
import imageKomputer from "@/assets/images/articles/komputer.png";
import ArticleInternet from "@/components/articles/ArticleInternet.vue";
import imageAI from "@/assets/images/articles/ai.png";
import ArticleAI from "@/components/articles/ArticleAI.vue";
import imageLaravel from "@/assets/images/articles/laravel.png";
import ArticleLaravel from "@/components/articles/ArticleLaravel.vue";

import { markRaw } from "vue";

export const articles = [
  {
    id: 1,
    title: "Internet",
    category: "Teknologi",
    component: markRaw(ArticleInternet),
    content:
      "Ini adalah materi presentasi yang dibuat oleh kami terkait dengan sejarah internet dan perkembangannya hingga saat ini.",
    author: "Kelompok 1",
    image: imageKomputer,
    date: "19 Januari 2026",
  },
  {
    id: 2,
    title:
      "Tenun Suku Sasak: Makna Filosofis dan Upaya Pelestarian di Tengah Modernisasi",
    category: "Budaya",
    component: markRaw(ArticleTenun),
    content:
      "Keindahan dan keunikan Tenun Sasak sebagai warisan budaya tak benda, khususnya tenun ikat yang terkenal seperti Songket dan Bebed (kain ikat)",
    author: "Kelompok 1",
    image: imageTenun,
    date: "20 Januari 2026",
  },
  {
    id: 3,
    title:
      "Mie Instan: Solusi Lapar, Komfort dalam Kemasan, dan Dinamika Rasanya yang Tak Terlupakan",
    category: "Kuliner",
    component: markRaw(ArticleMie),
    content:
      "Mie instan bukan hanya sebagai makanan, tetapi sebagai fenomena budaya, memori kolektif, dan penanda zaman",
    author: "Kelompok 1",
    image: imageMie,
    date: "21 Januari 2026",
  },
  {
    id: 4,
    title: "Artificial Intelligence: Menembus Batas Imajinasi Manusia",
    category: "Teknologi",
    component: markRaw(ArticleAI),
    content:
      "Menjelajahi bagaimana kecerdasan buatan berevolusi dari sekadar kode program menjadi mitra kreatif manusia di era digital.",
    author: "Kelompok 1",
    image: imageAI, // Pastikan sudah import gambar AI
    date: "22 Januari 2026",
  },
  {
    id: 5,
    title: "Laravel: Seni Membangun Aplikasi Web Modern",
    category: "Teknologi",
    component: markRaw(ArticleLaravel),
    content:
      "Mengenal ekosistem Laravel yang elegan, produktif, dan bagaimana ia mengubah cara developer PHP membangun sistem yang kompleks.",
    author: "Kelompok 1",
    image: imageLaravel, // Ganti dengan path gambar Laravel Anda
    date: "22 Januari 2026",
  },
];

export const getArticleById = (id: string | number) => {
  return articles.find((article) => article.id === Number(id));
};
