// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-og-image'],
  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com'
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
  experimental: {
    componentIslands: true,
  },
})
