export default ({ app }, inject) => {
  inject('scroll', {
    toggle() {
      document.body.classList.toggle('overflow-hidden', 'h-full')
    },

    lock() {
      document.body.classList.add('overflow-hidden', 'h-full')
    },

    unlock() {
      document.body.classList.remove('overflow-hidden', 'h-full')
    },
  })
}
