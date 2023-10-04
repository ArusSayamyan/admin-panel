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
const supabase = useSupabaseClient()

const {id} = useRoute().params;
//fetch the products

let { data: product, error } = await supabase
    .from('products')
    .select("*")
    .eq('id', id)
    .single();

if (!product) {
  throw createError({statusCode: 404, statusMessage: 'Product not found', fatal: true})
}
definePageMeta({
  layout: 'admin-panel'
})
</script>

<style scoped>
</style>