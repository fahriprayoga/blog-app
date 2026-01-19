<script setup lang="ts">
// Tidak membutuhkan logic khusus
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 py-10">
    <!-- Title -->
    <h1 class="text-3xl font-bold mb-6">About This Project</h1>

    <!-- Description -->
    <p class="text-gray-700 leading-relaxed mb-6">
      Website ini merupakan website blog artikel sederhana yang dibuat
      menggunakan Vue 3 dan TypeScript sebagai bagian dari tugas perkuliahan.
      Fokus utama dari project ini adalah penerapan konsep component-based,
      routing, dan manajemen data sederhana.
    </p>

    <!-- Info Cards -->
    <div class="grid gap-6 sm:grid-cols-2">
      <div class="bg-white shadow rounded-xl p-5">
        <h2 class="text-lg font-semibold mb-2">Tujuan</h2>
        <p class="text-gray-600 text-sm">
          Mengimplementasikan konsep dasar Vue seperti component, props,
          routing, serta penggunaan TypeScript untuk meningkatkan keamanan tipe
          data.
        </p>
      </div>

      <div class="bg-white shadow rounded-xl p-5">
        <h2 class="text-lg font-semibold mb-2">Teknologi</h2>
        <ul class="text-gray-600 text-sm space-y-1">
          <li>• Vue 3</li>
          <li>• TypeScript</li>
          <li>• Vue Router</li>
          <li>• Tailwind CSS</li>
        </ul>
      </div>
    </div>

    <!-- Author -->
    <div class="mt-8 border-t pt-4 text-sm text-gray-500">
      Dibuat oleh <span class="font-medium">Fahri</span> — 2026
    </div>
  </section>
</template>
