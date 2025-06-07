<template>
  <aside
    id="sidebar"
    class="w-64  bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700"
    aria-label="Sidebar"
  >
    <div class="h-full px-3 py-4 overflow-y-auto flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4 px-2">
        <h1 class="text-lg font-bold text-gray-900 dark:text-white">MCHLNGL.DV</h1>
      </div>
      <!-- Nav -->
      <ul class="space-y-2 font-medium">
        <li v-for="item in menu" :key="item.label">
          <Link

            class="flex items-center p-2 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            :class="{ 'bg-gray-100 dark:bg-gray-800 font-semibold': page.component === item.label }"
          >
            <component :is="item.icon" class="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span class="ml-3 capitalize text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
              {{ item.label }}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'

import {
  HomeIcon,
  ChartBarIcon,
  UserIcon,
  CogIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

const menu = ref([
  { label: 'dashboard', icon: ChartBarIcon },
  { label: 'users',icon: UserIcon },
  { label: 'settings', icon: CogIcon },
  { label: 'students', icon: AcademicCapIcon },
])

const page = usePage()

</script>
