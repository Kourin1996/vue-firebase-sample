<template>
  <div>This is sign in page</div>
  <router-link to="/">Go to Index</router-link>
  <div>
    <button v-on:click.prevent="onClickSignIn">SignIn with Google</button>
    <button v-on:click.prevent="onClickSignOut">SignOut</button>
  </div>
</template>

<script>
const firebase = require("firebase");
export default {
  name: "SignIn",
  methods: {
    onClickSignIn: async function () {
      try {
        const res = await firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider());
        console.log("signed in", res);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
    onClickSignOut: async function () {
      try {
        const res = await firebase.auth().signOut();
        console.log("signed out", res);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>
