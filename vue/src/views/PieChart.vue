<template>
  <div>
    <h1>Crash Based by Borough</h1>
    <template v-if="crashData.length > 0">
      <PieGraph :crashData="crashData" :selectedOption="selectedOption"/>
    </template> 
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import PieGraph from '@/components/Pie.vue';

const crashData = ref([]);
const selectedOption = ref('borough');

async function getCrashData() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json');
    if (!response.ok) {
      throw new Error('Failed to fetch crash data');
    }
    crashData.value = await response.json();
  } catch (error) {
    console.error('Error fetching crash data', error);
  }
}
onBeforeMount(getCrashData);
</script>

<style scoped>

</style>
