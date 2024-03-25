<template>
    <div v-if="loaded" class="bar">
      <Bar
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
      />
    </div>
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        loaded: false,
        chartData: {
          labels: [],
          datasets: [{
            label: 'Crash',
            data: []
          }]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    async mounted() {
      this.loaded = false;
      try {
        const res = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json");
        const data = await res.json();
        this.prepareChartData(data);
        this.loaded = true;
      } catch (error) {
        console.error(error);
      }
    },
    methods: {
      prepareChartData(data) {
        this.chartData.labels = data.map(item => item.year);
        this.chartData.datasets[0].data = data.map(item => item.crashes);
      }
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  