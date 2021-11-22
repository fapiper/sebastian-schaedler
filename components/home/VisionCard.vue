<template>
  <section class='relative'>
    <div class='container px-4 mx-auto lg:max-w-5xl'>
      <h2 class='title mb-8' data-title-prefix='/Business'>& Vision</h2>

      <div class='grid grid-cols-7 gap-4 lg:gap-8 items-center'>
        <div class='col-span-2'>
          <img
            class='w-full'
            :src="$cloudinary.image.url(
          'sebastian-schaedler/DSC09888_qzm8jn',
        {
        width: '450',
        crop: 'scale'
        }
        )" alt='Vision'
          />
        </div>
        <div class='col-span-4 space-y-8'>
          <div>
            <h3 class='text-2xl uppercase leading-normal text-yellow'>Network</h3>
            <p>Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte
              lebenslang prozentuale Beteiligungen an deren Erfolg. Mir macht es Spaß, neue Wachstumsmärkte zu
              erschließen und Impulsgeber zu sein für neue kreative Unternehmerwege!</p>
          </div>
          <div>
            <h3 class='text-2xl uppercase leading-normal text-yellow'>Vision & Mission</h3>
            <p>Ich möchte Menschen inspirieren, größer zu denken und selbstbewusster zu handeln. Ich verstehe mich als
              Impulsgeber zur mentalen & körperlichen Gesundheit, als Inspiration in Fitness & Athletik, Supporter zur
              finanziellen & örtlichen Unabhängigkeit, Mentor zur souveränen Persönlichkeit, Unterstützer beim
              strategischen Unternehmensaufbau und Wegweiser bei der Erschließen von neuen, qualitativ hochwertigen
              Netzwerken.</p>
          </div>

          <NuxtLink to='contact'
                    class='inline-flex items-center justify-center text-center bg-yellow text-white px-8 py-2 min-h-4'>
            Lass uns zusammenarbeiten
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang='postcss'>
</style>
