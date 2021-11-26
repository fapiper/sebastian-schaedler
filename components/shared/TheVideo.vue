<template>
  <div :class="classes">
    <client-only>
      <div v-if="controls !== 'vimeo'" class="ak-video__scroll"></div>
      <transition-group name="fade">
        <div v-if="loading" key="1" class="ak-video__loader"></div>
        <vimeo-player
          key="2"
          ref="video"
          class="ak-video__player"
          :controls="controls === 'vimeo'"
          :autoplay="options.autoplay"
          :options="options"
          :video-id="vimeoId"
          :loop="options.loop"
          @loaded="loading = false"
        ></vimeo-player>
      </transition-group>
      <template v-if="_controls">
        <AkButton
          v-if="paused"
          class="ak-video__control"
          circle
          outline
          :icon="['fas', 'play']"
          @click="togglePlaying(true)"
        ></AkButton>
        <AkButton
          v-else
          class="ak-video__control ak-video__control--pause"
          circle
          outline
          :icon="['fas', 'pause']"
          @click="togglePlaying(false)"
        ></AkButton>
      </template>
      <AkButton
        v-if="volume"
        class="ak-video__volume"
        transparent
        size="lg"
        color="blue"
        :icon="options.muted ? ['fas', 'volume-mute'] : ['fas', 'volume-up']"
        @click="toggleMute"
      ></AkButton>
    </client-only>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    vimeoId: {
      type: String,
      default: null,
    },
    volume: {
      type: Boolean,
      default: false,
    },
    volumeHideOnLeave: {
      type: Boolean,
      default: true,
    },
    volumePositionTop: {
      type: Boolean,
      default: false,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    muted: {
      type: Boolean,
      default: true,
    },
    controls: {
      type: String,
      default: null, // null | default | vimeo
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    background: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    paused: true,
    loading: true,
    options: {
      muted: null,
      autoplay: null,
      responsive: null,
      loop: true,
      controls: false,
      dnt: true,
      color: '16427d',
    },
  }),
  computed: {
    classes() {
      return [
        {
          'ak-video': true,
          'ak-video--volume': this.volume,
          'ak-video--controls': this._controls,
          'ak-video--small': this.small,
          'ak-video--background': this.background,
          'ak-video--loading': this.loading,
          'ak-video--volume-hide': this.volumeHideOnLeave,
          'ak-video--volume-top': this.volumePositionTop,
        },
      ]
    },
    _controls() {
      return (
        this.controls === 'default' ||
        (!this.options.autoplay && this.controls !== 'vimeo')
      )
    },
  },
  mounted() {
    const options = {
      muted: this.autoplay && (this.muted || process.env.dev),
      autoplay: this.autoplay,
      responsive: this.responsive,
      controls: this.controls === 'vimeo',
    }
    this.options = { ...this.options, ...options }
  },
  methods: {
    toggleMute() {
      this.options.muted = !this.options.muted
      this.options.muted ? this.$refs.video.mute() : this.$refs.video.unmute()
    },
    play() {
      this.togglePlaying(true)
    },
    pause() {
      this.togglePlaying(false)
    },
    togglePlaying(play = this.video ? !this.$refs.video.paused : !this.paused) {
      if (!this.autoplay) {
        const player = this.$refs.video
        this.paused = !play
        this.paused ? player.pause() : player.play()
        this.$emit(this.paused ? 'pause' : 'play')
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.ak-video {
  position: relative;

  &__volume {
    position: absolute;
    bottom: $grid-gutter;
    right: $grid-gutter;
  }

  &--volume-top .ak-video__volume {
    bottom: unset;
    top: $grid-gutter;
  }

  &__scroll {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    z-index: 1;
  }

  &__control {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-width: 0.4rem;
    min-width: 5rem;
    min-height: 5rem;
    box-sizing: border-box;
  }

  &__volume,
  &__control {
    z-index: 3;
    transition: all 0.2s ease-out;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
    background-color: $blue-2;
    opacity: 0.85;
  }

  &__loader {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 4rem;
    width: 4rem;
    margin: -2rem 0 0 -2rem;
    border: 0.3125rem transparent solid;
    border-top: 0.3125rem $blue-2 solid;
    border-radius: 2rem;
    animation: spin 0.8s infinite ease-in-out;
    z-index: 0;
  }

  &__control--pause {
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    .ak-video__control--pause {
      opacity: 0.25;
      visibility: visible;

      &:hover {
        opacity: 1;
      }
    }
  }
}

.ak-video--background {
  width: 100%;
  height: 100%;
  .ak-video__player {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 177.77777778vh;
    min-width: 100%;
    height: 100%;
    min-height: 56.25vw;

    /deep/ {
      span,
      div,
      iframe {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}

.ak-video--small {
  .ak-video__volume {
    bottom: 1rem;
    top: unset;
    right: 1rem;
    position: absolute;
    border-color: transparent;
  }

  &.ak-video--volume-top .ak-video__volume {
    bottom: unset;
    top: 1rem;
  }
}

.ak-video--loading {
  .ak-video__control {
    opacity: 0;
    visibility: hidden;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@media #{$breakpoint-xl-up} {
  .ak-video--volume-hide {
    .ak-video__volume {
      opacity: 0;
      visibility: hidden;
    }

    &:hover .ak-video__volume {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
