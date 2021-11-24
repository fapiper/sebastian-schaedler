<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-8">
          <h2 class="title" data-title-prefix="/about">Sebastian</h2>
          <div>
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
          <TheButton to="about"> Mehr erfahren </TheButton>
        </div>
        <div>
          <img
            class="w-full"
            :src="
              $cloudinary.image.url(
                'sebastian-schaedler/video_preview_xciqnd',
                {
                  width: '750',
                  crop: 'scale',
                }
              )
            "
            alt="Video Preview"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss"></style>
