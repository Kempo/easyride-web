<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row align="center">
            <nuxt-link
              to="/"
              style="margin-bottom: 18px; text-decoration: none;"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </nuxt-link>
            <p>Ride Assignments</p>
          </v-row>
          <v-row align="center" justify="center">
            <v-card
              v-for="driver in assignments"
              :key="driver.address"
              class="ma-3 pa-6"
              outlined
              tile
              width="300"
              height="300"
            >
              <v-card-title>{{ driver.name }}</v-card-title>
              <v-card-subtitle class="text-truncate">
                {{ driver.address }}
              </v-card-subtitle>
              <v-card-text>
                <v-list dense>
                  <v-subheader>RIDERS</v-subheader>
                  <v-list-item
                    v-for="rider in driver.car.occupants"
                    :key="rider.address"
                  >
                    <v-list-item-icon>
                      <v-icon>mdi-face</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ rider.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
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
