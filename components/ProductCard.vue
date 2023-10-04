<template>
  <div class="card">
    <div class="flex justify-between">
      <span class="font-bold text-[#6b7280] text-[20px]" v-if="router.currentRoute.value.path !== '/adminPanel/basket'">{{ product.price }}$</span>
      <span class="font-bold text-[#6b7280] text-[20px]" v-else>{{ product.price * product.count }}$</span>
      <span @click="incrementProductCount(product.id)"  v-if="router.currentRoute.value.path !== '/adminPanel/basket'">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280"
          class="w-6 h-6 cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
    </svg>

</span>
      <span v-else class="p-[5px] rounded-[50%] bg-[#12b488] text-white w-[50px] h-[50px] flex justify-center items-center">{{ product.count }}</span>


    </div>
    <img :src="product.image" alt="" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate text-center">{{ product.title }}</p>
    <NuxtLink :to="`/adminPanel/products/${product.id}`">
      <p class="btn my-4 text-center">view details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const {product} = defineProps(['product']);
const router = useRouter();

async function incrementProductCount(productId: number) {
  // Fetch the current count from the database
  const { data, error } = await supabase
      .from('products')
      .select('count')
      .eq('id', productId)
      .single();

  if (error) {
    console.error('Error fetching product:', error);
    return;
  }

  // Calculate the new count
  const currentCount = data.count;
  const newCount = currentCount + 1;

  // Update the count in the database
  const { updateError } = await supabase
      .from('products')
      .update({ count: newCount })
      .eq('id', productId);

  if (updateError) {
    console.error('Error updating product count:', updateError);
    return;
  }

}


</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>