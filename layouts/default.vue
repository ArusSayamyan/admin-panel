<template>
  <div>
    <header class="shadow-sm bg-green" v-if="!user">
      <nav class="container mx-auto p-4 flex justify-between items-center">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" alt="logo">
        </NuxtLink>
        <ul class="flex gap-4 justify-center basis-2/4">
          <li>
            <NuxtLink to="/" class="navLink">HOME</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="navLink">ABOUT</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="navLink">PRODUCTS</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="navLink">Contact</NuxtLink>
          </li>
        </ul >
        <NuxtLink to="/login" class="basis-1/4 items-end flex justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
        </NuxtLink>
      </nav>
    </header>

    <div>
      <slot/>
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser()
const router = useRouter();
</script>

<style scoped>
.router-link-exact-active {
  color: #fe4b47;
}
</style>
