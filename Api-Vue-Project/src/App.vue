<template>
  <BarChart />
  <HomeView />
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import HomeView from './views/HomeView.vue';
export default {
  name: 'App',
  components: { BarChart, HomeView }
}
</script>