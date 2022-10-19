import { defineNuxtConfig } from 'nuxt'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    // meta
    meta: {
        title: 'Element Plus + Nuxt 3',
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'ElementPlus + Nuxt3',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // build
    build: {
        transpile: ['element-plus/es'],
    }
})
