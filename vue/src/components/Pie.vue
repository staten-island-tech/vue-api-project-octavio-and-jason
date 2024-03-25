<template>
<<<<<<< HEAD
    <div class="container">
      <Bar v-if="loaded" :data="chartData" />
    </div>
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'PieChart',
    components: { Pie },
    data: () => ({
      loaded: false,
      chartData: null
    }),
    async mounted () {
      this.loaded = false
  
      try {
        const { userlist } = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
        this.chartdata = userlist
  
        this.loaded = true
      } catch (e) {
        console.error(e)
      }
    }
  }
  </script>
=======
    <div v-if="loaded" class="bar">
<Bar
id="my-chart-id"
:options="chartOptions"
:data="chartData"
/>
</div>
</template>

<script>
import { Bar } from 'vue-chartjs' 
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data: () => ({
        loaded: false,
        chartData: {
            labels: [ { data } ],
            datasets: [ {
                label: 'Crash',
                data: []
            }],
            async onMounted(){
                this.loaded=false
                try{
                    const res = await fetch ("https://data.cityofnewyork.us/resource/h9gi-nx95.json");
                    let data = await res.json();
                } catch(error) {
                    console.error(error);
                }
            }
        }
    })
}

</script>

<style lang="scss" scoped>

</style>
>>>>>>> main
