<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl space-y-8">
      <PrefixTitle prefix="PODCAST" data-aos="fade-up" data-aos-duration="1000"
        >@charakterspiel</PrefixTitle
      >

      <div class="grid lg:grid-cols-3 gap-4 items-center">
        <div
          class="space-y-4 lg:col-span-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p>
            Was wäre, wenn es ein Tool geben würde, eine Analyse, die dir zeigt,
            wie du mit deinen Stärken und Schwächen richtig umgehst? Eine
            Charakteranalyse gibt dir ein fundiertes Ergebnis darüber, wer du
            bist und welchen Charaktertypen du aufweist.
          </p>
          <p>
            Mit über 30.000 Probanden hat Charakterforscher Walter Rotter - mein
            Mentor und Trainer - in den letzten 50 Jahren viele
            Forschungsergebnisse sammeln können. Durch empirische Analysen sind
            extrem viele unterschiedliche Charaktere ans Licht gekommen. Walter
            Rotter hat eine ganz außergewöhnliche und eigene Analysemethodik
            entwickelt, die es ermöglicht, jeden einzelnen Charaktertypen
            bestimmen zu können.
          </p>
          <p>
            Es ist an der Zeit. Finde mehr über dich und dein direktes Umfeld
            heraus. Ob dein Ehemann, Ehefrau, Kinder, Arbeitskollegen, dein
            Team, Vorgesetzter. Jeder in deinem Umfeld kann analysiert werden.
            Indem du dich und dein Umfeld besser kennst, schaffst du ein
            besseres Miteinander und Füreinander.
          </p>
        </div>
        <div v-simple-parallax="{ overflow: true }" class="w-full">
          <img
            class="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            :src="
              $cloudinary.image.url('sebastian-schaedler/iphone_kevnos', {
                width: '450',
                crop: 'scale',
              })
            "
            alt="Iphone Mockup"
          />
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
