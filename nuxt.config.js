export default {
  target: 'static',

  head: {
    title: 'Sebastian Schädler',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [
    '~/plugins/vue-awesome-swiper.client',
    '~/plugins/vuelidate',
    '~/plugins/aos.client',
    '~/plugins/simple-parallax.client',
    '~/plugins/lazy-load.client',
    '~/plugins/scroll.client',
    '~/plugins/youtube.client',
    '~/plugins/jsonld',
    '~/plugins/vue-gtag.client',
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
    'cookie-universal-nuxt',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/cloudinary',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap', // If you use other modules, always declare the sitemap module at end of array
  ],

  env: {
    baseUrl: process.env.BASE_URL,
    dev: process.env.NODE_ENV !== 'production',
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },

  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      post: {
        'Content-Type': 'application/json',
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  googleFonts: {
    families: {
      Rubik: [300, 400, 600, 800],
    },
    display: 'swap',
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
    workbox: false,
    icon: {
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      purpose: 'maskable',
    },
    manifest: {
      name: 'Sebastian Schädler',
      short_name: 'Sebastian Schädler',
      lang: 'de',
      description:
        'Familienmensch. Networker. Charakter-Coach. Podcaster. Towarttrainer ‒ Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte lebenslang prozentuale Beteiligungen an deren Erfolg.',
      start_url: '',
      background_color: '#1E3143',
    },
    meta: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      name: 'Sebastian Schädler',
      description:
        'Familienmensch. Networker. Charakter-Coach. Podcaster. Towarttrainer ‒ Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte lebenslang prozentuale Beteiligungen an deren Erfolg.',
      theme_color: '#1E3143',
      lang: 'de',
      ogHost: 'https://sebastian-schaedler.com/',
      ogImage: {
        path: 'https://sebastian-schaedler.com/sebastianschaedler.png',
        width: '1200',
        height: '627',
      },
      twitterCard: 'summary_large_image',
      twitterCreator: 'Sebastian Schädler',
    },
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/terms-and-privacy'],
    Sitemap: 'https://sebastian-schaedler.com/sitemap.xml',
  },

  sitemap: {
    hostname: 'https://sebastian-schaedler.com',
    exclude: ['/terms-and-privacy'],
  },
}
