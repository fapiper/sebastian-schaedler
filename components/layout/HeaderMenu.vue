<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div
      v-show="active"
      ref="menu"
      class="
        fixed
        top-0
        right-0
        h-screen
        w-full
        max-w-xs
        z-60
        bg-white
        text-black
        flex flex-col
        justify-end
        lg:hidden
      "
    >
      <div class="h-20 flex-auto w-full"></div>
      <div class="p-4 pt-20 flex-auto h-full overflow-auto flex flex-col">
        <ul class="w-full flex flex-col space-y-4 text-3xl text-right">
          <li v-for="(link, index) of links" :key="index">
            <NuxtLink ref="link" :to="link.to">{{ link.title }}</NuxtLink>
          </li>
        </ul>
        <ul
          class="
            flex flex-col
            justify-end
            flex-1
            mt-auto
            space-y-1
            text-right
            pt-4
          "
        >
          <li>
            <a href="/" target="_blank" rel="noreferrer noopener">Instagram</a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noreferrer noopener">YouTube</a>
          </li>
        </ul>
      </div>
      <ul class="flex-1 w-full text-right text-xs mt-auto p-4">
        <li>
          Copyright <Copyright class="inline-block w-4 h-4 mb-0.5" />
          {{ new Date().getFullYear() }}
          Sebastian Schädler
        </li>
        <li>Impressum / Datenschutzerklärung</li>
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      links: [
        { title: 'Startseite', to: '/' },
        { title: 'About', to: '/about' },
        { title: 'Business', to: '/#business-and-vision' },
        { title: 'Coaching', to: '/#coaching-character' },
        { title: 'Podcast', to: '/podcast' },
        { title: 'Kontakt', to: '/contact' },
      ],
      tl: null,
    }
  },
  mounted() {
    this.tl = this.$gsap.timeline({ paused: true }).fromTo(
      this.$refs.menu,
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        ease: 'Power3.easeInOut',
        duration: 1,
      }
    )
  },
  methods: {
    onEnter(el, done) {
      this.$scroll.lock()
      this.tl.play().then(done)
    },
    onLeave(el, done) {
      this.tl.reverse().then(done).then(this.$scroll.unlock)
    },
  },
}
</script>

<style lang="postcss"></style>
