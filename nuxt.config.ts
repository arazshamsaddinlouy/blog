export default defineNuxtConfig({
  compatibilityDate: "2026-07-19",
  modules: ["@nuxt/ui", "@nuxt/content"],

  css: ["~/assets/css/main.css"],

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Araz Blog",
      meta: [
        {
          name: "description",
          content:
            "Frontend development articles about React, Angular, Vue, Nuxt and JavaScript.",
        },
      ],
    },
  },
});
