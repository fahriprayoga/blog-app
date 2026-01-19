<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="container px-4 md:px-0 lg:px-40 mx-auto">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
  <footer
    class="py-8 mx-auto text-xs md:text-sm text-gray-600 flex justify-center items-center border-t border-slate-200 mt-20"
  >
    &copy; 2026 Artikel Blog Kelompok 1. All rights reserved.
  </footer>
</template>
