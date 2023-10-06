// https://nuxt.com/docs/api/configuration/nuxt-config
import VueApexCharts from "vue3-apexcharts";
export default defineNuxtConfig({

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@pinia/nuxt'],

    plugins: [
        { src: '~/plugins/vue-apexchart.js', mode: 'client' }],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    supabase: {
      redirectOptions: {
          login: '/login',
          callback: '/adminPanel',
          exclude: ['/'],
      }
  }
})
