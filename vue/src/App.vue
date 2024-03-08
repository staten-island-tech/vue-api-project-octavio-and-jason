<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarChart from './components/BarChart.vue'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      <BarChart/>
  <RouterView />
</template>

<style scoped>
</style>
./components/BarChart.vue