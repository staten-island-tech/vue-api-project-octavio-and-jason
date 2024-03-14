<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const crash = ref('')
async function getCrash() {
  let res = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
  let data = await res.json();
  crash.value = data.results;
}

onMounted(() => {
  getCrash();
})

console.log(crash)
</script>

<style scoped>

</style>
