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
const supabase = useSupabaseClient()

import {newProducts} from '~/store'
const products = ref()
const newProdStore = newProducts()
definePageMeta({
  layout: 'admin-panel',
})

onMounted(() => {
  getProducts()
})
//GET ALL PRODUCTS
async function getProducts() {
  try {
    let { data: prods, error } = await supabase
        .from('products')
        .select();
    if (error) {
      console.error("Supabase error:", error);
    } else {
       products.value = prods
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}





// for change head information for example title
useHead({
  title: 'Nuxt theory | Merch'
})
</script>

<style scoped>

</style>