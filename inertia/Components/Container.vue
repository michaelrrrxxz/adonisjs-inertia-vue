<template>
  <div class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
    <h1 v-if="title" class="text-2xl font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h1>
    <p v-if="description" class="mt-4 text-gray-600 dark:text-gray-300">{{ description }}</p>
    <div class="mt-4 text-gray-700 dark:text-gray-200">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
