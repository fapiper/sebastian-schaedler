<template>
  <footer class="">
    <SocialShare class="mb-0" />
    <div class="bg-blue-dark text-white">
      <div class="container px-4 max-w-5xl mx-auto pt-20">
        <div class="grid grid-cols-6 gap-8 text-white text-opacity-25 text-sm">
          <div class="col-span-6 lg:col-span-3 space-y-8 lg:pr-16">
            <img
              class="w-full max-w-xs"
              :src="
                $cloudinary.image.url('sebastian-schaedler/logo_fkcnoj', {
                  width: '450',
                  crop: 'scale',
                })
              "
              alt="Sebastian Schädler Unterschrift"
            />

            <p class="text-base">
              Als Franchise-Entrepreneur, Online-Marketer und Networker gründe
              ich jeden Tag neue Start-Ups und halte lebenslang prozentuale
              Beteiligungen an deren Erfolg.
            </p>
            <ul class="flex items-center space-x-4 text-white">
              <li>
                <Instagram class="!w-10 !h-10"></Instagram>
              </li>
              <li>
                <Linkedin class="!w-10 !h-10 !border-4 !p-2"></Linkedin>
              </li>
              <li>
                <Facebook class="!w-10 !h-10 !border-4 !p-1.5"></Facebook>
              </li>
              <li>
                <Podcast class="!w-10 !h-10"></Podcast>
              </li>
              <li>
                <Youtube class="!w-10 !h-10 !border-4 !p-1.5"></Youtube>
              </li>
            </ul>
          </div>
          <ul class="space-y-2 col-span-3 lg:col-span-1">
            <li
              class="
                !mb-4
                !lg:mb-8
                uppercase
                text-white text-opacity-100 text-base
              "
            >
              Navigation
            </li>
            <li>
              <NuxtLink to="/">Startseite</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Business</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Coaching</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/podcast">Podcast</NuxtLink>
            </li>
          </ul>
          <ul class="space-y-2 col-span-3 lg:col-span-1">
            <li
              class="
                !mb-4
                !lg:mb-8
                uppercase
                text-white text-opacity-100 text-base
              "
            >
              Social Media
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener"
                >Instagram</a
              >
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            </li>
            <li>
              <a href="/" target="_blank" rel="noreferrer noopener">YouTube</a>
            </li>
          </ul>
          <ul class="space-y-2 col-span-3 lg:col-span-1">
            <li
              class="
                !mb-4
                !lg:mb-8
                uppercase
                text-white text-opacity-100 text-base
              "
            >
              Kontakt
            </li>
            <li>
              <NuxtLink to="/contact">Kontakt</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Impressum</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Datenschutz</NuxtLink>
            </li>
          </ul>
        </div>
        <ul class="w-full border-t py-4 lg:py-8 mt-8 text-xs">
          <li>Copyright (c) 2021 Sebastian Schädler</li>
          <li>Design by NXT YOU</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="postcss"></style>
