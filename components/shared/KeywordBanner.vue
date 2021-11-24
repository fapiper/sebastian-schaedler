<template>
  <section class="relative w-full overflow-hidden">
    <div ref="banner" class="flex text-center">
      <span
        v-for="(keyword, index) of keywords"
        :key="index"
        class="bg-text !text-10-screen"
        >{{ keyword }} {{ index !== keyword.length - 1 ? '-' : '' }}</span
      >
    </div>

    <div
      class="
        absolute absolute
        top-1/2
        left-1/2
        container
        px-4
        lg:max-w-6xl
        flex
        w-full
        justify-around
        transform
        w-full
        -translate-y-1/2 -translate-x-1/2
      "
    >
      <span v-for="keyword of keywords" :key="keyword" class="title-sm">{{
        keyword
      }}</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keywords: ['Familie', 'Loyalität', 'Freiheit', 'Realness'],
    }
  },
  mounted() {
    this.$gsap.to(this.$refs.banner, {
      xPercent: -40,
      scrollTrigger: {
        trigger: this.$refs.banner,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.75,
      },
    })
  },
}
</script>

<style lang="postcss"></style>
