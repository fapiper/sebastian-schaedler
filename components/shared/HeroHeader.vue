<template>
  <header class="container px-4 mx-auto max-w-5xl">
    <div
      class="
        relative
        min-h-screen
        grid
        lg:grid-cols-2
        items-center
        pt-40
        lg:py-20
      "
    >
      <div class="relative">
        <span
          ref="lineVertical"
          class="
            block
            absolute
            -top-4
            transform
            -translate-y-full
            left-0
            w-3
            h-screen
            bg-yellow
          "
        ></span>

        <h1
          ref="title"
          class="
            text-5xl
            lg:text-7xl
            tracking-wide
            uppercase
            font-bold
            leading-none
          "
        >
          {{ title }}
        </h1>
        <span
          ref="lineHorizontal"
          class="inline-block w-full h-3 bg-yellow my-4"
        ></span>
        <p ref="description">{{ description }}</p>
      </div>
      <div
        ref="img"
        v-simple-parallax="{ overflow: true, scale: 2 }"
        class="
          relative
          top-0
          left-0
          lg:left-auto lg:right-0
          w-full-4
          h-full
          flex
          mt-20
          lg:mt-0 lg:pl-20
        "
      >
        <img
          class="h-full w-full object-cover"
          :src="
            $cloudinary.image.url('sebastian-schaedler/DSC09735-2_zopcjz', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Sebastian Schädler"
        />
        <ul
          class="
            absolute
            top-0
            lg:top-auto lg:bottom-0
            right-0
            p-4
            flex
            items-center
            space-x-1
            text-yellow
          "
        >
          <li>
            <Instagram></Instagram>
          </li>
          <li>
            <Linkedin class="border-yellow"></Linkedin>
          </li>
          <li>
            <Facebook class="border-yellow"></Facebook>
          </li>
        </ul>
        <img
          v-simple-parallax="{ overflow: true, orientation: 'down', scale: 2 }"
          class="
            absolute
            bottom-0
            left-0
            transform
            -translate-x-8
            lg:translate-x-4
            translate-y-16
            w-80
          "
          :src="
            $cloudinary.image.url('sebastian-schaedler/logo_fkcnoj', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Sebastian Schädler Unterschrift"
        />
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
    description: {
      type: String,
      required: true,
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
          skewX: -6,
        },
        0.2
      )
      .from(
        [this.$refs.title, this.$refs.description],
        {
          autoAlpha: 0,
          y: 40,
          stagger: 0.2,
          skewX: -1,
        },
        0
      )

    this.$nuxt.$on('page-transition-enter-after', () => this.tl.play(0))
  },
  methods: {
    animate() {},
  },
}
</script>

<style lang="postcss"></style>
