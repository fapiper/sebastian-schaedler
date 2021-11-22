<template>
  <PageHeader title='About' subtitle='Sebastian Schädler'
              description='Als Franchise-Entrepreneur, Online-Marketer und Networker gründe ich jeden Tag neue Start-Ups und halte lebenslang prozentuale Beteiligungen an deren Erfolg.'>
    <img
      class='absolute top-1/2 right-0 transform -translate-y-1/2 w-3/4'
      :src="$cloudinary.image.url(
          'sebastian-schaedler/sebastianschaedler_wl73lh',
        {
        width: '1000',
        crop: 'scale'
        }
        )" alt='Sebastian Schädler - About'
    />
  </PageHeader>
</template>
