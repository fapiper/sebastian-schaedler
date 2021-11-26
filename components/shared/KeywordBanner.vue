<template>
  <section class="relative w-full overflow-hidden">
    <div
      class="
        absolute
        top-1/2
        lg:top-unset
        -translate-y-1/2
        lg:translate-y-0 lg:relative
      "
    >
      <div ref="banner" class="flex text-center">
        <span
          v-for="(keyword, index) of keywords"
          :key="index"
          class="bg-text bg-text--dense"
          >{{ keyword }} {{ index !== keyword.length - 1 ? '-' : '' }}</span
        >
      </div>
    </div>

    <div
      class="
        relative
        lg:absolute lg:top-1/2 lg:left-1/2
        container
        px-4
        max-w-5xl
        flex flex-col
        lg:flex-row
        w-full
        lg:justify-around lg:transform
        w-full
        lg:-translate-y-1/2 lg:-translate-x-1/2
        z-10
        text-right
        lg:text-center
        space-y-4
        lg:space-y-0
      "
    >
      <span
        v-for="(keyword, index) of keywords"
        :key="keyword"
        class="title-sm"
        data-aos="fade-up"
        data-aos-duration="1000"
        :data-aos-delay="index * 100"
        >{{ keyword }}</span
      >
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
