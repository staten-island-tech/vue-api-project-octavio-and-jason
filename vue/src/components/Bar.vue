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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    labels: [ data.borough ],
    loaded: false,
    chartData: null
  }),
  async mounted () {
    this.loaded = false
    
    try {
      async function getCrashData(){
        try {
          const response = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json");
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