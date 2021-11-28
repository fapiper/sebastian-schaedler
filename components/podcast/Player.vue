<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl space-y-8">
      <iframe
        data-aos="fade-up"
        data-aos-duration="1000"
        allow="autoplay *; encrypted-media *; fullscreen *"
        frameborder="0"
        height="450"
        scrolling="no"
        class="w-full overflow-hidden bg-transparent"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/de/podcast/dream-plan-you-by-andreas-k%C3%BCffner/id1480110465?l=en"
      ></iframe>
      <TheButton href="#">mehr Folgen</TheButton>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="postcss"></style>
