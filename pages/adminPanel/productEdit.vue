<template>
  <div class="pt-[80px] p-4 h-screen">
    <h1 class="capitalize text-2xl">Add new product</h1>
    <form action="" class="max-w-[450px] w-full mt-[35px] border p-4 shadow-lg bg-[#88888805]" @submit.prevent="saveNewProduct">
      <div class="px-[5px] border-gray border w-full border-box flex mb-[15px]">
      <span class="inline-block py-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor"
             class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
</svg>

      </span>
        <input type="text" placeholder="Product name" name="userName" v-model="prodName"
               class="outline-none ml-[5px] py-[5px] pl-[5px] bg-[unset] border-l">
      </div>
      <div class="px-[5px] border-gray border w-full border-box flex mb-[15px]">
      <span class="inline-block py-[5px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor"
           class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
</svg>


      </span>
        <input type="text" placeholder="Product Description" name="userName" v-model="prodDesc"
               class="outline-none ml-[5px] py-[5px] pl-[5px] bg-[unset] border-l">
      </div>
      <div class="px-[5px] border-gray border w-full border-box flex mb-[15px]">
      <span class="inline-block py-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor"
             class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>


      </span>
        <input type="number" placeholder="Product price" name="userName" v-model="prodPrice"
               class="outline-none ml-[5px] py-[5px] pl-[5px] bg-[unset] border-l">
      </div>
      <div class="px-[5px] border-gray border w-full border-box flex mb-[15px]">
      <span class="inline-block py-[5px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor"
             class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/>
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/>
</svg>


      </span>
        <input type="text" placeholder="Product category" name="userName" v-model="prodCategory"
               class="outline-none ml-[5px] py-[5px] pl-[5px] bg-[unset] border-l">
      </div>
      <button class="btn my-0 mx-auto block">Save</button>
    </form>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const router = useRouter();

const prodName = ref();
const prodDesc = ref()
const prodPrice = ref()
const prodCategory = ref()
const prodImg = ref('https://e7.pngegg.com/pngimages/958/748/png-clipart-maropost-shopify-e-commerce-logo-others-company-text-thumbnail.png')

async function saveNewProduct() {
  try {
    let { data: newProduct, error } = await supabase
        .from('products')
        .insert([
          {
            title: prodName.value,
            description: prodDesc.value,
            price: prodPrice.value,
            category: prodCategory.value,
            image: prodImg.value,
          }
        ])
        .select()
    await router.push('/adminPanel/products')

    if (error) {
      console.error("Supabase error:", error);
    }
  } catch (err) {
    console.error("An error occurred:", err);
  }
}


//ADD LAYOUT OF THIS PAGE
definePageMeta({
  layout: 'admin-panel',
})
</script>

<style scoped>

</style>