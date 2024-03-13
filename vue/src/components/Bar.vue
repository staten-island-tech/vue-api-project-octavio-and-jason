<template>
  <!-- <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData" -->

    <div class="cotainer">
      <Bar v-if="loaded" :data="chartData" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import getCrash from '@/views/BarChart.vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async Mounted () {
    this.loaded = false
    
    try {
      const { userlist } = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
      this.chartdata = userlist
      
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
//     return {
//       chartData: {
//         labels: [ 'January', 'February', 'March' ],
//         datasets: [ { data: [40, 20, 12] } ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }


</script>