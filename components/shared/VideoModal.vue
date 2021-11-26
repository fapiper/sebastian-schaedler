<template>
  <transition :css="false" @enter="enter" @leave="leave">
    <div v-show="active" class="modals" @click="toggleModal(false)">
      <div ref="modalOverlay" class="modals__overlay"></div>
      <div ref="videoModal" class="ak-video-modal" @click.stop="">
        <div class="ak-video-modal__header">
          <button
            class="ak-video-modal__header__close"
            @click="toggleModal(false)"
          >
            <span></span> <span></span>
          </button>
        </div>
        <TheVideo
          v-if="vimeoId !== ''"
          ref="video"
          class="ak-video-modal__video"
          :vimeo-id="vimeoId"
          controls="vimeo"
          responsive
        ></TheVideo>
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
    }
  },
  mounted() {
    this.$nuxt.$on('toggle-video-modal', ({ active, vimeoId }) => {
      console.log('toggle-video-modal', active, vimeoId)
      this.toggleModal(active, vimeoId)
    })

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
    toggleModal(active, vimeoId) {
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
.modals {
  @apply fixed top-0 left-0 w-full h-screen z-80;
}

.modals__overlay {
  @apply absolute top-0 left-0 w-full h-screen bg-black bg-opacity-75;
}

.ak-video-modal {
  @apply fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md lg:max-w-2xl lg:max-w-5xl;
}
.ak-video-modal__header {
  @apply w-full flex pb-4;
}
.ak-video-modal__header__close {
  @apply relative w-8 h-8 ml-auto;
}

.ak-video-modal__header__close span {
  @apply absolute top-1/2 left-0 block w-full bg-white;
  height: 0.15rem;
  margin-top: -0.0875rem;
}

.ak-video-modal__header__close span:nth-child(1) {
  @apply transform rotate-45;
}

.ak-video-modal__header__close span:nth-child(2) {
  @apply transform -rotate-45;
}

.ak-video-modal____video {
  @apply w-full bg-shadow-lg bg-black;
}
</style>
