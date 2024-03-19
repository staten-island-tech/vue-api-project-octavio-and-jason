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
  async mounted () {
    this.loaded = false
    
    try {
      const URL = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
      async function getCrashData(URL){
        try {
          const response = await fetch(URL);
          const data = await response.json();
          console.log(data);
        } catch (error){
          console.log(error);
        }
      }
      getCrashData();
    } catch(e) {
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