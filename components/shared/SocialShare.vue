<template>
  <section class="overflow-hidden">
    <div class="container px-4 mx-auto lg:max-w-6xl">
      <h2 class="relative title-sm text-center z-10">Social Media</h2>
    </div>
    <div
      class="relative text-yellow overflow-hidden w-full -mt-16 -mb-32"
      :class="{ '!-my-8': dense }"
    >
      <span
        ref="banner"
        class="
          relative
          left-1/2
          bg-text
          transform
          -translate-x-1/2
          text-center
          select-none
        "
        :class="{ '!text-10-screen': dense }"
        >Sebastian Schädler Sebastian Schädler</span
      >
      <div
        class="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
          container
          px-4
          mx-auto
          lg:max-w-5xl
        "
      >
        <ul class="flex items-center justify-center space-x-8">
          <li>
            <Instagram class="!w-12 !h-12 bg-blue"></Instagram>
          </li>
          <li>
            <Facebook class="!w-12 !h-12 !border-4 !p-3 bg-blue"></Facebook>
          </li>
          <li>
            <Linkedin class="!w-12 !h-12 !border-4 !p-2 bg-blue"></Linkedin>
          </li>
          <li>
            <Podcast class="!w-12 !h-12 bg-blue"></Podcast>
          </li>
          <li>
            <Youtube class="!w-12 !h-12 !border-4 !p-2 bg-blue"></Youtube>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    dense: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.dense) {
      this.$gsap.to(this.$refs.banner, {
        xPercent: -40,
        scrollTrigger: {
          trigger: this.$refs.banner,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.75,
        },
      })
    }
  },
}
</script>

<style lang="postcss"></style>
