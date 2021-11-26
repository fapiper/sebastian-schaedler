<template>
  <section id="coaching-character" class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <PrefixTitle
        class="mb-4"
        prefix="Coaching"
        data-aos="fade-up"
        data-aos-duration="1000"
        >Characters</PrefixTitle
      >

      <div class="grid lg:grid-cols-4 gap-4 lg:gap-8 items-center mt-8">
        <div class="lg:col-span-2 relative">
          <div
            class="
              absolute
              top-0
              left-0
              transform
              scale-110
              w-4/5
              mix-blend-exclusion
              z-10
            "
          >
            <img
              data-aos="zoom-in"
              class="animate-spin-slow"
              :src="
                $cloudinary.image.url('sebastian-schaedler/logo_white_oh36fm', {
                  width: '450',
                  crop: 'scale',
                })
              "
              alt="Story of my Life Logo"
            />
          </div>

          <img
            data-aos="zoom-out"
            data-aos-duration="1000"
            class="w-full"
            :src="
              $cloudinary.image.url('sebastian-schaedler/story-border_doo8oq', {
                width: '750',
                crop: 'scale',
              })
            "
            alt="Coaching"
          />
        </div>
        <div class="relative lg:col-span-2 space-y-8">
          <svg
            class="absolute top-0 left-0 w-32 h-auto text-white text-opacity-10"
            fill="currentColor"
            viewBox="0 0 349.078 349.078"
          >
            <path
              d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643   c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455   c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44   C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186   c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023   c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605   v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455   c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"
            />
          </svg>

          <h3
            class="text-3xl leading-normal text-yellow"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Wer Du bist & wie Du mehr aus Dir machst<span
              class="text-white text-opacity-10"
              >...</span
            >
          </h3>

          <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Was wäre, wenn es ein Tool geben würde, eine Analyse, die dir
              zeigt, wie du mit deinen Stärken und Schwächen richtig umgehst?
            </p>
            <p>
              Eine Charakteranalyse gibt dir ein fundiertes Ergebnis darüber,
              wer du bist und welchen Charaktertypen du aufweist. Mit über
              30.000 Probanden hat Charakterforscher Walter Rotter - mein Mentor
              und Trainer - in den letzten 50 Jahren viele Forschungsergebnisse
              sammeln können. Durch empirische Analysen sind extrem viele
              unterschiedliche Charaktere ans Licht gekommen. Walter Rotter hat
              eine ganz außergewöhnliche und eigene Analysemethodik entwickelt,
              die es ermöglicht, jeden einzelnen Charaktertypen bestimmen zu
              können.
            </p>
            <p>
              Es ist an der Zeit. Finde mehr über dich und dein direktes Umfeld
              heraus. Ob dein Ehemann, Ehefrau, Kinder, Arbeitskollegen, dein
              Team, Vorgesetzter. Jeder in deinem Umfeld kann analysiert werden.
              Indem du dich und dein Umfeld besser kennst, schaffst du ein
              besseres Miteinander und Füreinander.
            </p>

            <TheButton class="!mt-8" to="contact"
              >Zur Charakter-Auswertung</TheButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss"></style>
