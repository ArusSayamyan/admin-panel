// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  supabase: {
      redirectOptions: {
          login: '/login',
          callback: '/adminPanel',
          exclude: ['/'],
      }
  }
})
