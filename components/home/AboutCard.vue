<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-8">
        <div class="space-y-4 lg:space-y-8">
          <PrefixTitle
            prefix="About"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Sebastian</PrefixTitle
          >
          <div data-aos="fade-up" data-aos-duration="1000">
            <p class="mb-2">
              Networker.
              <span class="text-yellow">Charakter-Trainer.</span> Torwart-Coach.
              <span class="text-yellow">Podcaster.</span>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <TheButton data-aos="fade-up" data-aos-duration="1000" to="about">
            Mehr erfahren
          </TheButton>
        </div>
        <div class="order-first lg:order-none">
          <script
            src="//fast.wistia.com/assets/external/E-v1.js"
            async
          ></script>
          <div
            class="
              wistia_embed wistia_async_asf228uz6d
              popover=true
              popoverContent=link
              block
              relative
            "
          >
            <a class="block w-full" href="#">
              <img
                class="
                  wistia_embed wistia_async_asf228uz6d
                  popover=true
                  popoverContent=link
                  w-full
                "
                :src="
                  $cloudinary.image.url('sebastian-schaedler/video_r8pkea', {
                    width: '750',
                    crop: 'scale',
                  })
                "
                alt="Video Preview"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    showVideo() {},
  },
}
</script>

<style lang="postcss"></style>
