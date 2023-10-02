<template>
  <div>
    <!--    change title of this page-->
    <Head>
      <Title>{{ product.title }}</Title>
      <Meta name="description" :content="product.description"/>
    </Head>
    <ProductDetails :product="product"/>
  </div>
</template>

<script setup>
const {id} = useRoute().params;
console.log(useRoute().params)
const url = 'https://fakestoreapi.com/products/' + id

//fetch the products

const {data: product} = await useFetch(url, {key: id});

if (!product.value) {
  throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}
definePageMeta({
  layout: 'admin-panel'
})
</script>

<style scoped>
</style>