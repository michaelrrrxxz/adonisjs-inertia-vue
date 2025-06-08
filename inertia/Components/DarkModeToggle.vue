<template>
  <button
    @click="toggleDarkMode"
    class="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
    aria-label="Toggle Dark Mode"
  >
    <component :is="isDark ? Sun : Moon" class="w-5 h-5 text-gray-800 dark:text-white" />
  </button>
</template>

<script setup>
import { useDarkMode } from '@/darkmode.js'
import { Moon, Sun } from 'lucide-vue-next'

const { isDark, toggleDarkMode } = useDarkMode()
</script>
