<script setup lang="ts"></script>
<template>
  <div class="grid gap-12 md:8 grid-cols-1 lg:grid-cols-3 mt-8">
    <RouterLink
      v-for="value in 5"
      to="/article/1"
      class="group flex flex-col gap-8 items-center"
    >
      <div class="w-full overflow-hidden rounded-lg">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Random image"
          class="block aspect-video object-cover w-full rounded-lg transition-all group-hover:scale-105 ease-in-out duration-500"
        />
      </div>
      <div class="w-full">
        <div
          class="bg-slate-100 rounded-full text-slate-950 px-2.5 py-1 text-sm md:text-xs lg:text-sm tracking-wide w-fit"
        >
          Teknologi
        </div>
        <h1
          class="font-semibold text-xl tracking-wide mt-4 md:mt-2 lg:mt-4 line-clamp-1 text-slate-950"
        >
          Building Scalable Web Applications
        </h1>
        <p
          class="mt-4 md:mt-2 lg:mt-4 text-gray-600/75 text-lg md:text-base tracking-wide line-clamp-2"
        >
          A comprehensive guide to architecting web applications that grow with
          your business needs.
        </p>
        <div
          class="flex items-center gap-4 mt-4 md:mt-2 lg:mt-8 text-gray-600/75 text-sm tracking-wide"
        >
          <div>Kelompok 1</div>
          <div class="text-2xl">•</div>
          <div class="flex items-center justify-center gap-1">
            <Clock4 class="w-4 h-4" /> 5 menit baca
          </div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
