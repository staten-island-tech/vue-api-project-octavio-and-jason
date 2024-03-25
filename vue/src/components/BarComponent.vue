<template>
  <!-- <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData" -->

    <div class="cotainer">
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


const props = ({
  Crash: Object,
});

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object
      default: () => {}
    }
  }
  data() {
  return {
      chartData: {
        labels: [ props.Crash.borough ],
        datasets: [
          { data: []}
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}



//   data() {
//     return {
//       chartData: null,
//       chartLabels: [],
//     };
//   },
//   mounted() {
//     this.getCrashData();
//   },
//   methods: {
//     async getCrashData() {
//       try {
//         const response = await fetch('"https://data.cityofnewyork.us/resource/h9gi-nx95.json')
//         const data = await response.json();
//         this.chartData = data;
//         this.chartLabels = this.chartData.map(crash => crash.borough);
//         this.renderChart();
//       } catch (error) {
//         console.error(error);
//         }
//       },
//       renderChart() {
//         new Chart({
//         type: 'bar',
//         data: {
//           labels: this.chartLabels,
//           datasets: [{
//             lable: 'Data'
//           }]
//         }
//       });
//       }
//     }
// };
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