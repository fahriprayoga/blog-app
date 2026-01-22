<script setup lang="ts"></script>
<template>
  <div class="text-slate-900 mt-12 text-lg leading-relaxed max-w-none">
    <section>
      <h2 class="text-3xl font-extrabold text-slate-950 mb-6 tracking-tight">
        The PHP Framework for Web Artisans
      </h2>
      <p class="text-xl text-slate-700 leading-relaxed font-light italic">
        "Laravel tidak hanya menyediakan alat, ia memberikan kebebasan bagi para
        developer untuk berkreasi layaknya seorang seniman (artisan) dalam
        membangun arsitektur perangkat lunak."
      </p>
    </section>

    <section class="mt-16">
      <h2
        class="text-2xl font-bold text-slate-950 mb-8 flex items-center gap-3"
      >
        <span class="p-2 bg-red-100 rounded-lg text-red-600">🚀</span>
        Mengapa Laravel Begitu Istimewa?
      </h2>
      <p>
        Sebelum era Laravel, PHP sering dianggap sebagai bahasa yang berantakan.
        Laravel hadir dengan filosofi
        <b class="text-red-600 font-medium">"Developer Happiness"</b>—sebuah
        keyakinan bahwa koding harus menjadi proses yang menyenangkan.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mt-10">
        <div
          class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
        >
          <h4 class="font-bold text-slate-950 mb-2">Sintaks yang Elegan</h4>
          <p class="text-sm text-slate-600">
            Membaca kode Laravel hampir seperti membaca kalimat bahasa Inggris
            yang terstruktur, membuatnya sangat mudah dipahami bahkan oleh
            developer baru.
          </p>
        </div>
        <div
          class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm"
        >
          <h4 class="font-bold text-slate-950 mb-2">Ekosistem Raksasa</h4>
          <p class="text-sm text-slate-600">
            Dari deployment (Forge), pemantauan error (Flare), hingga
            autentikasi instan (Breeze/Jetstream), ekosistemnya sangat lengkap.
          </p>
        </div>
      </div>
    </section>

    <section class="mt-16">
      <h2 class="text-2xl font-bold text-slate-950 mb-8">
        Pilar Utama Laravel
      </h2>

      <div class="space-y-8">
        <div class="flex gap-6">
          <div
            class="flex-none w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold"
          >
            1
          </div>
          <div>
            <h3 class="font-bold text-lg text-slate-950 mb-1">Eloquent ORM</h3>
            <p class="text-slate-600 text-base">
              Sistem interaksi database yang paling intuitif. Kamu bisa
              memanggil data layaknya memanggil objek biasa tanpa perlu menulis
              SQL yang rumit.
            </p>
          </div>
        </div>

        <div class="flex gap-6">
          <div
            class="flex-none w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold"
          >
            2
          </div>
          <div>
            <h3 class="font-bold text-lg text-slate-950 mb-1">
              Blade Templating Engine
            </h3>
            <p class="text-slate-600 text-base">
              Memisahkan logika program dengan tampilan HTML secara bersih namun
              tetap memberikan performa yang sangat cepat.
            </p>
          </div>
        </div>

        <div class="flex gap-6">
          <div
            class="flex-none w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold"
          >
            3
          </div>
          <div>
            <h3 class="font-bold text-lg text-slate-950 mb-1">Artisan CLI</h3>
            <p class="text-slate-600 text-base">
              Asisten command-line yang mengotomatisasi tugas-tugas membosankan
              seperti migrasi database atau pembuatan controller.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section
      class="mt-16 bg-slate-900 rounded-3xl p-8 text-slate-300 overflow-hidden"
    >
      <h2 class="text-xl font-bold text-white mb-4 italic text-center">
        Modern PHP at Its Best
      </h2>
      <p class="text-sm leading-relaxed mb-6">
        Laravel membawa standar modern ke dalam PHP, seperti dependecy
        injection, unit testing terintegrasi, dan keamanan terhadap SQL
        injection secara default.
      </p>
      <div
        class="font-mono text-xs md:text-sm space-y-2 opacity-80 border-t border-slate-700 pt-6"
      >
        <p class="text-emerald-400">// Contoh kesederhanaan Laravel</p>
        <p class="text-white">
          <span class="text-pink-400">Route</span>::<span class="text-blue-400"
            >get</span
          >(<span class="text-amber-300">'/artikel'</span>,
          <span class="text-pink-400">function</span> () {
        </p>
        <p class="pl-6 text-white">
          <span class="text-pink-400">return</span>
          <span class="text-pink-400">Article</span>::<span
            class="text-blue-400"
            >all</span
          >();
        </p>
        <p class="text-white">});</p>
      </div>
    </section>

    <section class="mt-16 text-center border-t border-slate-100 pt-12">
      <h3 class="text-2xl font-bold text-slate-950 mb-4">
        Masa Depan PHP Ada di Sini
      </h3>
      <p class="max-w-3xl mx-auto text-slate-600">
        Mempelajari Laravel bukan hanya sekadar mempelajari framework, tapi
        mempelajari pola desain (design patterns) terbaik dalam industri
        pengembangan web. Baik Anda membangun startup kecil atau platform
        enterprise, Laravel memiliki fleksibilitas untuk tumbuh bersama bisnis
        Anda.
      </p>
    </section>
  </div>
</template>
