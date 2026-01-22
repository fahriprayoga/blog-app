<script setup lang="ts">
import ProfileSection from "@/components/ProfileSection.vue";
import { teamMembers } from "@/data/teams";
import { Code2, Layout, Database, Terminal } from "lucide-vue-next";

const stacks = [
  { name: "Vue 3", icon: Code2, color: "text-emerald-500" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: Layout, color: "text-sky-400" },
  { name: "Lucide Icons", icon: Database, color: "text-pink-500" },
];
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <div class="container mx-auto px-4 py-12">
      <div class="mb-12 text-center">
        <h2 class="text-3xl font-extrabold text-slate-900 tracking-tight">
          Anggota Kelompok 1
        </h2>
        <p class="text-slate-500 mt-2">
          Daftar mahasiswa yang berkontribusi dalam project ini.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProfileSection
          v-for="member in teamMembers"
          :key="member.nim"
          v-bind="member"
        />
      </div>
    </div>

    <div class="mt-8">
      <div class="flex flex-col items-center justify-center">
        <p class="text-slate-400 text-lg font-medium mb-4">
          Dibuat dengan ❤️ bersama
        </p>

        <div
          class="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm"
        >
          <div
            v-for="stack in stacks"
            :key="stack.name"
            class="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <component :is="stack.icon" :size="18" :class="stack.color" />
            <span class="text-sm font-bold text-slate-700">{{
              stack.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
