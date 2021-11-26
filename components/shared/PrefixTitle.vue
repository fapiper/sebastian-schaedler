<template>
  <component :is="tag" class="title max-w-full overflow-hidden">
    <span class="text-yellow">/{{ prefix }}</span> <slot></slot>
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
