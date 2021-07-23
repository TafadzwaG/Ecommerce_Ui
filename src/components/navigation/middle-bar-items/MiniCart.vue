<template>
  <div class="mini-cart" v-if="isAuthenticated">
    <div
      class="cart-design-7 widget-design-3"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <router-link :to="{ name: 'Cart' }" class="icon-cart-header">
        <i class="icon-mini-cart"></i
        ><span class="cart-total"
          ><span class="cart-qty">{{ cart_total_qty }}</span
          ><span>item(s)</span></span
        >
      </router-link>

      <div class="cart-wrapper theme-border-color" style="display: block" v-if="hover">
        <div class="cart-inner">
          <div class="cart-inner-content">
            <div class="cart-content">
              <div class="total-count">
                <span v-if="cart_total_qty > 0"
                  >{{ cart_total_qty }}<span> item(s)</span></span
                >
                <span else>0<span> item(s)</span></span>

                <router-link
                  :to="{ name: 'Cart' }"
                  class="btn-button view-cart bordered uppercase"
                >
                  <span>View cart</span>
                </router-link>
              </div>

              <p class="no-items-in-cart" v-if="cart_total_qty <= 0">
                You have no items in your shopping cart.
              </p>

              <ul v-else class="clearfix">
                <li class="item-cart" v-for="(item, index) in cartItems" :key="index">
                  <mini-cart-image :image="item.product.product_images[0].image">
                  </mini-cart-image>
                  <div class="product-details row-fluid show-grid">
                    <p class="product-name">
                      <a>
                        <span>
                          <span>{{ item.product.name }}</span>
                          <!-- {{
                            image_url +
                            item.product.product_images[0].image.replace(/^public/, "")
                          }} -->
                        </span>
                      </a>
                    </p>
                    <div class="items">
                      <span class="price"
                        >{{ item.quantity }} ×
                        <span class="amount"
                          ><span class="money">${{ item.product.price }}</span></span
                        ></span
                      >
                    </div>
                    <div class="access">
                      <a href="#" class="btn-remove btn-remove-cart" title="Remove item"
                        ><i
                          class="icon-cancel"
                          @click.prevent="removeItemFromCart(item.id)"
                        ></i
                      ></a>
                    </div>
                  </div>
                  <div class="ajax-loading"></div>
                </li>
              </ul>
            </div>

            <div class="cart-checkout">
              <div class="cart-info">
                <p class="subtotal">
                  <span class="label">Total:</span>
                  <span class="price"
                    ><span class="money">${{ cartCost.toFixed(2) }}</span></span
                  >
                </p>
              </div>
              <div class="actions">
                <router-link
                  :to="{ name: 'Checkout' }"
                  class="btn-button bordered uppercase checkout-cart"
                >
                  <span>Checkout</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import global from "@/mixins/global.js";
import MiniCartImage from "./MiniCartImage.vue";

export default {
  mixins: [global],
  components: {
    MiniCartImage,
  },
  data: () => {
    return {
      hover: false,
    };
  },
  computed: {
    ...mapGetters(["cart_total_qty", "cartCost", "cartItems", "isAuthenticated"]),
  },

  methods: {
    computeImage() {},
    removeItemFromCart(item_id) {
      this.$store.dispatch("removeItemFromCart", item_id);
      this.loadUser();
      setTimeout(() => {
        location.reload();
      }, 2000);
    },
  },
};
</script>

<style scoped></style>
