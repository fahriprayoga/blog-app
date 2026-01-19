<script setup lang="ts">
interface ArticleSectionProps {
  maxWidth?: string;
  padding?: string;
}

const props = withDefaults(defineProps<ArticleSectionProps>(), {
  maxWidth: 'max-w-4xl',
  padding: 'px-4 py-8',
});
</script>

<template>
  <section :class="`${maxWidth} mx-auto ${padding}`">
    <slot />
  </section>
</template>