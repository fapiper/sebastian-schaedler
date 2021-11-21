export default {
  target: 'static',

  head: {
    title: 'Sebastian Schädler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [],

  components: ['~/components/home/', '~/components/shared/', '~/components/layout/'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  axios: {},

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  },

  googleFonts: {
    families: {
      Rubik: true,
    }
  },

  pwa: {
    manifest: {
      lang: 'de'
    }
  },

  build: {}
}
