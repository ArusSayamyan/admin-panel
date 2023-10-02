<template>
<div class="container p-4 mx-auto pt-[80px]">
  <h1 class="text-2xl font-semibold text-center">
    PRODUCTS
  </h1>
  <div class="grid grid-cols-4 gap-5 mt-10 lg:grid-cols-3 md:grid-cols-2">
    <div v-for="p in products">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'admin-panel',
})

const { data: products } = await useFetch('https://fakestoreapi.com/products')


//for change head information for example title
useHead({
  title: 'Nuxt theory | Merch'
})
</script>

<style scoped>

</style>