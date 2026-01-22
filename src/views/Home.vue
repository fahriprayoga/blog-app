<script setup lang="ts">
import { articles } from "../data/articles";
import TopArticle from "../components/TopArticle.vue";
import ListArticle from "@/components/ListArticle.vue";

const articlesWithoutTop = articles.slice(1);
</script>

<template>
  <TopArticle :articles="articles" />
  <h2 class="text-slate-950 text-2xl mt-12 font-medium">Artikel Lainnya</h2>
  <ListArticle :articles="articlesWithoutTop" />
</template>
