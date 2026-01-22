<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans antialiased bg-slate-50">
    <Navbar />

    <main class="flex-grow container px-4 md:px-8 lg:px-40 mx-auto">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>

    <footer
      class="py-8 w-full text-xs md:text-sm text-gray-500 flex justify-center items-center border-t border-slate-200 bg-white mt-20"
    >
      &copy; 2026 Artikel Blog Kelompok 1. All rights reserved.
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
