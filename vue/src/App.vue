<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Crash Chart</h1>
  </header>
      <nav>
        <RouterLink to="/">Bar Chart</RouterLink>
        <RouterLink to="/about">Pie Chart</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

</style>