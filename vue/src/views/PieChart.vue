<template>
  <div v-if="loaded" class="pie">
    <Pie
      id="my-pie-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
