<template>
  <div>
    <PageHeader
      title="Kontakt"
      subtitle="Sebastian Schädler"
      description="Ich freue mich über "
      public-id="sebastian-schaedler/sebastianschaedler_wl73lh"
      alt="Sebastian Schädler - Kontakt"
    />
    <ContactForm />
  </div>
</template>

<script>
import Transition from '~/mixins/transition.js'

export default {
  mixins: [Transition],
}
</script>
