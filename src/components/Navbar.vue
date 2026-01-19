<script setup lang="ts">
import { ArrowLeft } from "lucide-vue-next";
</script>

<template>
  <nav class="border-b border-slate-200">
    <RouterLink
      v-if="$route.name !== 'Detail'"
      to="/"
      class="container mx-auto py-6 md:py-4 lg:py-8 flex flex-col gap-1 lg:gap-0"
    >
      <div class="text-slate-800 text-2xl font-bold">Artikel Blog</div>
      <div class="text-slate-600/75 font-medium">By kelompok 1</div>
    </RouterLink>
    <RouterLink
      v-else
      to="/"
      class="container mx-auto py-6 md:py-4 lg:py-8 flex flex-col gap-1 lg:gap-0"
    >
      <div
        class="text-slate-600/75 font-medium flex gap-2 items-center hover:text-slate-950 transition-all"
      >
        <ArrowLeft /> Menu utama
      </div>
    </RouterLink>
  </nav>
</template>
