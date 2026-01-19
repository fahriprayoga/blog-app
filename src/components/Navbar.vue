<script setup lang="ts">
import { ref } from "vue";

const open = ref<boolean>(false);
</script>

<template>
  <nav
    class="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 px-48 z-50"
  >
    <div class="py-4 w-full flex items-center justify-between">
      <!-- logo section -->
      <div class="flex items-center gap-4 border-2">
        <RouterLink
          to="/"
          class="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div
            class="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-semibold shadow-lg"
          >
            B1
          </div>
          <div>
            <h1 class="text-lg font-extrabold text-slate-900">
              Blog Kelompok 1
            </h1>
            <p class="text-xs text-gray-500">Artikel dari kami</p>
          </div>
        </RouterLink>
      </div>
      <!-- logo section -->

      <!-- link section -->
      <div class="hidden md:flex items-center space-x-6">
        <RouterLink class="nav-link font-medium" to="/">Home</RouterLink>
        <RouterLink class="nav-link font-medium" to="/about">About</RouterLink>
      </div>
      <!-- link section -->

      <!-- hamburger-menu section -->
      <button
        class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- hamburger-menu section -->
    </div>

    <!-- toggle-menu section -->
    <transition name="slide-down">
      <div
        v-if="open"
        class="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 px-4 py-4 space-y-2 shadow-inner"
      >
        <RouterLink
          class="block py-3 px-2 nav-link font-medium rounded-md hover:bg-violet-50 transition-colors"
          to="/"
          @click="open = false"
          >Home</RouterLink
        >
        <RouterLink
          class="block py-3 px-2 nav-link font-medium rounded-md hover:bg-violet-50 transition-colors"
          to="/about"
          @click="open = false"
          >About</RouterLink
        >
      </div>
    </transition>
    <!-- toggle-menu section -->
  </nav>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
