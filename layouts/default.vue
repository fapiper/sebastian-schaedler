<template>
  <div class="min-h-screen w-full overflow-hidden">
    <CookieHint />
    <PageLoader />
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<script>
export default {
  data() {
    return {
      jsonld: {
        logo: {
          url: 'https://www.sebastian-schaedler.com/',
          logo: 'https://www.sebastian-schaedler.com/logo.png',
        },
        breadcrumbs: [
          {
            url: 'https://www.sebastian-schaedler.com',
            text: 'Startseite',
          },
          {
            url: 'https://www.sebastian-schaedler.com/about',
            text: 'About',
          },
          {
            url: 'https://www.sebastian-schaedler.com/contact',
            text: 'Kontakt',
          },
          {
            url: 'https://www.sebastian-schaedler.com/podcast',
            text: 'Podcast',
          },
        ],
      },
    }
  },
  jsonld() {
    const items = this.jsonld.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index <= 0 ? 1 : 2,
      name: item.text,
      item: item.url,
    }))
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: this.jsonld.logo.url,
        logo: this.jsonld.logo.logo,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
    ]
  },
}
</script>
