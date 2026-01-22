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
    <div
      class="bg-slate-950 rounded-full text-slate-100 px-2.5 py-1 text-sm md:text-xs lg:text-sm tracking-wide w-fit"
    >
      {{ article?.category }}
    </div>
    <h1 class="mt-8 text-4xl md:text-5xl font-semibold text-slate-950">
      {{ article?.title }}
    </h1>
    <div class="w-full overflow-hidden rounded-lg mt-12">
      <img
        :src="article?.image"
        alt="Random image"
        class="block aspect-video object-cover w-full rounded-lg transition-all group-hover:scale-105 ease-in-out duration-500"
      />
    </div>
    <p
      class="text-slate-950 mt-12 text-lg leading-relaxed text-justify md:text-left"
    >
      Scalability is a critical consideration in modern web development. As your
      user base grows, your application must be able to handle increased
      traffic, data, and complexity without degrading performance. This requires
      careful planning from the start. Key considerations include database
      design, caching strategies, load balancing, and microservices
      architecture. Cloud platforms offer powerful tools for horizontal scaling,
      but they must be implemented thoughtfully. The goal is to create systems
      that can grow seamlessly, maintain reliability, and deliver consistent
      performance under varying loads.
    </p>
    <component :is="article?.component" v-if="article?.component" />
  </div>
</template>
