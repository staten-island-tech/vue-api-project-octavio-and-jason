<template>
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
  const crashCounter = {};
  for (let crash of data) {
      if (!chartData.value.labels.includes(crash.borough)) {
          chartData.value.labels.push(crash.borough);
      }
      if (!crashCounter[crash.borough]) {
          crashCounter[crash.borough] = 0;
      } else {
          crashCounter[crash.borough]++;
      }
  }

  chartData.value.datasets.data = Object.values(crashCounter);

  loaded.value = true;
}

const chartOptions = {
  responsive: true
}

</script>

<style scoped>


</style>