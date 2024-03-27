<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
      <nav>
        <RouterLink to="/">Bar Chart</RouterLink>
        <RouterLink to="/about">Pie Chart</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>
nav {
  width: 50%,
}
</style>