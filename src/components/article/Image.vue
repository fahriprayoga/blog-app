<script setup lang="ts">
interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

const props = defineProps<ArticleImageProps>();
</script>

<template>
  <figure class="mb-8">
    <img
      :src="src"
      :alt="alt"
      class="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
    />
    <figcaption v-if="caption" class="text-sm text-gray-600 mt-2 text-center">
      {{ caption }}
    </figcaption>
  </figure>
</template>