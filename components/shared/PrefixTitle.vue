<template>
  <component :is="tag" class="title">
    <span class="text-yellow">/{{ prefix }}&nbsp;</span><slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    prefix: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'h2',
    },
  },
}
</script>

<style lang="postcss"></style>
