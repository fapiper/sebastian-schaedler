<template>
  <header class="container px-4 mx-auto max-w-5xl overflow-hidden">
    <div class="relative lg:min-h-screen pt-20">
      <span
        ref="lineVertical"
        class="block absolute top-0 left-0 w-3 h-84 bg-yellow z-40"
      ></span>
      <img
        ref="img"
        class="
          absolute
          top-0
          lg:top-1/2 lg:transform lg:-translate-y-1/2
          -right-4
          w-full-8
          max-w-unset
          h-96
          lg:right-0 lg:w-3/4
          z-10
          object-cover
        "
        :src="
          $cloudinary.image.url(publicId, {
            width: width,
            crop: 'scale',
          })
        "
        :alt="alt"
      />

      <div ref="title" class="relative w-full max-w-lg text-center mt-64">
        <h1 class="page-header-title">
          {{ title }}
        </h1>
        <span class="page-header-title page-header-title--line">{{
          title
        }}</span>
        <div class="relative z-20">
          <span
            ref="lineHorizontal"
            class="inline-block w-full h-3 bg-yellow my-4"
          ></span>
          <div ref="description" class="space-y-1">
            <h2 class="font-semibold text-lg">
              {{ subtitle }}
            </h2>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      tl: null,
    }
  },
  mounted() {
    this.tl = this.$gsap
      .timeline({
        paused: true,
        defaults: { duration: 1, ease: 'Power2.easeOut' },
      })
      .add(
        this.$gsap
          .timeline()
          .from(this.$refs.lineVertical, {
            scaleY: 0,
            transformOrigin: 'top',
          })
          .from(this.$refs.lineHorizontal, {
            scaleX: 0,
            transformOrigin: 'left',
          }),
        0
      )
      .from(
        this.$refs.img,
        {
          autoAlpha: 0,
          y: 200,
          skewX: -4,
        },
        0.2
      )
      .from(
        [
          this.$refs.title.querySelectorAll('.page-header-title'),
          this.$refs.description,
        ],
        {
          autoAlpha: 0,
          y: 60,
          stagger: 0.2,
          skewX: -4,
        },
        0
      )

    this.$nuxt.$on('page-transition-enter-after', () => this.tl.play(0))
  },
}
</script>

<style lang="postcss">
.page-header-title {
  @apply text-7xl sm:text-9xl text-center lg:text-left tracking-wide uppercase font-bold leading-none;
}

.page-header-title--line {
  @apply absolute top-0 left-0 w-full lg:w-auto z-20;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: theme('colors.white');
}
</style>
