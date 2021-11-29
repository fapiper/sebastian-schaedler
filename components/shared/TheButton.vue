<template>
  <component
    :is="tag"
    :type="tag === 'button' && type"
    :disabled="disabled"
    :href="href"
    :to="to"
    :rel="target === '_blank' && 'noopener noreferrer'"
    :target="target"
    class="
      capitalize
      relative
      inline-flex
      items-center
      justify-center
      text-center
      hover:text-white
      outline-none
      appearance-none
      space-x-2
      disabled:opacity-50
      cursor-pointer
      bg-yellow
      text-white
      px-6
      py-2
      rounded
    "
    data-pointer="large"
    @click="(e) => $emit('click', e)"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    href: { type: String, default: null },
    target: { type: String, default: null },
    to: { type: String, default: null },
    size: { type: String, default: 'md' },
    disabled: { type: Boolean, default: false },
    ssType: { type: String, default: 'button' },
    type: { type: String, default: 'button' },
  },
  data() {
    return {}
  },
  computed: {
    tag() {
      return this.href ? 'a' : this.to ? 'nuxt-link' : 'button'
    },
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="postcss"></style>
