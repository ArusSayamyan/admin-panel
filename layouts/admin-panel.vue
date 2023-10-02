<template>
  <div class="adminPanel container my-0 mx-auto">
    <div class="sidebar min-w-[200px] fixed h-full bg-[#8881] z-10">
      <ul class="menuList">
        <li class="py-4">
          <img src="~/assets/img/logo.png" alt="logo">
        </li>
        <li class="listItem hover:bg-[#e12503] hover:text-white">
          <NuxtLink to="/adminPanel" class="itemLink py-[10px] px-[15px] block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>

            <span class="capitalize">Dashboard</span>
          </NuxtLink>
        </li>
        <li class="listItem hover:bg-[#e12503] hover:text-white">
          <NuxtLink to="/adminPanel/products" class="itemLink py-[10px] px-[15px] block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"/>
            </svg>
            <span class="capitalize">product list</span>
          </NuxtLink>
        </li>
        <li class="listItem hover:bg-[#e12503] hover:text-white">
          <NuxtLink to="/adminPanel/productEdit" class="itemLink py-[10px] px-[15px] block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
            </svg>

            <span class="capitalize">product edit</span>
          </NuxtLink>
        </li>
        <li class="listItem hover:bg-[#e12503] hover:text-white">
          <NuxtLink to="/adminPanel/productCard" class="itemLink py-[10px] px-[15px] block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"/>
            </svg>

            <span class="capitalize">product card</span>
          </NuxtLink>
        </li>
        <li class="listItem hover:bg-[#e12503] hover:text-white">
          <NuxtLink to="/adminPanel/payment" class="itemLink py-[10px] px-[15px] block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
            </svg>

            <span class="capitalize">product payment</span>
          </NuxtLink>
        </li>
        <li class="listItem py-[10px] px-[15px] block hover: hover:text-[#e12503] capitalize">
          <a href="#" class="itemLink">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6 inline-block mr-[5px]">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
            </svg>


            <span @click="logout" class="cursor-pointer">log out</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="ml-[200px] flex justify-end bg-gradient-to-r from-[#e12503] to-[#85060c] fixed max-w-[1336px] w-full z-20">
      <div class="p-2 max-w-fit box-border">
        <NuxtLink to="/adminPanel/basket">
        <div class="inline-block relative">
          <span class="p-[5px] rounded-[50%] bg-[#ffff] text-[10px] text-red w-[12px] h-[12px] flex justify-center items-center absolute left-[-5px] top-[-4px]">{{countOfProds}}</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 cursor-pointer inline-block mr-[5px]">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </div>
        </NuxtLink>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white"
             class="w-6 h-6 mx-auto inline-block mr-[5px]">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
        </svg>
        <span class="text-white">{{ user.email }}</span>
      </div>
    </div>
    <div class="max-w-[1336px] ml-[200px]">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/store/index'

const prodStore = useProductsStore()
const user = useSupabaseUser()
const router = useRouter();
const client = useSupabaseClient();

//get selected products
const prods = prodStore.getProducts

const logout = async () => {
  try {
    const {error} = await client.auth.signOut();
    if (error) throw error
    await router.push('/')
  } catch (error) {
    console.log(error)
  }
};

const countOfProds = computed(() => {
  return prods.reduce((acc, item) => {
    return acc + item.count
  }, 0)
})




//get count of selected products
</script>

<style scoped>

</style>