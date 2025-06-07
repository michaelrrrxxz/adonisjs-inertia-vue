<template>
  <header class="w-full h-14 flex items-center justify-end px-6">
    <div class="relative">
      <button @click="toggle" class="flex items-center space-x-2 focus:outline-none">
        <img :src="userAvatar" alt="Profile" class="w-8 h-8 rounded-full object-cover" />
        <span class="font-medium text-gray-700 dark:text-gray-200">{{ userName }}</span>
        <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-width="2" d="M6 8l4 4 4-4" />
        </svg>
      </button>

      <!-- Dropdown with background -->
      <div
        v-if="open"
        class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-2 z-50 bg-white dark:bg-gray-800"
      >
            <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
            <DropdownLink :href="route('logout')"
             method="post"
             as="button">
             Log Out
            </DropdownLink>
      </div>
    </div>
  </header>
</template>


<script setup>
import { ref } from 'vue'
import { usePage, router } from '@inertiajs/vue3'
import DropdownLink from '@/Components/DropdownLink.vue'


const open = ref(false)
const user = usePage().props.auth?.user || {}
const userName = user.name || 'User'
const userAvatar = user.avatar_url || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(userName)

function toggle() {
    open.value = !open.value
}

function editProfile() {
    open.value = false
    // Replace with your actual profile edit route
    router.visit('/profile')
}

// function logout() {
//     open.value = false
//     router.post(route('logout'))
// }
function logout() {
    open.value = false
  router.post('/logout', {}, {
    onSuccess: () => {
      Inertia.visit('/login', {
        preserveState: false,
        preserveScroll: false,
        replace: true,
        onFinish: () => window.location.reload(),
      });
    },
  });
}
</script>
