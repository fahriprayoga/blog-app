<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";
import { getArticleById } from "@/data/articles";

const route = useRoute();
const article = computed(() => {
  return getArticleById(route.params.id as string);
});
</script>

<template>
  <div class="md:px-24 lg:px-40 mt-12">
    <div class="flex justify-between">
      <div
        class="bg-slate-950 rounded-full text-slate-100 px-2.5 py-1 text-sm md:text-xs lg:text-sm tracking-wide w-fit"
      >
        {{ article?.category }}
      </div>
      <div class="text-gray-600 text-sm tracking-wide">
        {{ article?.date }}
      </div>
    </div>
    <h1
      class="mt-8 text-3xl md:text-3xl lg:text-4xl font-semibold text-slate-950"
    >
      {{ article?.title }}
    </h1>
    <div class="w-full overflow-hidden rounded-lg mt-12">
      <img
        :src="article?.image"
        alt="image"
        class="block aspect-video object-cover w-full rounded-lg transition-all group-hover:scale-105 ease-in-out duration-500"
      />
    </div>
    <component :is="article?.component" v-if="article?.component" />
  </div>
</template>
