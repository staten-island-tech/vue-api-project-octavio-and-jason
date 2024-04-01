<template>
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarGraph',
  components: { Bar },
  props: {
    crashes: Array,
  },

  data() {
    return {
      loaded: false,
      chartData: null
    }
  },
  mounted() {
    this.loaded = false

    try {
      const factors = this.crashes((number, crash) => {
        const factor1 = crash.contributing_factor_vehicle_1
        const factor2 = crash.contributing_factor_vehicle_2
        
        if (factor1) {
          number[factor1] = (number[factor1] || 0) + 1
        }
        if (factor2) {
          number[factor2] = (number[factor2] || 0) + 1
        }

        return number
      }, {})

      const sortedFactors = Object.entries(factors)
        .sort((a, b) => b[1] - a[1])
        .slice(1, 6)

      this.chartData = {
        labels: sortedFactors.map(([factor, count]) => factor),
        datasets: [{
          label: 'Crash Count',
          backgroundColor: ['red', 'blue', 'green', 'purple', 'orange'],
          data: sortedFactors.map(([factor, count]) => count),
        }]
      }

      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
canvas {
  max-width: 1500px;
  max-height: 600px;
}
</style>
