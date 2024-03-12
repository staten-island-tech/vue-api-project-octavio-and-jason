<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const crash = ref("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
async function getCrash() {
  let res = await fetch(crash)
  let data = await res.json();
  crash.value = data.crash_date;
}

onMounted(() => {
  getCrash();
})

console.log(crash)
</script>

<style lang="scss" scoped>

</style>
