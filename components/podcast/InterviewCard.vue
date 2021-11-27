<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-8 items-center">
        <img
          class="w-full"
          data-aos="fade"
          data-aos-duration="1100"
          :src="
            $cloudinary.image.url('sebastian-schaedler/DSC00892_w2zbiy', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Story of my Life"
        />

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
          <TheButton data-aos="fade-up" data-aos-duration="1000" class="mt-8"
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
