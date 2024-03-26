<template>
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

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// import { ref, setup } from 'vue';
// const crash = ref("")
// async function getCrash() {
//   let response = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
//   let data = await response.json();
//   crash.value = data
//  return data
// }

// setup(() => {
//   getCrash()
// })


// export default {
//   name: 'BarChart',
//   components: { Bar },
//   data() {
//     return {
//       chartData: {
//         labels: [ crash.borough ],
//         datasets: [
//           { data: []}
//         ]
//       },
//       chartOptions: {
//         responsive: true
//       }
//     }
//   }
// }
</script>