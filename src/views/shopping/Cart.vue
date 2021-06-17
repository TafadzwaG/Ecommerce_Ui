<template>
  <div class="main-container">
    <div class="main-wrapper">
      <div class="main pt-main">
        <div class="sp-page-header page-header-8">
          <cart-bread-crumb> </cart-bread-crumb>
        </div>

        <empty-cart v-if="isEmpty"> </empty-cart>
        <cart-items> </cart-items>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyCart from "@/components/cart/EmptyCart.vue";
import CartBreadCrumb from "@/components/cart/CartBreadCrumb.vue";
import CartItems from "@/components/cart/CartItems.vue";
import { ref, reactive } from "vue";
export default {
  components: {
    EmptyCart,
    CartBreadCrumb,
    CartItems,
  },

  setup() {
    const isEmpty = ref(false);

    return {
      isEmpty,
    };
  },
};
</script>

<style lang="scss" scoped>
.mini-cart .cart-wrapper {
  display: none !important;
}
.checkout-cart {
  min-height: 250px;
}
i.cart-empty {
  font-size: 100px;
  color: #d3d3d4;
}
.btn-go-shop {
  min-width: 200px;
  padding: 16px 0;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.015em;
  text-align: center;
  color: #fff;
  border: none;
  line-height: 1.5;
  display: inline-block;
  text-transform: uppercase;
}
</style>
