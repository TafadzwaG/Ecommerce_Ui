<template>
  <div class="conta">
    <div class="header container">
      <div class="header-left">
        <logo></logo>
      </div>

      <div class="header-center">
        <search></search>
      </div>
      <div class="header-right">
        <div class="cart-area">
          <div class="custom-block">
            <div class="header-contact">
              <call></call>

              <router-link to="/dashboard" class="my-account m-l-xs mr-1 mr-lg-2">
                <i class="icon-user-2"></i>
              </router-link>

              <router-link to="/" class="wishlist-popup mr-1 mr-lg-2 pr-lg-1">
                <i class="icon-wishlist-2"></i>
              </router-link>
            </div>
          </div>
          <mini-cart></mini-cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../ui/Logo.vue";
import Search from "../ui/Search.vue";
import CallUs from "./middle-bar-items/CallUs.vue";
import MiniCart from "./middle-bar-items/MiniCart.vue";
export default {
  components: {
    Logo,
    Search,
    Call: CallUs,
    MiniCart,
  },
};
</script>

<style lang="scss" scoped>
.conta {
  margin-left: 9.5rem;
  margin-right: 9.5rem;
}
div.header-center {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
  flex: 1 1 0%;
  padding-left: 10px;
  padding-right: 0px;
}
</style>
