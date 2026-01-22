<script setup lang="ts">
import { articles } from "../data/articles";
import TopArticle from "@/components/TopArticle.vue";
import ListArticle from "@/components/ListArticle.vue";
import ProfileSection from "@/components/ProfileSection.vue";

const articlesWithoutTop = articles.slice(1);
</script>

<template>
  <div>
    <TopArticle :articles="articles" />
    <h2 class="text-slate-950 text-2xl mt-12 font-medium">Artikel Lainnya</h2>
    <ListArticle :articles="articlesWithoutTop" />
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
  </div>
</template>
