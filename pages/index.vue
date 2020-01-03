<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          Carpools
        </v-card-title>
        <v-card-text>
          <p>
            Hassle-free, easy, and simple ride organizing for large group
            events.
          </p>
        </v-card-text>
        <v-card-actions>
          <!-- Pushes the buttons to the right of the container -->
          <v-btn color="primary" nuxt to="/inspire">
            Integrate
          </v-btn>
          <v-spacer />
          <v-file-input
            label="File input"
            dense
            hide-details
            outlined
            @change="fetchRides"
          />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    async fetchRides(file) {
      // http://kempo-easyride.herokuapp.com/rides
      // http://localhost:4567/rides
      const res = await this.$axios
        .$post('http://kempo-easyride.herokuapp.com/rides', file)
        .then((r) => r)

      this.$store.commit('addAll', JSON.parse(JSON.stringify(res)))

      this.$router.push({
        path: 'results'
      })
    }
  }
}
</script>
