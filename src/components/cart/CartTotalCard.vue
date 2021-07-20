<template>
  <div class="col-lg-4">
    <div class="card card-default">
      <h4 class="card-sub-title text-md m-b-md pb-1">Cart Totals</h4>
      <div class="card-body p-0">
        <table class="responsive cart-total" cellspacing="0">
          <tbody>
            <tr class="cart-subtotal">
              <th>
                <h4 class="mb-0">Subtotal</h4>
              </th>
              <td>
                <span class="shopify-Price-amount amount">
                  <span class="price"
                    ><span class="money">${{ cartCost }}</span></span
                  >
                </span>
              </td>
            </tr>
            <tr class="">
              <th colspan="2">
                <h4 class="m-b-sm">Estimate Shipping and Tax</h4>

                <div id="shipping-calculator-wrapper" class="shipping-calculator-wrapper">
                  <div id="shipping-calculator" class="cart-items clearfix">
                    <div class="cart-item">
                      <div id="wrapper-resquest">
                        <p class="m-b-sm">
                          Enter your destination to get a shipping estimate.
                        </p>
                        <ul class="form-list">
                          <li>
                            <label for="address_country" class="control-label"
                              ><span>Country</span><em>*</em></label
                            >
                            <select
                              id="address_country"
                              class="btn-block"
                              name="address[country]"
                              data-default=""
                            >
                              <option value="---" data-provinces="[]">---</option>
                              <option value="Afghanistan" data-provinces="[]">
                                South Africa
                              </option>

                              <option value="Zimbabwe" data-provinces="[]">
                                Zimbabwe
                              </option>
                            </select>
                          </li>
                          <li id="address_province_container" style="display: none">
                            <label
                              for="address_province"
                              id="address_province_label"
                              class="control-label"
                              >State</label
                            >
                            <select
                              id="address_province"
                              class="btn-block address_form"
                              name="address[province]"
                              data-default=""
                            ></select>
                          </li>
                          <li class="group-input">
                            <label>Zip/Postal Code</label>
                            <input
                              class="input-full"
                              type="text"
                              name="address[zip]"
                              id="address_zip"
                              value=""
                            />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                          </li>
                        </ul>
                        <div class="buttons-set">
                          <input
                            type="button"
                            class="btn-button bordered get-rates mb-3"
                            value="Get a Quote"
                          />
                        </div>
                      </div>
                      <div
                        id="wrapper-response"
                        class="control-group"
                        style="display: block"
                        v-if="zipError"
                      >
                        <p id="shipping-rates-feedback" class="error">
                          Error : country is not supported; zip can't be blank
                        </p>
                        <ul id="shipping-rates"></ul>
                      </div>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
            <tr class="order-total">
              <th>
                <h4 class="text-md mb-0">Total</h4>
              </th>
              <td>
                <strong>
                  <span class="woocommerce-Price-amount amount">
                    <span class="price"
                      ><span class="money" data-currency-usd="$200.00"
                        >${{ cartCost }}</span
                      ></span
                    >
                  </span>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="sp-proceed-to-checkout">
          <router-link :to="{ name: 'Checkout' }" class="btn btn-dark w-100 m-t-lg py-3">
            Proceed to checkout<i class="icon-arrow-right-solid no-padding pl-3"></i>
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
    ...mapGetters(["cart_total_qty", "cartCost"]),
  },
};
</script>

<style></style>
