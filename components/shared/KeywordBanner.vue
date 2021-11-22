<template>
  <section class='relative w-full overflow-hidden h-24'>
    <div ref='banner' class='flex absolute top-1/2 left-0 text-center transform -translate-y-1/2'>
      <span v-for='(keyword, index) of keywords' :key='index' class='bg-text !text-10-screen'>{{ keyword
        }} {{ index !== keyword.length - 1 ? '-' : '' }}</span>
    </div>

    <div class='container px-4 mx-auto lg:max-w-6xl'>
      <div class='flex justify-around absolute top-1/2 left-0 transform w-full -translate-y-1/2 title-sm'>
        <span v-for='keyword of keywords' :key='keyword'>{{ keyword }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keywords: ['Familie', 'Loyalität', 'Freiheit', 'Realness']
    }
  },
  mounted() {
    this.$gsap.to(this.$refs.banner, {
      xPercent: -20,
      scrollTrigger: {
        trigger: this.$refs.banner,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    })
  }
}
</script>

<style lang='postcss'>
</style>
