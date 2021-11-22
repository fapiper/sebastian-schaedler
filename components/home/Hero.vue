<template>
  <PageHeader type='hero' title='Sebastian Schädler'
              description='Networker. Charakter-Trainer. Torwart-Coach. Podcaster.'>
    <div class='relative h-full flex'>
      <img
        class='h-full w-auto'
        :src="$cloudinary.image.url(
          'sebastian-schaedler/DSC09735-2_zopcjz',
        {
        width: '450',
        crop: 'scale'
        }
        )" alt='Sebastian Schädler'
      />
      <ul class='absolute bottom-0 right-0 p-4 flex items-center space-x-1 text-yellow'>
        <li>
          <Instagram></Instagram>
        </li>
        <li>
          <Linkedin></Linkedin>
        </li>
        <li>
          <Facebook></Facebook>
        </li>
      </ul>
    </div>
    <img
      class='absolute bottom-4 left-4 w-56'
      :src="$cloudinary.image.url(
          'sebastian-schaedler/logo_fkcnoj',
        {
        width: '450',
        crop: 'scale'
        }
        )" alt='Sebastian Schädler Unterschrift'
    />
  </PageHeader>
</template>
