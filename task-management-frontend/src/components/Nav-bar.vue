<script setup>
import router from '@/router'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const isLoggedIn = computed(() => store.getters['auth/isLoggedIn'])
const handleLogout = () => {
  store
    .dispatch('auth/logout')
    .then(() => router.push('/'))
    .catch((err) => console.log(err))
}
</script>
<template>
  <nav
    class="flex items-center justify-between gap-20 px-2 text-xl py-2 bg-blue-600 font-semibold text-white"
  >
    <div>Task Management</div>
    <div class="flex items-center justify-evenly gap-10">
      <RouterLink v-if="isLoggedIn" to="/task">Tasks</RouterLink>
      <div v-if="isLoggedIn" class="bg-blue-600 text-white font-medium p-2 rounded-md">
        <RouterLink to="/" @click="handleLogout">LogOut</RouterLink>
      </div>
      <div v-else class="bg-blue-800 text-white font-medium p-2 rounded-md">
        <RouterLink to="/">Login</RouterLink>
      </div>
    </div>
  </nav>
</template>
