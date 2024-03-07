<template>
  <div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const pokemon = ref("https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95/about_data")
async function getPokemon() {
  let res = await fetch(pokemon)
  let data = await res.json();
  pokemon.value = data.results;
}

onMounted(() => {
  getPokemon();
})

console.log(pokemon.value)
</script>

<style lang="scss" scoped>

</style>
