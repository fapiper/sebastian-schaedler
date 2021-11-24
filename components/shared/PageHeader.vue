<template>
  <header class="container px-4 mx-auto max-w-5xl">
    <div class="relative min-h-screen pt-20">
      <span class="block absolute top-0 left-0 w-3 h-72 bg-yellow z-40"></span>
      <span class="page-header-title page-header-title--line">{{ title }}</span>
      <h1 class="page-header-title">
        {{ title }}
      </h1>
      <div class="relative max-w-lg z-20">
        <span class="inline-block w-full h-3 bg-yellow my-4"></span>
        <div class="space-y-2 text-center">
          <h2 class="font-semibold text-lg">
            {{ subtitle }}
          </h2>
          <p>{{ description }}</p>
        </div>
      </div>
      <img
        class="
          absolute
          top-32
          lg:top-1/2 lg:transform lg:-translate-y-1/2
          right-0
          w-full
          lg:w-3/4
          z-10
        "
        :src="
          $cloudinary.image.url(publicId, {
            width: width,
            crop: 'scale',
          })
        "
        :alt="alt"
      />
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
}
</script>

<style lang="postcss">
.page-header-title {
  @apply mt-56 text-6xl lg:text-9xl text-center lg:text-left tracking-wide uppercase font-bold leading-none;
}

.page-header-title--line {
  @apply absolute top-20 left-0 w-full lg:w-auto z-20;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: theme('colors.white');
}
</style>
