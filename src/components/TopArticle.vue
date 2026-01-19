<script setup lang="ts">
import { Clock4 } from "lucide-vue-next";
import { ArrowRight } from "lucide-vue-next";
</script>

<template>
  <RouterLink
    to="/article/1"
    class="group flex flex-col md:flex-row gap-8 mt-12 items-center"
  >
    <div class="w-full md:w-6/12 overflow-hidden rounded-lg">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="Random image"
        class="block aspect-video object-cover w-full rounded-lg transition-all group-hover:scale-105 ease-in-out duration-500"
      />
    </div>
    <div class="w-full md:w-6/12">
      <div
        class="bg-slate-950 rounded-full text-slate-100 px-2.5 py-1 text-sm md:text-xs lg:text-sm tracking-wide w-fit"
      >
        Teknologi
      </div>
      <h1
        class="font-semibold text-3xl lg:text-4xl tracking-wide mt-4 md:mt-2 lg:mt-4 line-clamp-1 text-slate-950"
      >
        Internet
      </h1>
      <p
        class="mt-4 md:mt-2 lg:mt-4 text-gray-600/75 text-lg md:text-base lg:text-lg tracking-wide line-clamp-2"
      >
        Ini adalah materi presentasi yang dibuat oleh kami terkait dengan
        sejarah internet dan perkembangannya hingga saat ini.
      </p>
      <div
        class="flex items-center gap-4 mt-4 md:mt-2 lg:mt-4 text-gray-600/75 text-sm tracking-wide"
      >
        <div>Kelompok 1</div>
        <div class="text-2xl">•</div>
        <div class="flex items-center justify-center gap-1">
          <Clock4 class="w-4 h-4" /> 5 menit baca
        </div>
      </div>
      <div
        class="mt-4 md:mt-2 lg:mt-4 flex items-center group-hover:gap-3 gap-2 transition-all ease-in font-medium tracking-wide text-slate-950"
      >
        Baca Selengkapnya <ArrowRight class="w-4 h-4" />
      </div>
    </div>
  </RouterLink>
</template>
