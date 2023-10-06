<template>
  <div class="card">
    <div class="flex justify-between">
      <span class="font-bold text-[#6b7280] text-[20px]" v-if="router.currentRoute.value.path !== '/adminPanel/basket'">{{
          product.price
        }}$</span>
      <span class="font-bold text-[#6b7280] text-[20px]" v-else>{{ product.price * product.count }}$</span>
      <div v-if="router.currentRoute.value.path !== '/adminPanel/basket'" class="flex">
        <span @click="incrementProductCount(product.id)" class="mr-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#6b7280"
                 class="w-6 h-6 cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
    </svg>
        </span>
        <span @click="deleteProduct(product.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="#6b7280" class="w-6 h-6 cursor-pointer">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
</svg>

        </span>


      </div>
      <span v-else
            class="p-[5px] rounded-[50%] bg-[#12b488] text-white w-[50px] h-[50px] flex justify-center items-center">{{
          product.count
        }}</span>


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
  const {data, error} = await supabase
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
  const {updateError} = await supabase
      .from('products')
      .update({count: newCount, is_favorite: true})
      .eq('id', productId);

  if (updateError) {
    console.error('Error updating product count:', updateError);
  }

  const { } = await supabase
      .from('products')
      .select('count')
}


//DELETE PRODUCT
async function deleteProduct(id: number) {
  const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id)
      .select()

}


</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>