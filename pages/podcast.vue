<template>
  <div>
    <PageHeader
      title="Podcast"
      subtitle="Sebastian Schädler"
      description="Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte lebenslang prozentuale Beteiligungen an deren Erfolg."
      public-id="sebastian-schaedler/sebastianschaedler_wl73lh"
      alt="Sebastian Schädler - Podcast"
    />
    <Overview />
    <Cover />
    <Player />
    <InterviewCard />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
}
</script>
