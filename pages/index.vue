<template>
  <div>
    <Hero />
    <KeywordBanner />
    <AboutCard />
    <ImageSlider />
    <VisionCard />
    <SocialShare :dense="true" />
    <CoachingCard />
    <FeedbackSlider />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
  head: {
    titleTemplate: '%s - Networker | Charakter-Coach | Podcaster',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Familienmensch. Networker. Charakter-Coach. Podcaster. Torwarttrainer ‒ Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte lebenslang prozentuale Beteiligungen an deren Erfolg.',
      },
    ],
  },
}
</script>
