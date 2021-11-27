<template>
  <section class="relative">
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <h2
        class="title-sm text-center mb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Ich stehe für
      </h2>

      <ul
        class="grid grid-cols-2 lg:grid-cols-3 gap-4 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <li
          v-for="index in 9"
          :key="index"
          class="
            px-4
            py-12
            bg-blue-dark
            space-y-4
            flex flex-col
            items-center
            justify-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 class="text-lg uppercase text-yellow">Lorem Ipsum</h4>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="postcss"></style>
