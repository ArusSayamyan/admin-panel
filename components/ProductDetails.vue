<template>
<div class="card">
  <div class="grid grid-cols-2 gap-10 md:grid-cols-1">
    <div class="p-7">
      <img :src="product.image" alt="thumb" class="mx-auto w-full my-7">
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7"> {{ product.title }}</h2>
      <p class="text-xl my-7"> price - ${{ product.price }}</p>
      <h3 class="font-bold border-b-2 mb-4 pb-2">product description</h3>
      <p class="pb-7">{{ product.description }}</p>
      <button class="btn uppercase">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 inline-block mr-1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>

        <span>add to cart</span>
      </button>
    </div>
  </div>

</div>
</template>

<script setup lang="ts">
const {product} = defineProps(['product'])
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>