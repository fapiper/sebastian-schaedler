<template>
  <div>
    <PageHeader
      title="Podcast"
      subtitle="Sebastian & Fabian Schädler"
      description="Es war lange ein Wunsch mit meinem Bruder Fabian einen gemeinsamen Podcast zu machen. Jetzt ist es endlich soweit! Es geht um Fußball, Business und Mindset."
      public-id="sebastian-schaedler/sebastianschaedler_wl73lh"
      alt="Sebastian Schädler - Podcast"
    />
    <Cover />
    <Overview />
    <Player />
    <InterviewCard />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
  head: {
    titleTemplate: 'Podcast - %s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Es war lange ein Wunsch mit meinem Bruder Fabian einen gemeinsamen Podcast zu machen. Jetzt ist es endlich soweit! Es geht um Fußball, Business und Mindset.',
      },
    ],
  },
}
</script>
