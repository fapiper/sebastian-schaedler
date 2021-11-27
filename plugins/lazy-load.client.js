import Vue from 'vue'
import LazyLoad from 'vanilla-lazyload'

Vue.directive('lazy', {
  inserted(el, binding, { context: ctx }) {
    el.item = []
    el.item.push(el)
    el.instance = new LazyLoad(binding.value, el.item)
  },
  unbind(el) {
    el.instance.destroy()
  },
})
