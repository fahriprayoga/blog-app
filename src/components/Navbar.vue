<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { ArrowLeft, Users } from "lucide-vue-next";
import { useRoute } from "vue-router";

const route = useRoute();
const isScrolled = ref(false);

// Fungsi untuk mendeteksi scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-100 transition-all duration-300 ease-in-out border-b py-4 md:py-0 md:px-12 lg:px-32"
    :class="[
      isScrolled
        ? 'bg-white/90 backdrop-blur-md py-2 md:py-3 shadow-sm border-slate-200'
        : 'bg-white py-5 md:py-8 border-transparent',
    ]"
  >
    <div class="container mx-auto px-4 md:px-8">
      <div class="flex justify-between items-center">
        <div class="flex flex-col min-w-0">
          <RouterLink
            v-if="route.name === 'Detail'"
            to="/"
            class="inline-flex items-center gap-2 text-slate-600 font-semibold hover:text-slate-950 transition-all group"
          >
            <ArrowLeft
              :size="isScrolled ? 18 : 22"
              class="group-hover:-translate-x-1 transition-transform"
            />
            <span :class="isScrolled ? 'text-base' : 'text-lg'"
              >Menu utama</span
            >
          </RouterLink>

          <template v-else>
            <RouterLink
              to="/"
              class="text-slate-900 font-bold leading-tight transition-all truncate"
              :class="isScrolled ? 'text-lg' : 'text-xl md:text-2xl'"
            >
              Artikel Blog
            </RouterLink>
            <div
              v-if="!isScrolled"
              class="text-slate-500 font-medium text-xs md:text-sm transition-opacity duration-300"
            >
              By kelompok 1
            </div>
          </template>
        </div>

        <div class="flex items-center shrink-0 ml-4">
          <RouterLink
            to="/about"
            class="flex items-center gap-2 transition-all group"
            :class="[
              route.name === 'About'
                ? 'text-blue-600'
                : 'text-slate-600 hover:text-slate-950',
              isScrolled ? 'bg-slate-100/50 p-2 rounded-lg' : '',
            ]"
          >
            <Users :size="isScrolled ? 18 : 20" />
            <span
              class="text-sm font-bold md:block"
              :class="isScrolled ? 'hidden sm:block' : 'block'"
            >
              Tentang Kami
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>

  <div
    :class="isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32'"
    class="transition-all duration-300"
  ></div>
</template>
