<template>
<div class="pt-[50px] p-4">
  <h1 class="text-2xl font-semibold text-center pt-[40px] uppercase">Favorite products</h1>
  <div class="grid grid-cols-4 gap-5 mt-10 lg:grid-cols-3 md:grid-cols-2" v-if="prods.length > 0">
    <div v-for="p in prods">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
  <p v-else class="text-center text-[35px] pt-[50px]">Favorites list is empty</p>
</div>
</template>

<script setup>
import { useProductsStore } from '@/store/index'

const prodStore = useProductsStore()
const prods = prodStore.getProducts

//select layout
definePageMeta({
  layout: 'admin-panel',
})
</script>

<style scoped>

</style>