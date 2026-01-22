<script setup lang="ts">
import { Instagram } from "lucide-vue-next";

// 1. Definisikan Interface untuk Props
interface Props {
  name: string;
  nim: string | number;
  bio: string;
  emot: string;
  instagram: string;
  link: string;
  image: string;
}

// 2. Gunakan defineProps
const props = defineProps<Props>();
</script>

<template>
  <div
    class="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden border border-slate-100 antialiased"
  >
    <div class="h-32 relative bg-slate-900">
      <div class="absolute inset-0 overflow-hidden">
        <img
          :src="props.image"
          class="w-full h-full object-cover blur-[2px] scale-110 opacity-60"
          alt="Banner Background"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <div class="absolute -bottom-10 left-8 z-10">
        <img
          :src="props.image"
          alt="Profile"
          class="h-24 md:h-28 aspect-square rounded-full border-4 border-white object-cover shadow-lg bg-white"
        />
      </div>
    </div>

    <div class="pt-14 px-8 pb-10">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-slate-900 tracking-tight">
          {{ props.name }}
        </h1>
        <div class="flex items-center gap-2 mt-2">
          <span
            class="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]"
            >NIM</span
          >
          <span class="text-slate-200">|</span>
          <span class="text-slate-500 text-sm font-medium">{{
            props.nim
          }}</span>
        </div>
      </div>

      <div class="mb-6">
        <h2 class="text-slate-900 font-bold mb-2 text-sm">Status</h2>
        <div
          class="flex items-center gap-4 p-3 border-2 border-slate-100 rounded-lg bg-slate-50/30 hover:bg-white hover:border-slate-200 transition-all group"
        >
          <span class="">{{ props.emot }}</span>
          <div class="w-px h-4 bg-slate-200"></div>
          <span class="text-slate-600 text-sm font-medium">{{
            props.bio ? props.bio : "-"
          }}</span>
        </div>
      </div>

      <div>
        <h2 class="text-slate-900 font-bold mb-2 text-sm">Contact</h2>
        <div class="flex flex-col gap-3">
          <a
            v-if="props.link"
            :href="props.link"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-4 p-3 border-2 border-slate-100 rounded-lg bg-slate-50/30 hover:bg-white hover:border-slate-200 transition-all group cursor-pointer"
          >
            <Instagram
              :size="18"
              class="text-slate-400 group-hover:text-rose-500 shrink-0"
            />
            <div class="w-px h-4 bg-slate-200"></div>
            <span class="text-slate-600 text-sm font-medium">{{
              props.instagram
            }}</span>
          </a>
          <div
            v-else
            class="flex items-center gap-4 p-3 border-2 border-slate-100 rounded-lg bg-slate-50/30 hover:bg-white hover:border-slate-200 transition-all group cursor-pointer"
          >
            <Instagram
              :size="18"
              class="text-slate-400 group-hover:text-rose-500 shrink-0"
            />
            <div class="w-px h-4 bg-slate-200"></div>
            <span class="text-slate-600 text-sm font-medium">{{
              props.instagram ? props.instagram : "-"
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
