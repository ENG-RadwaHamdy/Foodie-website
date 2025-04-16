// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Anon',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  imports: {
    dirs: ["composables"],
  },

  experimental: {
    asyncContext:true,
    scanPageMeta:true,
    defaults: {
      nuxtLink: {
        componentName: "NuxtLink",
        activeClass: "router-link-active",
        exactActiveClass: "router-link-exact-active",
      },
    },
  },

  devtools: { enabled: false },
  pages: true,

  css: [
    "/public/assets/scss/main.scss",
    "vuetify/styles",
  ],

  components: [
    {
      path: "~/components",
    },
  ],

  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@vee-validate/nuxt"],

  vite: {
    build: {
      chunkSizeWarningLimit: 100000,
    }
  },

  build: {
    transpile: ["vuetify"],
  },

  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    vueI18n: "./i18n.config.ts",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    bundle: {
      optimizeTranslationDirective: false
    }
  },

  veeValidate: {
    autoImports: true, 
  },

  runtimeConfig: {
    public: {
      supabaseUrl: 'https://zcmvhkvyenhstmrzngys.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjbXZoa3Z5ZW5oc3RtcnpuZ3lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTc1OTYsImV4cCI6MjA2MDE5MzU5Nn0.rR8IZa_peuN5ZhiT9tZv0u3jeW87xoMGQp8ZDPixjP4'
    }
  },

  compatibilityDate: "2025-04-14"
})