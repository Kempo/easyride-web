<template>
  <div>
    <p>Hello this is after login. Check the console.</p>
    <v-btn
      v-if="$auth.$state.loggedIn"
      @click="$auth.logout()"
      color="teal"
      outlined
    >
      Logout
    </v-btn>
  </div>
</template>
<script>
export default {
  async mounted() {
    const res = await this.$axios
      .$get(
        'https://www.googleapis.com/drive/v3/files?q=mimeType+%3D+%27application%2Fvnd.google-apps.spreadsheet%27'
      )
      .then((r) => r)
    console.log(res)
    // mimeType+%3D+%27application%2Fvnd.google-apps.spreadsheet%27 -> url encoded
    // "application/vnd.google-apps.spreadsheet"
  }
}
</script>
