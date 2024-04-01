<template>
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
      }
      crashes.value = await response.json()
    } catch (error) {
      console.error('Error fetching crashes', error)
    }
  }
  
  onBeforeMount(getCrashes)
  </script>
  
  <style scoped>
  
  </style>
  
