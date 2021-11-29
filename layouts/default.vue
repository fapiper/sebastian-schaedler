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
          url: 'https://sebastian-schaedler.com /',
          logo: 'https://sebastian-schaedler.com /sebastianschaedler.png',
        },
        breadcrumbs: [
          {
            url: 'https://sebastian-schaedler.com',
            text: 'Startseite',
          },
          {
            url: 'https://sebastian-schaedler.com/about',
            text: 'About',
          },
          {
            url: 'https://sebastian-schaedler.com/contact',
            text: 'Kontakt',
          },
          {
            url: 'https://sebastian-schaedler.com/podcast',
            text: 'Podcast',
          },
        ],
      },
    }
  },
  jsonld() {
    const items = this.jsonld.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
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
