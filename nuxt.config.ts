// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-og-image', 'nuxt-icon'],
    ogImage: {
      fonts: [
        // will load this font from Google fonts
        'Montserrat:400',
        'Montserrat:700'
      ]
  },
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
