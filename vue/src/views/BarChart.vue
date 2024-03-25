<template>
  <div>
    <BarComponent
       v-for="crashes in crash" 
       :key="crashes.borough"
       :Crash="crashes"
       />
  </div>
</template>

<script setup>
import BarComponent from '@/components/BarComponent.vue';
import { ref, onMounted } from 'vue';
const crash = ref("")
async function getCrash() {
  let response = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
  let data = await response.json();
  crash.value = data
 return data
}

onMounted(() => {
  getCrash()
})

console.log(crash)
</script>

<style scoped>

</style>
