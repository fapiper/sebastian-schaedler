import Vue from 'vue'
import NuxtJsonld from 'nuxt-jsonld'

Vue.use(NuxtJsonld)

// you can set the indentation
Vue.use(NuxtJsonld, {
  space: process.env.dev ? 2 : 0, // default: 2
})
