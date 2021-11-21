<template>
  <div class='container px-4 mx-auto'>
    <div class='min-h-screen grid grid-cols-2'>
      <div class='flex items-center justify-center'>
        <div class='w-full max-w-lg'>
          <h1 class='text-8xl uppercase font-bold leading-none' :class="{'text-9xl': type==='default'}">{{ title }}</h1>
          <span class='block w-full h-3 bg-yellow my-4'></span>
          <div class='space-y-2' :class="{'text-center': type==='default'}">
            <h2 v-if="type==='default'" class='font-semibold text-lg'>{{ subtitle }}</h2>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

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
