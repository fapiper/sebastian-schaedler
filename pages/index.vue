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
    title: 'Sebastian Schädler - Networker | PQS-Coach | Podcaster',
    description:
      'Mit mehr als sieben Jahren Erfahrung auf den Gebieten der Personalberatung, Persönlichkeitsentwicklung und Menschenführung unterscheidet sich meine Denk- und Arbeitsweise deutlich vom Mainstream. Auf dem Weg vom Sidepreneur zum Unternehmer liebe ichvor allem die Gemeinsamkeiten zu meiner größten Leidenschaft, dem Fußball.',
  },
}
</script>
