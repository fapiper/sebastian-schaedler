<template>
  <header class='container px-4 mx-auto max-w-5xl'>
    <div class='relative min-h-screen flex items-center'>
      <div class='relative z-10 max-w-lg'>
        <h1 class='inline text-7xl tracking-wide uppercase font-bold leading-none' :class="{'text-9xl': type==='default'}">{{ title
          }}</h1>
        <span class='inline-block w-full h-3 bg-yellow my-4'></span>
        <div class='space-y-2' :class="{'text-center': type==='default'}">
          <h2 v-if="type==='default'" class='font-semibold text-lg'>{{ subtitle }}</h2>
          <p>{{ description }}</p>
        </div>
      </div>
      <slot></slot>
    </div>
  </header>

</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      required: true
    }

  }
}
</script>

<style lang='postcss'>
</style>
