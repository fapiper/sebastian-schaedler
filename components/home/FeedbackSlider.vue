<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <PrefixTitle
        class="mb-16"
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
            <div class="video-container">
              <VueYoutubePlayer :video-id="feedback.video"></VueYoutubePlayer>
            </div>

            <div class="text-center p-4 bg-blue-dark">
              <p class="mb-2">„{{ feedback.text }}”</p>
              <h3 class="text-yellow text-xl font-semibold uppercase">
                {{ feedback.name }}
              </h3>
              <h4 class="text-xs">
                {{ feedback.subtitle }}
              </h4>
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
      feedbacks: [
        new Feedback(
          'Andreas Küffner',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
        new Feedback(
          'Fabian Schädler',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
        new Feedback(
          'Marco Wirth',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
        new Feedback(
          'Margit Hodecek',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
        new Feedback(
          'Walter Rotter',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
        new Feedback(
          'Oliver Sorg',
          'Unternehmer',
          'Sebastian ist wirklich ein beeindruckender Mensch. Ich bin sehr froh, ihn zu kennen.',
          'ScMzIvxBSi4'
        ),
      ],
    }
  },
}
</script>

<style lang="postcss">
.video-container {
  @apply relative bg-blue-dark w-full overflow-hidden;
}

.video-container::after {
  @apply block;
  padding-top: 56.25%;
  content: '';
}

.video-container iframe {
  @apply absolute top-0 left-0 w-full h-full;
}
</style>
