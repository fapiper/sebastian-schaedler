<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl flex flex-col">
      <h2
        class="title-sm text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Ich stehe für
      </h2>

      <ul
        class="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <li
          v-for="value in values"
          :key="value.title"
          class="
            px-4
            py-12
            bg-blue-dark
            space-y-4
            flex flex-col
            items-center
            justify-center
          "
        >
          <img
            v-lazy
            class="w-16"
            :src="
              $cloudinary.image.url(value.imageId, {
                width: '250',
                crop: 'scale',
              })
            "
            :alt="value.title"
          />

          <h4 class="text-lg uppercase text-yellow">{{ value.title }}</h4>
        </li>
      </ul>
      <TheButton class="mx-auto mt-8" to="contact">Kontaktiere mich!</TheButton>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      values: [
        { title: 'Offenheit', imageId: 'sebastian-schaedler/Offenheit_erauaa' },
        {
          title: 'Authentizität',
          imageId: 'sebastian-schaedler/Authentizitaet_nfhbxr',
        },
        {
          title: 'Zuverlässigkeit',
          imageId: 'sebastian-schaedler/Zuverlaessigkeit_exb6ov',
        },
        { title: 'Wille', imageId: 'sebastian-schaedler/Wille_xtt3ja' },
        { title: 'Mut', imageId: 'sebastian-schaedler/Mut_gisq3g' },
        { title: 'Respekt', imageId: 'sebastian-schaedler/Respekt_cmtcyi' },
      ],
    }
  },
}
</script>

<style lang="postcss"></style>
