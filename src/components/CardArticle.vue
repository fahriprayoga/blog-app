<script setup lang="ts">
import type { Article } from "../types/article";

defineProps<{
  article: Article;
  first?: boolean;
}>();
</script>

<template>
  <RouterLink :to="`/article/${article.id}`" class="block h-full">
    <div v-if="first" class="flex gap-8">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="article"
        class="w-1/2 object-cover rounded-2xl block aspect-video"
      />
      <div>
        <div class="p-5">
          <div
            class="flex flex-wrap w-fit bg-blue-100/50 gap-2 text-xs tracking-wide items-center justify-between px-2 rounded-full py-2"
          >
            <span
              class="font-semibold bg-blue-500 text-slate-50 py-1.5 px-4 rounded-full flex items-center justify-center"
              >Materi</span
            >
            <span class="font-semibold tracking-wide text-slate-500 px-2"
              >kelompok 1</span
            >
          </div>

          <h3
            class="mt-4 text-5xl font-semibold tracking-wide text-slate-900 line-clamp-2"
          >
            Internet
          </h3>

          <p
            class="mt-4 font-medium text-sm text-slate-700/75 tracking-wide line-clamp-3"
          >
            judul presentasi yang kami ambil, berisi tentang pengertian
            internet, sejarah internet, jenis jenis internet, fungsi internet,
            dan manfaat internet.
          </p>

          <div
            class="mt-4 text-sm font-semibold tracking-wider rounded-full bg-violet-50 text-blue-500"
          >
            Baca Selengkapnya
          </div>
        </div>
      </div>
    </div>
    <div
      v-else
      class="h-full card-elevated p-4 rounded-2xl hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="article"
        class="h-52 w-full object-cover rounded-2xl block aspect-video"
      />

      <div class="p-5">
        <div
          class="flex flex-wrap text-xs w-full gap-2 capitalize items-center justify-between"
        >
          <span class="font-semibold text-yellow-600 tracking-wide">{{
            article.category
          }}</span>
        </div>

        <h3 class="mt-2 text-lg font-semibold text-slate-900 line-clamp-2">
          {{ article.title }}
        </h3>

        <p class="mt-2 text-sm text-slate-500 tracking-wide line-clamp-2">
          {{ article.content }}
        </p>

        <div
          class="mt-4 text-xs font-semibold tracking-wider rounded-full bg-violet-50 text-blue-500"
        >
          Baca Selengkapnya &rarr;
        </div>
      </div>
    </div>
  </RouterLink>
</template>
