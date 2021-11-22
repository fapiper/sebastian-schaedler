<template>
  <PageHeader type='hero' title='Sebastian Schädler'
              description='Networker. Charakter-Trainer. Torwart-Coach. Podcaster.'>
    <div class='absolute top-0 right-1/2 transform translate-x-full h-full flex pl-20 pr-0'>
      <div class='relative h-full flex'>
        <img
          class='h-full w-auto max-w-min pt-20'
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
    </div>

  </PageHeader>
</template>
