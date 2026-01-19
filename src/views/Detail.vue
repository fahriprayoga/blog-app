<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Article } from "../types/article";
import { articles } from "../data/articles";

import Heading from "@/components/article/Heading.vue";
import Meta from "@/components/article/Meta.vue";
import Image from "@/components/article/Image.vue";
import Paragraph from "@/components/article/Paragraph.vue";

const route = useRoute();
const id = Number(route.params.id);

const article: Article | undefined = articles.find((a) => a.id === id);
</script>

<template>
  <section v-if="article" class="max-w-3xl mx-auto px-4 py-10">
    <Heading :level="2"> {{ article.title }} </Heading>
    <Meta :date="article.date" />
    <Image
      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      :alt="article.title"
      class="my-6"
    />

    <Paragraph class="text-justify">
      Vue 3 merupakan salah satu framework JavaScript yang banyak digunakan
      dalam pengembangan aplikasi web modern. Framework ini dirancang untuk
      mempermudah pengembang dalam membangun antarmuka pengguna yang interaktif,
      terstruktur, dan mudah dipelihara.
    </Paragraph>

    <Paragraph class="text-justify">
      Salah satu keunggulan utama Vue 3 adalah konsep component-based. Dengan
      konsep ini, tampilan website dapat dibagi menjadi beberapa komponen kecil
      yang dapat digunakan kembali. Hal ini membuat kode lebih rapi dan efisien,
      terutama untuk proyek berskala menengah hingga besar.
    </Paragraph>
    <Paragraph class="text-justify">
      Selain itu, Vue 3 juga memperkenalkan Composition API yang memberikan
      fleksibilitas lebih dalam mengelola logika aplikasi. Dibandingkan dengan
      pendekatan sebelumnya, Composition API memudahkan pengembang dalam
      mengorganisir kode berdasarkan fungsinya, bukan berdasarkan opsi.
    </Paragraph>
    <Paragraph class="text-justify">
      Dalam pengembangan website, Vue 3 sering dipadukan dengan berbagai
      teknologi pendukung seperti Vue Router untuk navigasi halaman dan Tailwind
      CSS untuk styling. Kombinasi ini membantu pengembang menciptakan aplikasi
      web yang cepat, responsif, dan mudah dikembangkan.
    </Paragraph>
    <Paragraph class="text-justify">
      Dengan mempelajari Vue 3, mahasiswa dan pengembang pemula dapat memahami
      konsep dasar pengembangan frontend modern sekaligus mempersiapkan diri
      untuk menghadapi kebutuhan industri teknologi saat ini.
    </Paragraph>
  </section>
</template>
