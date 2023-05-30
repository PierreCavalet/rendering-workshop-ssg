// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/"].concat(
        Array.from({ length: 10 }, (_, i) => i + 1).map(
          (id) => `/pokemon/${id}`
        )
      ),
    },
  },
});
