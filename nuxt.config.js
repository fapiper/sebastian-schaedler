export default {
  target: 'static',

  head: {
    title: 'Sebastian Schädler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    '~/plugins/vue-awesome-swiper.client.js',
    '~/plugins/vuelidate.js',
    '~/plugins/aos.client.js',
    '~/plugins/vue-vimeo-player.client.js',
  ],

  components: [
    '~/components/home/',
    '~/components/about/',
    '~/components/podcast/',
    '~/components/contact/',
    '~/components/shared/',
    '~/components/shared/icons',
    '~/components/layout/',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/cloudinary'],

  axios: {},

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  googleFonts: {
    families: {
      Rubik: [300, 400, 600, 800],
    },
  },

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true,
    },
  },

  pwa: {
    manifest: {
      lang: 'de',
    },
  },

  build: {
    transpile: ['splitting'],
  },
}
