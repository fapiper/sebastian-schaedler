<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div class="mb-4">
        <PrefixTitle
          class="mb-4"
          prefix="Kontaktiere"
          data-aos="fade-up"
          data-aos-duration="1000"
          >mich</PrefixTitle
        >

        <p data-aos="fade-up" data-aos-duration="1000">
          Ich werde mich innerhalb von 24 Stunden bei dir melden.
        </p>
      </div>

      <form
        data-aos="fade-up"
        data-aos-duration="1000"
        @submit.prevent="submit"
      >
        <div
          v-if="overlayActive"
          class="
            absolute
            inset-0
            bg-blue bg-opacity-95
            z-10
            flex
            items-center
            justify-center
            text-center
          "
        >
          <div v-if="loading">
            <svg
              class="animate-spin-quick h-8 w-8 text-yellow"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <div v-else-if="error" class="space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Ein unbekannter Fehler ist aufgetreten.</p>
            <div
              class="
                flex
                items-center
                flex-col
                sm:flex-row
                space-y-4
                sm:space-y-0 sm:space-x-4
              "
            >
              <TheButton @click="tryAgain">Erneut Versuchen</TheButton>
              <TheButton href="mailto:info@sebastian-schaedler.com"
                >Email Schreiben</TheButton
              >
            </div>
          </div>
          <div v-else class="space-y-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mx-auto h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p>Die Anfrage wurde erfolgreich verschickt.</p>
            <div
              class="
                flex
                items-center
                flex-col
                sm:flex-row
                space-y-4
                sm:space-y-0 sm:space-x-4
              "
            >
              <TheButton @click="navigateBack">Zurück</TheButton>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            class="form-group"
            :class="{
              'form-group--error': touched && $v.data.firstName.$error,
            }"
          >
            <label
              for="firstName"
              required
              :class="{
                'red-600': touched && $v.data.firstName.$error,
              }"
              >Vorname</label
            >
            <input
              id="firstName"
              v-model.trim="$v.data.firstName.$model"
              name="firstName"
              type="text"
              :class="{
                'border-red-600 placeholder-red-600':
                  touched && $v.data.firstName.$error,
              }"
            />
            <ul v-if="touched && $v.data.firstName.$error" class="form-error">
              <li v-if="!$v.data.firstName.required">
                Ein Vorname muss angegeben werden.
              </li>
            </ul>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': touched && $v.data.lastName.$error }"
          >
            <label
              for="lastName"
              required
              :class="{
                'red-600': touched && $v.data.lastName.$error,
              }"
              >Nachname</label
            >

            <input
              id="lastName"
              v-model.trim="$v.data.lastName.$model"
              name="lastName"
              type="text"
              :class="{
                'border-red-600 placeholder-red-600':
                  touched && $v.data.lastName.$error,
              }"
            />
            <ul v-if="touched && $v.data.lastName.$error" class="form-error">
              <li v-if="!$v.data.lastName.required">
                Ein Nachname muss angegeben werden.
              </li>
            </ul>
          </div>

          <div
            class="form-group"
            :class="{ 'form-group--error': touched && $v.data.email.$error }"
          >
            <label
              for="email"
              required
              :class="{
                'red-600': touched && $v.data.email.$error,
              }"
              >Email-Adresse</label
            >

            <input
              id="email"
              v-model.trim="$v.data.email.$model"
              name="name"
              type="text"
              :class="{
                'border-red-600 placeholder-red-600':
                  touched && $v.data.email.$error,
              }"
            />
            <ul v-if="touched && $v.data.email.$error" class="form-error">
              <li v-if="!$v.data.email.required">
                Eine E-Mail Adresse muss angegeben werden.
              </li>
              <li v-if="!$v.data.email.email">
                Diese E-Mail Adresse ist ungültig.
              </li>
            </ul>
          </div>
          <div
            class="form-group"
            :class="{ 'form-group--error': touched && $v.data.phone.$error }"
          >
            <label
              for="phone"
              :class="{
                'red-600': touched && $v.data.phone.$error,
              }"
              >Telefonnummer</label
            >

            <input
              id="phone"
              v-model.trim="$v.data.phone.$model"
              name="phone"
              type="text"
              :class="{
                'border-red-600 placeholder-red-600':
                  touched && $v.data.phone.$error,
              }"
            />
            <ul v-if="touched && $v.data.phone.$error" class="form-error">
              <li v-if="!$v.data.phone.customPhone">
                Diese Telefonnummer ist ungültig.
              </li>
            </ul>
          </div>
          <div class="form-group lg:col-span-2">
            <label>Aus welchen Gründen?</label>

            <div class="pt-4 grid lg:grid-cols-4 grid-cols-2 gap-4">
              <label class="checkbox-label">
                <input
                  id="business"
                  v-model.trim="$v.data.reason.$model"
                  type="checkbox"
                  value="Business"
                /><span>Business</span>
              </label>

              <label class="checkbox-label">
                <input
                  id="characterAnalyse"
                  v-model.trim="$v.data.reason.$model"
                  type="checkbox"
                  value="Charakter Analyse"
                /><span>Charakter Analyse</span>
              </label>

              <label class="checkbox-label">
                <input
                  id="know"
                  v-model.trim="$v.data.reason.$model"
                  type="checkbox"
                  value="Kennenlernen"
                /><span>Kennenlernen</span>
              </label>

              <label class="checkbox-label">
                <input
                  id="podcastInterview"
                  v-model.trim="$v.data.reason.$model"
                  type="checkbox"
                  value="Podcast Interview"
                /><span>Podcast Interview</span>
              </label>
            </div>
          </div>
          <div
            class="form-group lg:col-span-2"
            :class="{ 'form-group--error': touched && $v.data.message.$error }"
          >
            <label
              for="message"
              required
              :class="{
                'red-600': touched && $v.data.message.$error,
              }"
              >Nachricht</label
            >
            <textarea
              id="message"
              v-model.trim="$v.data.message.$model"
              name="message"
              :class="{
                'border-red-600 placeholder-red-600':
                  touched && $v.data.message.$error,
              }"
            />
            <ul v-if="touched && $v.data.message.$error" class="form-error">
              <li v-if="!$v.data.message.required">
                Eine Nachricht muss eingegeben werden.
              </li>
            </ul>
          </div>
          <div
            class="form-group lg:col-span-2 pt-4"
            :class="{ 'form-group--error': touched && $v.data.consent.$error }"
          >
            <label class="checkbox-label" required>
              <input
                id="consent"
                v-model.trim="$v.data.consent.$model"
                type="checkbox"
              /><span
                >Ja, ich habe die Datenschutzbestimmungen gelesen und akzeptiere
                sie.</span
              >
            </label>
          </div>
        </div>
        <div class="mt-4 inline-block space-y-2">
          <TheButton type="submit">Jetzt Abschicken!</TheButton>
          <div class="flex justify-center items-center space-x-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 text-yellow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Deine Daten sind sicher</span>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
