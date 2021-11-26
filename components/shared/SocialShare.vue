<template>
  <section class="overflow-hidden">
    <div class="container px-4 mx-auto lg:max-w-6xl">
      <h2
        class="relative title-sm text-center z-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Social Media
      </h2>
    </div>
    <div
      class="
        relative
        text-yellow
        overflow-hidden
        w-full
        -mb-9-screen
        sm:-mb-4-screen
      "
      :class="{ '!mb-0': dense }"
    >
      <span
        ref="banner"
        class="block relative bg-text transform text-center select-none"
        :class="{ 'bg-text--dense': dense }"
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
        <ul
          class="
            flex
            items-center
            justify-center
            space-x-4
            lg:space-x-8
            text-yellow
          "
        >
          <li>
            <Instagram
              class="!w-12 !h-12 bg-blue border-yellow"
              data-aos="fade-up"
              data-aos-duration="1000"
            ></Instagram>
          </li>
          <li>
            <Linkedin
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              class="!w-12 !h-12 !border-4 !p-2 bg-blue border-yellow"
            ></Linkedin>
          </li>
          <li>
            <Facebook
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              class="!w-12 !h-12 !border-4 !p-1.5 bg-blue border-yellow"
            ></Facebook>
          </li>
          <li>
            <Podcast
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              class="!w-12 !h-12 bg-blue border-yellow"
            ></Podcast>
          </li>
          <li>
            <Youtube
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              class="!w-12 !h-12 !border-4 !p-1.5 bg-blue border-yellow"
            ></Youtube>
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
        xPercent: -10,
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
