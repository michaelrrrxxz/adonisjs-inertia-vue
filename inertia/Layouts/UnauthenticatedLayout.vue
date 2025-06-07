<template>
  <!-- Floating dark mode toggle in top-left -->
  <button
    @click="toggleDarkMode"
    class="fixed top-4 left-4 z-50 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    aria-label="Toggle Dark Mode"
  >
    <component :is="isDark ? Sun : Moon" class="w-5 h-5 text-gray-800 dark:text-white" />
  </button>

  <!-- Main layout -->
  <div class="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <!-- Left slot (e.g., for marketing) -->
    <div class="hidden md:flex w-1/2 items-center justify-center p-10 bg-white dark:bg-gray-800">
      <slot name="left" />
    </div>

    <!-- Main content -->
    <div class="flex w-full md:w-1/2 items-center justify-center p-6">
      <div class="w-full max-w-md">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDarkMode } from '@/darkmode.js'
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDarkMode } = useDarkMode()
</script>
