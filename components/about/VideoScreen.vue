<template>
  <section>
    <div class="container md:px-4 mx-auto max-w-2xl">
      <div
        class="relative w-full overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <img
          v-lazy
          class="relative z-10 w-full h-auto pointer-events-none"
          :data-src="
            $cloudinary.image.url('sebastian-schaedler/screen_bv9paw', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="About Mac Screen"
        />
        <WistiaVideo class="video" video-id="asf228uz6d" :options="{}" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {},
}
</script>

<style lang="postcss">
.video {
  @apply absolute;
  top: 4.8%;
  left: 4.3%;
  width: calc(100% - 7.8%);
  height: calc(72% - 5%);
}
</style>
