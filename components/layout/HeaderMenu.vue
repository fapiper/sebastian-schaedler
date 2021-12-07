<template>
  <transition @enter="onEnter" @leave="onLeave">
    <div v-show="active">
      <div
        ref="bg"
        class="
          bg-transparent
          fixed
          top-0
          left-0
          w-full
          h-screen
          z-50
          bg-black bg-opacity-75
        "
        @click="$emit('update:active', false)"
      ></div>
      <div
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
        <div class="w-full"><div class="h-20"></div></div>
        <div class="p-4 flex-auto overflow-auto flex flex-col">
          <ul class="w-full flex flex-col space-y-4 text-3xl text-right">
            <li v-for="(link, index) of links" :key="index">
              <NuxtLink
                ref="link"
                :to="link.to"
                @click.native="closeMenu($refs.link[index])"
                >{{ link.title }}</NuxtLink
              >
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
              <a
                href="https://www.instagram.com/sebastian.schaedler/"
                target="_blank"
                rel="noreferrer noopener"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sebastian-schädler-18bb6aa7/"
                target="_blank"
                rel="noreferrer noopener"
                >LinkedIn</a
              >
            </li>
            <li>
              <a
                href="https://www.facebook.com/sebastian.schadler.96"
                target="_blank"
                rel="noreferrer noopener"
                >Facebook</a
              >
            </li>
          </ul>
        </div>
        <ul class="w-full text-right text-xs p-4">
          <li>
            Copyright <Copyright class="inline-block w-4 h-4 mb-0.5" />
            {{ new Date().getFullYear() }}
            Sebastian Schädler
          </li>
          <li>
            <NuxtLink to="/terms-and-privacy"
              >Impressum und Datenschutzerklärung</NuxtLink
            >
          </li>
        </ul>
      </div>
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
    this.tl = this.$gsap
      .timeline({
        paused: true,
        defaults: { ease: 'Power3.easeInOut', duration: 1 },
      })
      .fromTo(
        this.$refs.menu,
        {
          xPercent: 100,
        },
        {
          xPercent: 0,
        }
      )
      .fromTo(this.$refs.bg, { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
  },
  methods: {
    onEnter(el, done) {
      this.$scroll.lock()
      this.tl.play().then(done)
    },
    onLeave(el, done) {
      this.tl.reverse().then(done).then(this.$scroll.unlock)
    },
    closeMenu(link) {
      this.$emit('update:active', false)
    },
  },
}
</script>

<style lang="postcss"></style>
