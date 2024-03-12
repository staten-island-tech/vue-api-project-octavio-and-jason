<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BarChart from './views/BarChart.vue'
</script>

<template>
      <nav>
        <RouterLink to="/">Bar Chart</RouterLink>
        <RouterLink to="/about">Pie Chart</RouterLink>
      </nav>
      <BarChart/>
  <RouterView />
</template>

<style scoped>
</style>