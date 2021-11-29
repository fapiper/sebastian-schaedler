<template>
  <div :id="containerId" class="block cursor-pointer"><slot></slot></div>
</template>

<script>
let WistiaPlayerApiLoader = null
if (process.client) WistiaPlayerApiLoader = require('wistia-player-api-loader')

export default {
  props: {
    containerId: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    WistiaPlayerApiLoader.load((Wistia) => {
      Wistia.embed(this.videoId, {
        container: this.containerId,
        popover: true,
        popoverContent: 'link',
      })
    })
  },
}
</script>

<style lang="postcss"></style>