const customPhone = helpers.regex('customPhone', /^(?=.*[0-9])[- +()0-9]+$/)

export default {
  data() {
    return {
      overlayActive: false,
      touched: false,
      error: false,
      loading: false,
      data: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: [],
        message: '',
        consent: false,
      },
    }
  },
  computed: {},
  validations: {
    data: {
      firstName: { required },
      lastName: { required },
      email: {
        required,
        email,
      },
      phone: { customPhone },
      reason: {},
      message: { required },
      consent: { checked: (value) => value === true },
    },
  },
  mounted() {},
  methods: {
    tryAgain() {
      this.loading = false
      this.error = false
      this.overlayActive = false
    },
    async submit() {
      if (this.loading) {
        return
      }

      this.$v.$touch()
      this.touched = true
      if (this.$v.$invalid) {
        return
      }
      this.loading = true
      this.error = false
      this.overlayActive = true
      try {
        const { data } = await this.$axios.post(
          '/mail',
          JSON.stringify(this.data)
        )
        this.error = !data.success
      } catch (err) {
        this.error = true
      }
      if (!this.error) {
        this.resetForm()
      }
      this.loading = false
    },
    resetForm() {
      this.touched = false

      this.data = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: [],
        message: '',
        consent: false,
      }
    },
  },
}
</script>

<style scoped lang="postcss">
input:not([type='checkbox']),
textarea {
  @apply w-full bg-transparent border-white text-current focus:placeholder-yellow focus:border-yellow;
}

textarea {
  min-height: 8rem;
}

input,
input::placeholder,
.form-group {
  @apply transition-all ease-in-out duration-500;
}

input[type='checkbox'] {
  @apply h-5 w-5 rounded text-yellow cursor-pointer;
}

textarea:focus,
input:focus {
  outline: none;
  box-shadow: none;
}

.checkbox-label {
  @apply inline-flex items-center cursor-pointer space-x-2;
}

label:not(.checkbox-label) {
  @apply text-xs uppercase pb-1 pl-3;
}

label[required] {
  @apply after:pl-0.5 after:content-['*'] after:inline after:text-yellow;
}

.form-group {
  @apply relative text-left;
}

.form-group--error label {
  @apply text-red-600;
}

.form-group--error input:not([type='checkbox']),
.form-group--error textarea {
  @apply border-red-600;
}

.form-error {
  @apply absolute -bottom-0.5 left-0 transform translate-y-full text-xs text-red-600;
}
</style>

<style lang="postcss"></style>
