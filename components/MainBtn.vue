<template>
  <NuxtLink :to="path">
    <slot/>
  </NuxtLink>
</template>

<script setup lang="ts">

const { path } = defineProps(['path']);

</script>

<style scoped>

</style>