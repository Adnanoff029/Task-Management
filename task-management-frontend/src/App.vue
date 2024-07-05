<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Nav-bar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />
</template>

<style scoped></style>
