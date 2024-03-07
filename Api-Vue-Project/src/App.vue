<template>
  <BarChart />
  <barView />
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import barView from './views/barView.vue';
export default {
  name: 'App',
  components: { BarChart, barView }
}
</script>