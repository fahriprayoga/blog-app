<script setup lang="ts">
interface ArticleParagraphProps {
  size?: "sm" | "base" | "lg";
}

const props = withDefaults(defineProps<ArticleParagraphProps>(), {
  size: "base",
});
</script>

<template>
  <p
    class="text-gray-800 leading-relaxed mb-6"
    :class="{
      'text-sm md:text-base': size === 'sm',
      'text-base md:text-lg': size === 'base',
      'text-lg md:text-xl': size === 'lg',
    }"
  >
    <slot />
  </p>
</template>
