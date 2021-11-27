<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <PrefixTitle prefix="PODCAST" data-aos="fade-up" data-aos-duration="1000"
        >@charakterspiel</PrefixTitle
      >
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

      <div
        class="grid lg:grid-cols-3 gap-4 lg:gap-16 items-start justify-center"
      >
        <div class="space-y-4 col-span-2">
          <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Was wäre, wenn es ein Tool geben würde, eine Analyse, die dir
              zeigt, wie du mit deinen Stärken und Schwächen richtig umgehst?
              Eine Charakteranalyse gibt dir ein fundiertes Ergebnis darüber,
              wer du bist und welchen Charaktertypen du aufweist.
            </p>
            <p>
              Mit über 30.000 Probanden hat Charakterforscher Walter Rotter -
              mein Mentor und Trainer - in den letzten 50 Jahren viele
              Forschungsergebnisse sammeln können. Durch empirische Analysen
              sind extrem viele unterschiedliche Charaktere ans Licht gekommen.
              Walter Rotter hat eine ganz außergewöhnliche und eigene
              Analysemethodik entwickelt, die es ermöglicht, jeden einzelnen
              Charaktertypen bestimmen zu können.
            </p>
            <p>
              Es ist an der Zeit. Finde mehr über dich und dein direktes Umfeld
              heraus. Ob dein Ehemann, Ehefrau, Kinder, Arbeitskollegen, dein
              Team, Vorgesetzter. Jeder in deinem Umfeld kann analysiert werden.
              Indem du dich und dein Umfeld besser kennst, schaffst du ein
              besseres Miteinander und Füreinander.
            </p>
          </div>

          <iframe
            data-aos="fade-up"
            data-aos-duration="1000"
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameborder="0"
            height="450"
            scrolling="no"
            class="w-full overflow-hidden bg-transparent"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/de/podcast/dream-plan-you-by-andreas-k%C3%BCffner/id1480110465?l=en"
          ></iframe>
          <TheButton class="mt-8" href="#">mehr Folgen</TheButton>
        </div>
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
