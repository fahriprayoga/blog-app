<script setup lang="ts">
interface ArticleHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  alt?: string;
  author?: string;
  date?: string;
  category?: string;
}

const props = withDefaults(defineProps<ArticleHeroProps>(), {
  subtitle: "",
  alt: "",
  author: "",
  date: "",
  category: "",
});
</script>

<template>
  <header class="relative mb-8">
    <!-- Background Image -->
    <div class="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
      <img
        :src="image"
        :alt="alt || title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>

    <!-- Content Overlay -->
    <div class="absolute inset-0 flex items-end">
      <div class="container-max px-4 pb-8 text-white">
        <div class="max-w-3xl">
          <span
            v-if="category"
            class="inline-block bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4"
          >
            {{ category }}
          </span>
          <h1
            class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
          >
            {{ title }}
          </h1>
          <p v-if="subtitle" class="text-lg md:text-xl mb-4 opacity-90">
            {{ subtitle }}
          </p>
          <div
            v-if="author || date"
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm opacity-75"
          >
            <span v-if="author" class="mb-2 sm:mb-0">Oleh: {{ author }}</span>
            <span v-if="date">{{ date }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
