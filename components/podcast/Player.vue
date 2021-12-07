<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl space-y-8">
      <iframe
        data-aos="fade-up"
        data-aos-duration="1000"
        allow="autoplay *; encrypted-media *; fullscreen *"
        frameborder="0"
        height="450"
        class="w-full overflow-hidden bg-transparent"
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/de/podcast/charakterspiel-by-sebastian-fabian-sch%C3%A4dler/id1598117927"
      ></iframe>

      <TheButton
        target="_blank"
        href="https://podcasts.apple.com/de/podcast/charakterspiel-by-sebastian-fabian-sch%C3%A4dler/id1598117927"
        >Mehr Folgen</TheButton
      >
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
