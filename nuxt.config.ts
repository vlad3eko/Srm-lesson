export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: [
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        '@nuxt/image',
        '@nuxt/icon',
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
    }
})
