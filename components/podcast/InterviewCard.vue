<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        <div class="w-full" data-aos="fade" data-aos-duration="1100">
          <img
            v-simple-parallax
            class="w-full"
            :src="
              $cloudinary.image.url('sebastian-schaedler/DSC00647-2_vi5zhp', {
                width: '450',
                crop: 'scale',
              })
            "
            alt="Podcast Interview"
          />
        </div>

        <div class="space-y-8">
          <PrefixTitle
            prefix="Podcast"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Interview</PrefixTitle
          >
          <p data-aos="fade-up" data-aos-duration="1000">
            Du möchtest gerne mit in unserem Podcast sein? Schreibe mir gerne
            direkt! Wir freuen uns auf dich!
          </p>
          <TheButton
            to="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            class="mt-8"
            >Schreibe uns!</TheButton
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="postcss"></style>
