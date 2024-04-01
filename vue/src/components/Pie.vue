<template>
  <div class="container">
    <Pie v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

export default {
  name: 'PieGraph',
  components: { Pie },
  props: {
    crashData: Array,
    selectedOption: String,
  },

  data() {
    return {
      loaded: false,
      chartData: null
    }
  },
  methods: {
    async updateChartData() {
      this.loaded = false;

      try {
        if (this.selectedOption === 'borough') {
          const boroughCounts = this.crashData.reduce((counts, crash) => {
            const borough = crash.borough || 'Unknown';
            counts[borough] = (counts[borough] || 0) + 1;
            return counts;
          }, {});

          this.chartData = {
            labels: Object.keys(boroughCounts),
            datasets: [
              {
                label: 'Crashes by Borough',
                backgroundColor: ['red', 'blue', 'green', 'purple', 'orange', 'black'],
                data: Object.values(boroughCounts),
              }
            ]
          };
        }

        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    this.updateChartData();
  }
};
</script>

<style scoped>

</style>
