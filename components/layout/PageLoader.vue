<template>
  <div>
    <div
      data-transition-bg
      class="fixed top-0 left-0 h-screen w-full bg-white z-60"
    ></div>
    <div
      data-transition-logo-bg
      class="
        fixed
        top-0
        left-0
        h-screen
        w-full
        bg-transparent
        z-70
        overflow-hidden
        pointer-events-none
      "
    >
      <div
        data-transition-logo
        class="
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2 -translate-y-1/2
        "
      >
        <img
          class="w-40 animate-spin-slow"
          :src="
            $cloudinary.image.url('sebastian-schaedler/logo_black_oxulrm', {
              width: '450',
              crop: 'scale',
            })
          "
          alt="Sebastian Schädler Logo"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
