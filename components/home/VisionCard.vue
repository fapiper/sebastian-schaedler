<template>
  <section
    id="business-and-vision"
    class="relative overflow-hidden pb-16 -mb-16"
  >
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <PrefixTitle prefix="Business" class="mb-8"> & Vision </PrefixTitle>

      <div class="grid lg:grid-cols-7 gap-8 items-center">
        <div class="lg:col-span-2 relative">
          <div
            class="
              absolute
              bottom-0
              left-0
              transform
              translate-y-1/2
              -translate-x-1/2
              w-28
              z-10
            "
          >
            <img
              v-lazy
              v-simple-parallax="{ overflow: true, orientation: 'down' }"
              class="w-full"
              :data-src="
                $cloudinary.image.url('sebastian-schaedler/logo_white_oh36fm', {
                  width: '250',
                  crop: 'scale',
                })
              "
              alt="Vision Logo"
            />
          </div>

          <div
            class="w-54 ml-auto lg:ml-0"
            data-aos="fade"
            data-aos-duration="1100"
          >
            <img
              v-simple-parallax
              v-lazy
              class="w-full"
              :data-src="
                $cloudinary.image.url('sebastian-schaedler/DSC09888_qzm8jn', {
                  width: '450',
                  crop: 'scale',
                })
              "
              alt="Vision"
            />
          </div>
        </div>
        <div
          class="
            order-first
            lg:order-none lg:col-span-4
            text-right
            lg:text-left
            relative
            lg:pr-12
          "
        >
          <img
            v-lazy
            v-simple-parallax="{
              overflow: true,
              scale: 1.4,
              orientation: 'down',
            }"
            class="absolute top-0 right-0 w-full max-w-md opacity-10"
            :data-src="
              $cloudinary.image.url('sebastian-schaedler/jeunesse_cyc4fs', {
                width: '850',
                crop: 'scale',
              })
            "
            alt="Jeunesse"
          />
          <div class="relative space-y-8 z-10">
            <div>
              <h3
                class="text-2xl uppercase leading-normal text-yellow"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Network
              </h3>
              <div data-aos="fade-up" data-aos-duration="800" class="space-y-2">
                <p>
                  Als Networker, Online-Marketer und Franchise-Entrepreneur
                  gründe ich jeden Tag neue Start-Ups und halte lebenslange
                  prozentuale Beteiligungen an deren Erfolg.
                </p>
                <p>
                  <i
                    >„Die reichsten Menschen der Welt suchen und bauen
                    Netzwerke. Alle anderen suchen Arbeit“</i
                  >
                  - Robert Kiyosaki
                </p>
              </div>
            </div>
            <div>
              <h3
                class="text-2xl uppercase leading-normal text-yellow"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Vision & Mission
              </h3>
              <div data-aos="fade-up" class="space-y-2" data-aos-duration="800">
                <p>
                  Ich möchte Menschen mit besonderem Potenzial eine neue
                  Perspektive geben, Talenten helfen, über sich hinauszuwachsen
                  und direkt mit Ihnen daran arbeiten, ihre Träume zu
                  verwirklichen. Ich verstehe mich als Mentor auf dem Weg zu
                  mentaler & körperlicher Gesundheit, als Wegbegleiter zu
                  finanzieller & örtlicher Unabhänigkeit.
                </p>
                <p>
                  Egal ob im Network Marketing, beim PQS-Coaching oder in der
                  Arbeit mit Torhütern – der Mensch steht im Mittelpunkt. Jeder
                  ist individuell, hat seine ganz eigenen Stärken und
                  Bedürfnisse und genau darum geht es – Offenheit, Vertrauen und
                  den Mut seinen Weg zu gehen. Herauszufinden, wer Du bist und
                  wie Du mehr aus Dir machst!
                </p>
              </div>
            </div>

            <TheButton data-aos="fade-up" data-aos-duration="800" to="contact"
              >Lass uns zusammenarbeiten</TheButton
            >
          </div>
        </div>
        <div class="relative h-full">
          <img
            ref="logo"
            class="
              absolute
              top-1/2
              transform
              -translate-y-1/2
              left-0
              p-8
              h-full
              w-auto
              max-w-min
            "
            :src="
              $cloudinary.image.url('sebastian-schaedler/logo_white_oh36fm', {
                width: '750',
                crop: 'scale',
              })
            "
            alt="Story of my Life"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$gsap.to(this.$refs.logo, {
      rotate: -180,
      scrollTrigger: {
        trigger: this.$refs.logo,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.05,
      },
    })
  },
}
</script>

<style lang="postcss"></style>
