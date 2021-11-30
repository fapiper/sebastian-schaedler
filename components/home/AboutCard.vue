<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl overflow-hidden">
      <div class="grid lg:grid-cols-2 gap-4 lg:gap-8">
        <div class="space-y-4 lg:space-y-8">
          <PrefixTitle
            prefix="About"
            data-aos="fade-up"
            data-aos-duration="1000"
            >Sebastian</PrefixTitle
          >
          <div class="space-y-2">
            <p data-aos="fade-up" data-aos-duration="1000">
              Familienmensch.
              <span class="text-yellow">Networker.</span> Charakter-Coach.
              <span class="text-yellow">Podcaster.</span> Towarttrainer.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Mit mehr als sieben Jahren Erfahrung auf den Gebieten der
              Personalberatung, Persönlichkeitsentwicklung und Menschenführung
              unterscheidet sich meine Denk- und Arbeitsweise deutlich vom
              Mainstream. Auf dem Weg vom Sidepreneur zum Unternehmer liebe ich
              vor allem die Gemeinsamkeiten zu meiner größten Leidenschaft, dem
              Fußball.
            </p>
            <p data-aos="fade-up" data-aos-duration="1000">
              Als Fußballtorwart habe ich stets mit zwei Rollen zu tun – dem
              Einzelkämpfer, auf den sich das gesamte Team verlässt, wenn alle
              stricke reißen, und dem Teamplayer, der ohne seine
              Mannschaftskollegen niemals gewinnen könnte. Genau diese
              Eigenschaften vereine ich auch im Business – ich bin Mentor,
              Macher und Visionär.
            </p>
          </div>
          <TheButton data-aos="fade-up" data-aos-duration="1000" to="about">
            Mehr erfahren
          </TheButton>
        </div>
        <div class="order-first lg:order-none">
          <WistiaVideo
            data-aos="fade-up"
            data-aos-duration="1000"
            video-id="asf228uz6d"
            :options="{
              popover: true,
              popoverContent: 'link',
            }"
          >
            <img
              class="w-full"
              :src="
                $cloudinary.image.url('sebastian-schaedler/video_r8pkea', {
                  width: '750',
                  crop: 'scale',
                })
              "
              alt="Video Preview"
            />
          </WistiaVideo>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="postcss"></style>
