<template>
  <div>
    <p>FILE SELECTION</p>
    <v-btn
      v-if="$auth.$state.loggedIn"
      @click="$auth.logout()"
      color="teal"
      outlined
    >
      Logout
    </v-btn>
    <v-card>
      <v-list max-height="500" class="overflow-y-auto">
        <v-subheader>SPREADSHEETS</v-subheader>
        <v-btn>Back</v-btn>
        <v-btn @click="forwardPage()"> Next </v-btn>
        <v-list-item v-for="item in currentPage" :key="item.id">
          <v-list-item-icon>
            <v-icon color="green darken-2">mdi-google-spreadsheet</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.id"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {
    currentPage() {
      return this.$store.state.filesList
    }
  },
  mounted() {
    this.update(null)
    // mimeType+%3D+%27application%2Fvnd.google-apps.spreadsheet%27 -> url encoded
    // 'application/vnd.google-apps.spreadsheet'
  },
  methods: {
    async update(token) {
      const filter = encodeURI(
        "mimeType = 'application/vnd.google-apps.spreadsheet'"
      )
        .split('%20')
        .join('+')

      const res = await this.$axios
        .$get(
          'https://www.googleapis.com/drive/v3/files?q=' +
            filter +
            '&orderBy=recency' +
            (token ? '&pageToken=' + token : '')
        )
        .then((r) => r)

      this.$store.commit('updatePage', {
        list: res.files,
        token: res.nextPageToken
      })
      console.log(res)
    },
    forwardPage() {
      this.update(this.$store.state.nextPageToken)
    }
  }
}
</script>
