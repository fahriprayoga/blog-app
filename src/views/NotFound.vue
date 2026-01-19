<script setup lang="ts">
// Tidak perlu logic
</script>

<template>
  <section
    class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4"
  >
    <h1 class="text-5xl font-bold text-gray-800 mb-4">404</h1>

    <p class="text-gray-600 mb-6">Halaman yang kamu cari tidak ditemukan</p>

    <RouterLink to="/" class="text-blue-600 font-medium hover:underline">
      Kembali ke Home
    </RouterLink>
  </section>
</template>
