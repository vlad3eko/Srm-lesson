export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            appwriteEndpoint: process.env.NUXT_PUBLIC_APPWRITE_ENDPOINT,
            appwriteProjectId: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_ID,
            appwriteProjectName: process.env.NUXT_PUBLIC_APPWRITE_PROJECT_NAME,
        },
    },
    modules: [
      '@nuxt/ui',
      '@nuxtjs/tailwindcss',
      'shadcn-nuxt',
      '@nuxt/image',
      '@nuxt/icon',
      '@pinia/nuxt',
      [
          '@nuxtjs/google-fonts',
          {
              families: {
                  Lato: {
                      wght: [300, 400, 700],
                      ital: [300],
                  },
              },
          },
      ],
    ],
    "ui": {
        "fonts": false
    },
    shadcn: {
        prefix: 'V',
        componentDir: '@/components/ui'
    },
    pinia: {
        storesDirs: ['@/store/**']
    }
})
