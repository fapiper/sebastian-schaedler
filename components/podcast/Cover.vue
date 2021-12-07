<template>
  <section class="space-y-4">
    <div class="relative container px-20 mx-auto lg:max-w-2xl lg:px-40">
      <div
        class="absolute top-1/2 left-0 transform -translate-y-1/2 w-24 lg:w-32"
      >
        <img
          v-simple-parallax="{ overflow: true, scale: 2 }"
          v-lazy
          class="w-full"
          :src="
            $cloudinary.image.url('sebastian-schaedler/4_bpm7cr', {
              width: '250',
              crop: 'scale',
            })
          "
          alt="Podcast Left Icon"
        />
      </div>
      <div
        class="absolute top-1/2 right-0 transform -translate-y-1/2 w-24 lg:w-32"
      >
        <img
          v-simple-parallax="{ overflow: true, scale: 2 }"
          v-lazy
          class="w-full"
          :src="
            $cloudinary.image.url('sebastian-schaedler/4_bpm7cr', {
              width: '250',
              crop: 'scale',
            })
          "
          alt="Podcast Right Icon "
        />
      </div>

      <img
        v-lazy
        data-aos="fade"
        data-aos-duration="1100"
        :src="
          $cloudinary.image.url('sebastian-schaedler/1_nzfh66', {
            width: '450',
            crop: 'scale',
          })
        "
        alt="Charakterspiel by Sebastian & Fabian Schädler"
      />
    </div>

    <div class="w-full flex space-x-4 items-center justify-center">
      <a
        data-aos="fade"
        data-aos-duration="1100"
        href="https://open.spotify.com/show/6wZTUSUcQvVFYx1HcoEp9C?si=69d8f69bb312454c"
        target="_blank"
        rel="noreferrer noopener"
        class="
          block
          rounded-lg
          overflow-hidden
          opacity-100
          hover:opacity:50
          transition-opacity
          ease-in-out
          duration-500
        "
      >
        <img
          class="h-12 w-auto"
          :src="
            $cloudinary.image.url(
              'sebastian-schaedler/podcast-spotify_hunhwa',
              {
                width: '250',
                crop: 'scale',
              }
            )
          "
          alt="Charakterspiel by Sebastian & Fabian Schädler: Podcast auf Spotify"
      /></a>
      <a
        data-aos="fade-up"
        data-aos-duration="1000"
        href="https://podcasts.apple.com/de/podcast/charakterspiel-by-sebastian-fabian-sch%C3%A4dler/id1598117927"
        target="_blank"
        rel="noreferrer noopener"
        class="
          block
          rounded-lg
          overflow-hidden
          opacity-100
          hover:opacity:50
          transition-opacity
          ease-in-out
          duration-500
        "
      >
        <img
          class="h-12 w-auto"
          :src="
            $cloudinary.image.url('sebastian-schaedler/podcast-apple_xzajyk', {
              width: '250',
              crop: 'scale',
            })
          "
          alt="Charakterspiel by Sebastian & Fabian Schädler: Podcast auf Apple"
      /></a>
    </div>
  </section>
</template>
