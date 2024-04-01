<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Crash Chart</h1>
  </header>
      <nav>
        <RouterLink to="/" class="bar">By Factors</RouterLink>
        <RouterLink to="/about" class="pie">By Boroughs</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>

.bar,
.pie {
  display: inline-block;
  padding: 10px 20px;
  margin: 10px;
  border: 1px solid #cccccc;
  background-color: #e4e4e4;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 10px;
  color: black;
}

.bar:hover,
.pie:hover {
  background-color: #cfcfcf;
  border-color: #8a8a8a;
}

h1 {
  text-align: center;
}

nav {
  text-align: center;
  align-items: center;
}
</style>



