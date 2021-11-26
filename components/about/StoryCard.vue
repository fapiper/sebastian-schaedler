<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div
        class="grid lg:grid-cols-2 gap-4 lg:gap-8 items-start justify-center"
      >
        <div class="w-4/5 mx-auto">
          <div class="relative">
            <img
              class="absolute top-0 left-0 transform -translate-x-2/3 w-28"
              :src="
                $cloudinary.image.url('sebastian-schaedler/logo_white_oh36fm', {
                  width: '250',
                  crop: 'scale',
                })
              "
              alt="Story of my Life Logo"
            />

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
        <div class="space-y-8">
          <PrefixTitle
            prefix="Story"
            data-aos="fade-up"
            data-aos-duration="1000"
            >of my Life</PrefixTitle
          >
          <div class="space-y-4" data-aos="fade-up" data-aos-duration="1000">
            <p>
              Stell dir vor, du führst ein erfülltes Leben, dir wird alles
              geboten und innerhalb von einer Sekunde ändert sich alles. Alle
              Träume und Ziele sind in diesem Moment nicht mehr relevant. Du
              hast deinen Vater gerade verloren, Koma, 5 Jahre Leidenszeit und
              dann die Nachricht, er ist tot.
            </p>
            <p>
              5 Jahre, die für mein Leben extrem prägend waren. 5 Jahre, die
              mitentscheidend sind für den Weg, den ich heute gehe. Denn durch
              diese Zeit wurde mir bewusst, was wirklich zählt. Niemand weiß,
              wie lange wir auf diesem Planeten bleiben dürfen, und wir allein
              entscheiden, was wir aus dieser Zeit machen. Aber zurück zum
              Anfang…
            </p>
            <template v-if="false">
              <p>
                Arbeiten, wo andere Urlaub machen. Da ich vom Bodensee komme,
                war das immer der Slogan, den ich schon als Kind gehört habe.
                Klingt extrem gut und als ich im Tourismus als dualer Student
                angefangen habe zu arbeiten, hat das auch viel Spaß gebracht.
                Fröhliche Menschen, gute Laune, aber gleichzeitig auch viel
                Wochenendarbeit, unflexibel und keine Zeit mehr für meine
                Leidenschaft, den Fußball.
              </p>
              <p>
                Also habe ich mein Glück danach in der Personalberatung gesucht
                – Headhunting, coole Leute, geiler Spirit, viel Spaß. Als
                Personalberater habe ich hunderte von Gesprächen mit Menschen
                geführt, die eigentlich mehr wollen, als das, was sie aktuell
                haben. Mehr nicht nur in finanziellem Sinne, sondern mehr vom
                Leben. Und dann fängt man an sich diese Fragen auch selbst zu
                stellen – Was will ich eigentlich vom Leben? Wo will ich hin?
                Was sind meine Ziele? Wie komme ich dorthin?
              </p>
              <p>
                Und in diese Zeit der familiäre Schicksalsschlag und das
                Bewusstsein, wie schnell das Leben vorbei sein kann.
              </p>
              <p>
                Wir haben heutzutage viele Möglichkeiten, am einfachsten ist es
                den Weg mit Menschen zu gehen, die bereits dort sind, wo du hin
                möchtest. Genau das habe auch ich gemacht, mir Menschen mit
                ähnlichen Werten gesucht, von ihnen gelernt, um gemeinsam Träume
                zu verwirklichen. Denn wie im Fußball, wo du als Torwart zwar
                eine Art Einzelkämpfer bist, Meisterschaften und Pokale aber
                auch nur im Team gewinnen kannst, so ist es auch im Leben
                deutlich einfacher im Team seine Ziele zu erreichen.
              </p>
              <p>
                Egal ob im Network Marketing, beim PQS-Coaching oder in der
                Arbeit mit Torhütern – der Mensch steht im Mittelpunkt. Jeder
                ist individuell, hat seine ganz eigenen Stärken und Bedürfnisse
                und genau darum geht es – Offenheit, Vertrauen und den Mut
                seinen Weg zu gehen. Herauszufinden, wer Du bist und wie Du mehr
                aus Dir machst!
              </p>
              <p>Networker. PQS-Coach. Torwarttrainer.</p>
            </template>
          </div>
          <button
            class="flex flex-1 space-x-2 items-center mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span class="uppercase text-sm">Mehr lesen</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss"></style>
