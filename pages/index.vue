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
}
</script>
