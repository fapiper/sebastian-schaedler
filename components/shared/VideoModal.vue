<template>
  <transition :css="false" @enter="enter" @leave="leave">
    <div
      v-show="active"
      class="fixed top-0 left-0 w-full h-screen z-80"
      @click="toggle(false)"
    >
      <div
        ref="modalOverlay"
        class="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75"
      ></div>
      <div
        ref="videoModal"
        class="
          fixed
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          p-4
          w-full
          max-w-md
          lg:max-w-2xl lg:max-w-5xl
        "
        @click.stop=""
      >
        <div class="w-full flex pb-4">
          <button class="relative w-8 h-8 ml-auto close" @click="toggle(false)">
            <span></span> <span></span>
          </button>
        </div>
        <div ref="video" class="w-full bg-shadow-lg bg-black"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tl: null,
      active: false,
      vimeoId: '',
      videoOptions: {
        muted: null,
        autoplay: null,
        responsive: null,
        loop: true,
        controls: false,
        dnt: true,
        color: '16427d',
      },
    }
  },
  mounted() {
    this.tl = this.$gsap
      .timeline({ paused: true })
      .fromTo(
        this.$refs.modalOverlay,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: 'Power2.easeOut', duration: 0.4 }
      )
      .fromTo(
        this.$refs.videoModal,
        { yPercent: -50, y: '1rem', autoAlpha: 0 },
        {
          y: '0',
          yPercent: -50,
          autoAlpha: 1,
          ease: 'Power2.easeInOut',
          duration: 0.4,
        },
        0
      )
  },
  methods: {
    toggle(active, vimeoId) {
      if (active) this.vimeoId = vimeoId
      else this.$refs.video.pause()
      this.active = active
    },
    async enter(el, done) {
      done()
      await this.tl.play()
    },
    async leave(el, done) {
      await this.tl.reverse()
      done()
    },
  },
}
</script>

<style lang="postcss" scoped>
.close span {
  @apply absolute top-1/2 left-0 block w-full bg-white;
  height: 0.15rem;
  margin-top: -0.0875rem;
}

.close span:nth-child(1) {
  @apply transform rotate-45;
}

.close span:nth-child(2) {
  @apply transform -rotate-45;
}
</style>
