export default defineNuxtConfig({
  compatibilityDate: "2026-07-20",

  modules: ["@nuxt/ui", "@nuxt/content"],
  css: ["~/assets/css/main.css"],
  routeRules: {
    "/": {
      prerender: true,
    },
    "/articles": {
      prerender: true,
    },
    "/articles/**": {
      prerender: true,
    },
    "/about": {
      prerender: true,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
