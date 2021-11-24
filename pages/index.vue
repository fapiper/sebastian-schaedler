<template>
  <div>
    <Hero />
    <KeywordBanner />
    <AboutCard />
    <ImageSlider />
    <VisionCard />
    <SocialShare :dense="true" />
    <CoachingCard />
    <Feedback />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
}
</script>
