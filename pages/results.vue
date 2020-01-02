<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>Ride Assignments</p>
          <v-row align="center" justify="center">
            <v-card
              v-for="driver in assignments"
              :key="driver.address"
              class="ma-3 pa-6"
              outlined
              tile
            >
              {{ driver.name }}
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  computed: {
    assignments() {
      return this.$store.state.assignments
    }
  }
}
</script>
