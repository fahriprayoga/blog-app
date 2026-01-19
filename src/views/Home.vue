<script setup lang="ts">
import { articles } from "../data/articles";
import CardArticle from "@/components/CardArticle.vue";

const first = articles[0]!;
</script>

<template>
  <section class="max-w-6xl mx-auto px-4 py-10">
    <div class="mb-12">
      <CardArticle :article="first" :first="true" />
    </div>

    <h1 class="text-xl font-semibold mb-6">Artikel Lainnya</h1>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CardArticle v-for="item in articles" :key="item.id" :article="item" />
    </div>
  </section>
</template>
