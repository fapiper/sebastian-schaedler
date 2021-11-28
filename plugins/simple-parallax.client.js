import Vue from 'vue'
import simpleParallax from 'simple-parallax-js'

Vue.directive('simple-parallax', {
  inserted(el, binding) {
    const defaultOptions = { transition: 'ease-in-out' }
    // eslint-disable-next-line new-cap,no-new
    new simpleParallax(el, { ...defaultOptions, ...binding.value })
  },
})
