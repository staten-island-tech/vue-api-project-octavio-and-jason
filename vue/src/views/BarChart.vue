<template>
  <div>
    <h2> {{ crash.borough }} </h2>
    <BarComponent
      v-for="{borough, crash_date} in crash" 
      :key="borough.name"
      :id="crash_date"
      :crash="borough"
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
