import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import {defineNuxtPlugin} from "nuxt/app";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus)
})
