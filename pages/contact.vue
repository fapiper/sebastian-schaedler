<template>
  <div>
    <PageHeader
      title="Kontakt"
      subtitle="Sebastian Schädler"
      description="Du kannst mich jederzeit kontaktieren, lass uns kennenlernen, über Möglichkeiten der Zusammenarbeit sprechen, ein Podcast Interview machen, dein Potential entfalten oder einfach eine Runde Fußball spielen. Ich freue mich auf dich! "
      public-id="sebastian-schaedler/DSC01028_sxf9rf"
      alt="Sebastian Schädler - Kontakt"
    />
    <ContactForm />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
  head: {
    titleTemplate: 'Kontakt - %s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Du kannst mich jederzeit kontaktieren, lass uns kennenlernen, über Möglichkeiten der Zusammenarbeit sprechen, ein Podcast Interview machen, dein Potential entfalten oder einfach eine Runde Fußball spielen. Ich freue mich auf dich!',
      },
    ],
  },
}
</script>
