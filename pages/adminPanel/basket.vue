<template>
<div class="pt-[50px] p-4">
  <h1 class="text-2xl font-semibold text-center pt-[40px] uppercase">Favorite products</h1>
  <div class="grid grid-cols-4 gap-5 mt-10 lg:grid-cols-3 md:grid-cols-2" v-if="length > 0">
    <div v-for="p in prods.value">
      <ProductCard :product="p"></ProductCard>
    </div>
  </div>
  <p v-else class="text-center text-[35px] pt-[50px]">Favorites list is empty</p>
</div>
</template>

<script setup>
const supabase = useSupabaseClient()

const prods = reactive([])
const length = ref(0)

async function getFavProducts() {
  try {
    let { data: favProds, error } = await supabase
        .from('products')
        .select()
    .eq('is_favorite', true)
    if (error) {
      console.error("Supabase error:", error);
    } else {
      prods.value = favProds
      length.value = favProds.length
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}

onMounted(() => {
  getFavProducts()
})

//select layout
definePageMeta({
  layout: 'admin-panel',
})
</script>

<style scoped>

</style>