<template>
  <div>This is index page</div>
  <router-link to="/signin">Go to SignIn</router-link>
  <template v-if="isSignedIn">
    <router-link to="/profile">Go to Profile</router-link>
  </template>
</template>

<script>
const firebase = require("firebase");

export default {
  name: "Index",
  computed: {
    isSignedIn: () => !!firebase.auth().currentUser,
  },
};
</script>

<style>
</style>
