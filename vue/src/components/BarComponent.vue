<template>
  <Bar :data="Data"
  :options="Options"/>
</template>

<script setup>

import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  Data: Object,
  Options: Object
});

</script>