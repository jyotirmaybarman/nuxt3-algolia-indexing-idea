import { defineNuxtConfig } from 'nuxt'
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    documentDriven: true
  }
})