let onPageEnter = null
let onPageLeave = null

export default {
  mounted() {
    const tl = () =>
      this.$gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: 'Power4.easeInOut' },
      })
    onPageEnter = tl()
      .to('[data-transition-bg]', { height: 0 }, 0.6)
      .to('[data-transition-logo]', { y: -450, autoAlpha: 0 }, 0)

    onPageLeave = tl()
      .set('[data-transition-logo]', { autoAlpha: 0, y: 40 })
      .to('[data-transition-logo]', { autoAlpha: 1, y: 0 }, 0.8)
      .to(
        '[data-transition-bg]',
        { transformOrigin: 'bottom', height: '100vh' },
        0.4
      )
  },
  transition: {
    css: false,
    mode: 'out-in',
    appear: true,
    leave(el, done) {
      this.$scroll.lock()
      this.$nuxt.$emit('page-transition-leave-after')
      onPageLeave.play().then(() => {
        done()
      })
    },
    enter(el, done) {
      onPageEnter.play().then(() => {
        this.$nuxt.$emit('page-transition-enter-after')
        this.$scroll.unlock()
        this.$ScrollTrigger.refresh()
        this.$AOS.refresh()
        done()
      })
    },
  },
}
