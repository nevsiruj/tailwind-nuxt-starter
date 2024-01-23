// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    tailwindcss: {
        cssPath: '~/assets/css/input.css'
    },
    css: [
        '@fortawesome/fontawesome-free/css/all.css'

    ]
  
    
})
