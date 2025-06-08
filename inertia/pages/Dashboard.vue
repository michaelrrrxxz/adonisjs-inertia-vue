<template>
  <AppLayout>
    <Head title="Dashboard" />

    <div class="mb-4">
      <PageHeader>Dashboard</PageHeader>
    </div>

    <!-- User Count Card -->
    <div class="mb-4">
      <div class="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <svg class="w-8 h-8 text-blue-500 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m10-5.13a4 4 0 1 0-8 0 4 4 0 0 0 8 0z" />
        </svg>
        <div>
          <div class="text-lg font-semibold">{{ userCount }}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">Users</div>
        </div>
      </div>
    </div>

    <div class="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
      <!-- Grid of 3 -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div v-for="i in 3" :key="'top-' + i" class="flex items-center justify-center h-24 rounded-sm bg-gray-50 dark:bg-gray-800">
          <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
          </svg>
        </div>
      </div>

      <!-- Large Section -->
      <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
        <svg class="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
        </svg>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import Container from '@/Components/Container.vue'
import PageHeader from '@/Components/PageHeader.vue'
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue'

const props = defineProps({
 userCount: {
    type: Number,

  },
})
</script>
