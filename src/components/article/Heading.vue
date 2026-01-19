<script setup lang="ts">
interface ArticleHeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const props = withDefaults(defineProps<ArticleHeadingProps>(), {
  level: 1,
});
</script>

<template>
  <component
    :is="`h${level}`"
    class="font-bold text-gray-900 leading-tight"
    :class="{
      'text-3xl md:text-4xl lg:text-5xl mb-4': level === 1,
      'text-2xl md:text-3xl mb-3': level === 2,
      'text-xl md:text-2xl mb-3': level === 3,
      'text-lg md:text-xl mb-2': level === 4,
      'text-base md:text-lg mb-2': level === 5,
      'text-sm md:text-base mb-2': level === 6,
    }"
  >
    <slot />
  </component>
</template>
