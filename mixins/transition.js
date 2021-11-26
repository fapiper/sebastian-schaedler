let firstPaint = true
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
      .set('[data-transition-layout]', {
        autoAlpha: 0,
        y: 40,
      })
      .to('[data-transition-bg]', { height: 0 }, 0.6)
      .to('[data-transition-logo]', { y: -450, autoAlpha: 0 }, 0)
      .to(
        '[data-transition-layout]',
        {
          y: 0,
        },
        1.1
      )

    onPageLeave = tl()
      .set('[data-transition-logo]', { autoAlpha: 0, y: 40 })
      .to(
        '[data-transition-layout]',
        {
          autoAlpha: 0,
          y: 80,
          ease: 'Power4.easeOut',
        },
        0
      )
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
      onPageLeave.play().then(() => {
        this.$nuxt.$emit('page-leave')
        done()
      })
    },
    enter(el, done) {
      done()
    },
    afterEnter() {
      if (firstPaint) {
        firstPaint = false
      }
      onPageEnter.play()
    },
  },
}
