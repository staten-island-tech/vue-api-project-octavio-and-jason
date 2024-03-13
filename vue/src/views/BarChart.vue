<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const crash = ref("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
async function getCrash() {
  const res = await fetch(crash)
  const data = await res.json();
  crash.value = data;
}

onMounted(() => {
  getCrash();
})

console.log(crash)
</script>

<style scoped>

</style>
