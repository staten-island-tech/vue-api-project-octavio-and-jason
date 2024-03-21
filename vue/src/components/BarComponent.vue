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

const props = defineProps({
  crash: Object,
  id: Number
})

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
  data: () => ({
    loaded: false,
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  })
},
  async mounted () {
    this.loaded = false

        try {
          const {list} = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json");
          this.chartData = list

          this.loaded = true
        }catch (e) {
          console.error(e)
        }
      }
    }
          /* console.log(data);
          return data
        } catch (error){
          console.log(error);
        }
      }
      getCrashData();
    } catch(e) {
      console.error(e)
    }
  }
} */
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