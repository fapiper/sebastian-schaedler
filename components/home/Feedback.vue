<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <PrefixTitle
        class="mb-4"
        prefix="Feedback"
        data-aos="fade-up"
        data-aos-duration="1000"
        >von anderen</PrefixTitle
      >
    </div>

    <div
      v-swiper:feedbackSlider="options"
      :auto-destroy="false"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(feedback, index) in feedbacks"
          :key="index"
          class="swiper-slide"
        >
          <div class="w-full px-4 lg:px-0">
            <div class="h-64 bg-blue-dark"></div>
            <div class="text-center p-4 bg-blue-dark">
              <p class="mb-2">„{{ feedback.text }}”</p>
              <h4 class="text-yellow text-xl font-semibold uppercase">
                {{ feedback.name }}
              </h4>
              <h5 class="text-xs">
                {{ feedback.subtitle }}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
class Feedback {
  constructor(name, subtitle, text, video) {
    this.name = name
    this.subtitle = subtitle
    this.text = text
    this.video = video
  }
}
export default {
  data() {
    return {
      options: {
        slidesPerView: 1,
        centeredSlides: true,
        breakpoints: {
          640: {
            initialSlide: 1,
            slidesPerView: 2,
          },
          1024: {
            initialSlide: 1,
            spaceBetween: 16,
            slidesPerView: 3,
          },
          1280: {
            initialSlide: 2,
            slidesPerView: 4,
            spaceBetween: 16,

            freeMode: {
              enabled: true,
              sticky: true,
            },
          },
        },
      },
      feedbacks: Array(6).fill(
        new Feedback(
          'Marco Wirth',
          'Unternehmer',
          'Manuel ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          ''
        )
      ),
    }
  },
}
</script>

<style lang="postcss"></style>
