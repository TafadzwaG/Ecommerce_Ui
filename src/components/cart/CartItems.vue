<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 main-content main-cart">
        <div id="shopify-section-cart-template" class="shopify-section">
          <div
            class="page-width"
            data-section-id="cart-template"
            data-section-type="cart-template"
          >
            <div class="checkout-cart text-center">
              <div class="cart-inner cart-v2">
                <form novalidate="" class="sp-cart-form">
                  <div class="row mb-5 pb-2">
                    <div class="col-lg-8 text-left">
                      <div class="cart-table-wrap">
                        <table class="shop_table cart-table responsive">
                          <thead>
                            <tr>
                              <th class="product-thumbnail" rowspan="1"></th>
                              <th class="product-name">
                                <span data-translate="cart.label.product">Product</span>
                              </th>
                              <th class="product-price">
                                <span data-translate="cart.label.price">Price</span>
                              </th>
                              <th class="product-quantity">
                                <span data-translate="cart.label.quantity">Quantity</span>
                              </th>
                              <th class="product-subtotal text-center text-md-right">
                                <span data-translate="cart.label.total">Subtotal</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <cart-item-card> </cart-item-card>

                            <actions> </actions>
                          </tbody>
                        </table>
                      </div>
                      <div class="grid__item medium-up--one-half">
                        <label for="CartSpecialInstructions"
                          >Special instructions for seller</label
                        >
                        <textarea
                          name="note"
                          id="CartSpecialInstructions"
                          class="cart__note"
                        ></textarea>
                      </div>
                    </div>

                    <cart-total-card> </cart-total-card>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import CartTotalCard from "@/components/cart/CartTotalCard.vue";
import CartItemCard from "@/components/cart/CartItemCard.vue";
import Actions from "@/components/cart/Actions.vue";

export default {
  components: {
    CartTotalCard,
    CartItemCard,
    Actions,
  },
  setup() {
    const zipError = ref(false);

    return {
      zipError,
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
