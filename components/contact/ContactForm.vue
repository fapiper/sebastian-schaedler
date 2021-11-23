<template>
  <section>
    <div class="container px-4 mx-auto lg:max-w-5xl">
      <div class="mb-4">
        <h2 class="title" data-title-prefix="/Kontaktiere">mich</h2>
        <p>Ich werde mich innerhalb von 24 Stunden bei dir melden.</p>
      </div>
      <form @submit.prevent="submit">
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
          "
        >
          <div v-if="loading">
            <svg
              class="animate-spin h-8 w-8 text-yellow"
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
              <button @click="tryAgain">Erneut Versuchen</button>
              <button href="mailto:info@nxtyou.de">Email Schreiben</button>
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
              <button @click="navigateBack">Zurück</button>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="form-group">
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
          <div class="form-group">
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

          <div class="form-group">
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
          <div class="form-group">
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
        </div>

        <div>
          <button type="submit">Abschicken</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
const customPhone = helpers.regex('customPhone', /^(?=.*[0-9])[- +()0-9]+$/)

export default {
  name: 'Data',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
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
      message: {},
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
      }
    },
  },
}
</script>

<style scoped lang="postcss">
input,
textarea {
  @apply w-full bg-transparent border-white text-current focus:placeholder-yellow focus:border-yellow;
}

input,
input::placeholder {
  @apply transition-all ease-in-out duration-200;
}

textarea:focus,
input:focus {
  outline: none;
  box-shadow: none;
}

label {
  @apply text-xs uppercase pb-1 pl-3;
}

label[required] {
  @apply after:ml-0.5 after:content-['*'] after:inline-block after:text-yellow;
}

.form-group {
  @apply relative text-left;
}

.form-error {
  @apply absolute -bottom-1 left-0 transform translate-y-full text-xs text-red-600;
}
</style>

<style lang="postcss"></style>
