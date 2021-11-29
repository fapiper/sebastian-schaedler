import VueYouTubeEmbed, { YouTubePlayer } from 'vue-youtube-embed'
import Vue from 'vue'

Vue.use(VueYouTubeEmbed, {
  global: true,
  playerWidth: '100%',
  playerHeight: '100%',
})

Vue.component('VueYoutubePlayer', YouTubePlayer)
