<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to EasyRide
        </v-card-title>
        <v-card-text>
          <p>
            Hassle-free, easy, and simple ride organizing for large group
            events.
          </p>
          <hr class="my-2" />
          <a href="https://nuxtjs.org/" target="_blank">
            Nuxt Documentation
          </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <!-- Pushes the buttons to the right of the container -->
          <v-btn color="primary" nuxt to="/inspire">
            Integrate
          </v-btn>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Upload
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
