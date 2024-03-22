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
import { Bar } from 'vue-chartjs' 
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJs.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    data: () => ({
        loaded: false,
        chartData: {
            labels: [ {data.borough} ]
            datasets: [ {
                label: 'Crash',
                data: []
            }],
            async onMounted(){
                this.loaded=false
                try{
                    const res = await fetch ("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
                    let data = await res.json();

                }
            }
        }
    })
}

</script>

<style lang="scss" scoped>

</style>