<template>
  <div class="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <Sidebar />

    <main class="flex-1 p-4">
      <div class="flex justify-between items-center mb-4">
    
      </div>

      <slot />
    </main>
  </div>
</template>

<script setup>
import Sidebar from '@/Layouts/core/Sidebar.vue'




</script>
