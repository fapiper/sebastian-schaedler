<template>
  <div ref="imageSlider" v-swiper:imageSlider="options">
    <div class="swiper-wrapper">
      <div v-for="(id, index) in imageIds" :key="index" class="swiper-slide">
        <img
          class="w-full"
          :src="
            $cloudinary.image.url(id, {
              width: '350',
              height: '622',
              crop: 'fill',
            })
          "
          :alt="'Image Slider' + index"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 2,
        spaceBetween: 16,
        centeredSlides: true,
        freeMode: {
          enabled: true,
          sticky: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 3,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 5,
          },
        },
      },
      imageIds: [
        'sebastian-schaedler/DSC09965-2_lqii0x',
        'sebastian-schaedler/DSC00963-2_wxj4rx',
        'sebastian-schaedler/DSC00892_w2zbiy',
        'sebastian-schaedler/DSC09848-4_c9vsgk',
      ],
    }
  },
  mounted() {
    this.$gsap.to(this.$refs.imageSlider, {
      scrollTrigger: {
        trigger: this.$refs.imageSlider,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const progress = Math.round(self.progress * 100) / 100
          this.imageSlider.setProgress(progress * 0.33, 750)
        },
      },
    })
  },
}
</script>
