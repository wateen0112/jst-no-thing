// https://nuxt.com/docs/api/configuration/nuxt-config
import postCssRtl from 'postcss-rtlcss'
import ar from './locale/ar.json'
import en from './locale/en.json'
import { fileURLToPath, URL } from 'url'

export default defineNuxtConfig({
    ssr: true,
    
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@pinia/nuxt'],
    build: {
        transpile: ['vuetify', 'vue-toastification'],
    },
    css: ['vuetify/lib/styles/main.sass', '~/assets/scss/index.scss', '~/assets/scss/vuetify.override.scss', 'vue-toastification/dist/index.css'],


    vite: {
        define: {
            'process.env.DEBUG': false,
        },
        css: {
            postcss: {
                plugins: [
                    postCssRtl({
                        mode: "override"
                    }),
                ]
            },
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./', import.meta.url)),
                '~': fileURLToPath(new URL('./', import.meta.url)),
                '~config': fileURLToPath(new URL('./app.config.ts', import.meta.url))
            }
        },
    },



    i18n: {
        locales: ["en", "ar", "nl"],
        defaultLocale: "en",
        vueI18n: {
            fallbackLocale: 'en',
            legacy: false,
            messages: { ar, en },
        },

        strategy: 'prefix_except_default'

    },
})
