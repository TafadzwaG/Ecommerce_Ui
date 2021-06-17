<template>
  <ul class="links">
    <li v-if="isAuthenticated">
      <router-link :to="{ name: 'Dashboard' }"> Dashboard </router-link>
    </li>
    <li>
      <router-link to="/about">About Us</router-link>
    </li>
    <li>
      <router-link to="/"> My Wishlist </router-link>
    </li>
    <li>
      <router-link :to="{ name: 'Blog' }">Blog</router-link>
    </li>

    <li v-if="isAuthenticated">
      <a href="" @click.prevent="logout">Log out</a>
    </li>
    <li v-else>
      <router-link :to="{ name: 'Login' }">Log in</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => {},

  computed: {
    ...mapGetters(["token", "isAuthenticated"]),
  },

  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
