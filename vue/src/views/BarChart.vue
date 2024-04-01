<template>
<<<<<<< HEAD
    <h2>Crash Based by Borough</h2>
  <div class="chart">
  <BarComponent v-if="loaded"
  :Data="chartData"
  :Options="chartOptions"
  />
  </div>
</template>

<script setup>

import BarComponent from '@/components/BarComponent.vue'
import { ref, onMounted } from 'vue';

const loaded = ref(false);
const chartData = ref({});

onMounted(() => {
  loaded.value = false;
  try {
      getData();
  }
  catch (error) {
      console.error(error);
  }
});

async function getData () {
  let data;
  try {
      let response = await fetch(`https://data.cityofnewyork.us/resource/h9gi-nx95.json`);
      data = await response.json();
  }
  catch (error) {
      console.error(error);
  }

  chartData.value.labels = [];
  chartData.value.datasets = [{
      data: []
  }];

  for (let crash of data) {
      if (!chartData.value.labels.includes(crash.borough)) {
          chartData.value.labels.push(crash.borough);
      }
    }

const crashCounter = {};
for (let crash of data) {
      if (!crashCounter[crash.borough]) {
          crashCounter[crash.borough] = 0;
      } else {
          crashCounter[crash.borough]++;
=======
    <div>
      <h1 class="title">Crash Contributing Factors</h1>
      <h2 class="subtitle">Top 5 Contributing Factors</h2>
      <div class="bar">
        <template v-if="crashes.length > 0">
          <BarGraph :crashes="crashes" />
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue'
  import BarGraph from '@/components/BarComponent.vue'
  
  const crashes = ref([])
  
  async function getCrashes() {
    try {
      const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
      if (!response.ok) {
        throw new Error('Failed to fetch crashes')
>>>>>>> main
      }
      crashes.value = await response.json()
    } catch (error) {
      console.error('Error fetching crashes', error)
    }
  }
<<<<<<< HEAD

  chartData.value.datasets.data = Object.values(crashCounter);

  loaded.value = true;
}

const chartOptions = {
  responsive: true
}
  datasets: [
    {
        label: 'Crashes',
        backgroundColor: '#f87979',
    }
]
}



</script>

<style scoped>


</style>
=======
  
  onBeforeMount(getCrashes)
  </script>
  
  <style scoped>
  
  </style>
  
>>>>>>> main
