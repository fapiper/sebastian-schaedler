<template>
  <div :id="'wistia_' + videoId" class="block cursor-pointer">
    <slot></slot>
  </div>
</template>

<script>
let WistiaPlayerApiLoader = null
if (process.client) WistiaPlayerApiLoader = require('wistia-player-api-loader')

export default {
  props: {
    videoId: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    WistiaPlayerApiLoader.load((Wistia) => {
      Wistia.embed(this.videoId, {
        containerId: 'wistia_' + this.videoId,
        ...this.options,
      })
    })
  },
}
</script>

<style lang="postcss"></style>
