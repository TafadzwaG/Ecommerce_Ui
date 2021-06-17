<template>
  <div class="dashboard-upper-info">
    <div class="row align-items-center no-gutters">
      <div class="col-lg-3 col-md-12">
        <div class="d-single-info">
          <p class="user-name">
            Hello <span>{{ userName }}</span>
          </p>
          <p class="user-email">
            (Not {{ userMail }}? <a @click.prevent="logout">Log Out</a>)
          </p>
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="d-single-info">
          <p>Need Assistance? Customer service at.</p>
          <p>admin@devitems.com.</p>
        </div>
      </div>
      <div class="col-lg-3 col-md-12">
        <div class="d-single-info">
          <p>E-mail them at</p>
          <p>support@yoursite.com</p>
        </div>
      </div>
      <div class="col-lg-2 col-md-12">
        <div class="d-single-info text-lg-center">
          <router-link :to="{ name: 'Cart' }" class="view-cart">
            <i class="fa fa-cart-plus"></i>view cart
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userName", "userMail"]),
  },

  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.user-name {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
}
.user-email {
  font-size: 10px;
  /* text-transform: capitalize; */
}
p {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 14px;
}
</style>
