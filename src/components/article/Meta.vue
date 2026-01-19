<script setup lang="ts">
interface ArticleMetaProps {
  author?: string;
  date?: string;
}

const props = defineProps<ArticleMetaProps>();
</script>

<template>
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 border-b border-gray-200 pb-4 mb-6">
    <span v-if="author" class="mb-2 sm:mb-0">Oleh: {{ author }}</span>
    <span v-if="date">{{ date }}</span>
  </div>
</template>