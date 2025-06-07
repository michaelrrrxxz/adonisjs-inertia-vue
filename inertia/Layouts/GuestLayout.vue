<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { useDarkMode } from '@/darkmode.js';
import { Moon, Sun } from 'lucide-vue-next';

const { isDark, toggleDarkMode } = useDarkMode();
</script>

<template>
  <!-- Floating dark mode toggle button -->
  <button
    @click="toggleDarkMode"
    class="fixed top-4 left-4 z-50 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    aria-label="Toggle Dark Mode"
  >
    <component :is="isDark ? Sun : Moon" class="w-5 h-5 text-gray-800 dark:text-white" />
  </button>

  <!-- Main content -->
  <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div>
      <Link href="/">
        <ApplicationLogo class="w-20 h-20 fill-current text-gray-500 dark:text-gray-400" />
      </Link>
    </div>

    <div
      class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg"
    >
      <slot />
    </div>
  </div>
</template>
