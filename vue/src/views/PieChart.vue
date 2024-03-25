<template>
  <div class="about">
    <h1>Pie Chart</h1>
  </div>
  <Pie>
    
  </Pie>
</template>

<script setup>
import Pie from '@/components/Pie.vue';
</script>

<style lang="scss" scoped>

</style>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
