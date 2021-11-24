<template>
  <header class="container px-4 mx-auto max-w-5xl">
    <div
      class="
        relative
        min-h-screen
        grid
        lg:grid-cols-2
        items-center
        pt-20
        lg:py-20
      "
    >
      <div
        class="
          relative
          before:block
          before:absolute
          before:-top-4
          before:transform
          before:-translate-y-full
          before:left-0
          before:w-3
          before:h-screen
          before:bg-yellow
        "
      >
        <h1
          class="
            inline
            text-6xl
            lg:text-7xl
            tracking-wide
            uppercase
            font-bold
            leading-none
          "
        >
          {{ title }}
        </h1>
        <span class="inline-block w-full h-3 bg-yellow my-4"></span>
        <p>{{ description }}</p>
      </div>
      <div
        class="relative top-0 left-0 w-full h-full flex mt-20 lg:mt-0 lg:pl-20"
      >
        <img
          class="h-full w-full object-cover"
          :src="
            $cloudinary.image.url('sebastian-schaedler/DSC09735-2_zopcjz', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Sebastian Schädler"
        />
        <ul
          class="
            absolute
            top-0
            lg:top-unset lg:bottom-0
            right-0
            p-4
            flex
            items-center
            space-x-1
            text-yellow
          "
        >
          <li>
            <Instagram></Instagram>
          </li>
          <li>
            <Linkedin class="border-yellow"></Linkedin>
          </li>
          <li>
            <Facebook class="border-yellow"></Facebook>
          </li>
        </ul>
        <img
          class="
            absolute
            bottom-0
            left-0
            transform
            translate-x-4 translate-y-16
            w-80
          "
          :src="
            $cloudinary.image.url('sebastian-schaedler/logo_fkcnoj', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Sebastian Schädler Unterschrift"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss"></style>
