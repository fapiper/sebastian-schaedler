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
      <div class="p-4 pt-20 flex-auto h-full overflow-auto">
        <ul class="w-full flex flex-col space-y-4 text-3xl text-right">
          <li>
            <NuxtLink to="/">Startseite</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Business</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/coaching">Coaching</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/podcast">Podcast</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Kontakt</NuxtLink>
          </li>
        </ul>
      </div>
      <ul
        class="
          flex flex-1
          w-full
          items-center
          justify-end
          space-x-4
          mt-auto
          text-black
          p-4
          border-t border-gray-400
          js-icons
        "
      >
        <li>
          <Instagram class="!w-8 !h-8 border-0"></Instagram>
        </li>
        <li>
          <Linkedin class="!w-8 !h-8 border-0"></Linkedin>
        </li>
        <li>
          <Facebook class="!w-8 !h-8 border-0"></Facebook>
        </li>
        <li>
          <Podcast class="!w-8 !h-8 border-0"></Podcast>
        </li>
        <li>
          <Youtube class="!w-8 !h-8 !p-1 border-0"></Youtube>
        </li>
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
      this.tl.play().then(done)
    },
    onLeave(el, done) {
      this.tl.reverse().then(done)
    },
  },
}
</script>

<style lang="postcss"></style>
