<template>
  <div class="content" data-content="">
    <div class="wrap">
      <div class="main">
        <header class="main__header" role="banner">
          <a class="logo logo--left" href="https://porto-demo.myshopify.com/"
            ><span class="logo__text heading-1">porto-demo</span></a
          >

          <h1 class="visually-hidden">Shipping</h1>

          <nav aria-label="Breadcrumb">
            <ol class="breadcrumb" role="list">
              <li class="breadcrumb__item breadcrumb__item--completed">
                <a class="breadcrumb__link" href="https://porto-demo.myshopify.com/cart"
                  >Cart</a
                >
                <svg
                  class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use xlink:href="#chevron-right"></use>
                </svg>
              </li>

              <li class="breadcrumb__item breadcrumb__item--completed">
                <a
                  class="breadcrumb__link"
                  href="https://porto-demo.myshopify.com/15595181/checkouts/e97bc5e1d758b3aa44ae61c89a2f2156?step=contact_information"
                  >Information</a
                >
                <svg
                  class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use xlink:href="#chevron-right"></use>
                </svg>
              </li>
              <li class="breadcrumb__item breadcrumb__item--current" aria-current="step">
                <span class="breadcrumb__text">Shipping</span>
                <svg
                  class="icon-svg icon-svg--color-adaptive-light icon-svg--size-10 breadcrumb__chevron-icon"
                  aria-hidden="true"
                  focusable="false"
                >
                  <use xlink:href="#chevron-right"></use>
                </svg>
              </li>
              <li class="breadcrumb__item breadcrumb__item--blank">
                <span class="breadcrumb__text">Payment</span>
              </li>
            </ol>
          </nav>

          <div class="shown-if-js" data-alternative-payments=""></div>
        </header>
        <main class="main__content" role="main">
          <iframe
            src="./Shipping - porto-demo -
              Checkout_files/google_analytics_iframe.html"
            onload="this.setAttribute(&#39;data-loaded&#39;, true)"
            sandbox="allow-scripts allow-same-origin"
            id="google-analytics-sandbox"
            tabindex="-1"
            class="visually-hidden"
            style="display: none"
            aria-hidden="true"
            data-loaded="true"
          ></iframe>

          <div class="step" data-step="shipping_method" data-last-step="false">
            <form
              class="edit_checkout"
              data-shipping-method-form="true"
              data-ignore-floating-label="true"
              action="https://porto-demo.myshopify.com/15595181/checkouts/e97bc5e1d758b3aa44ae61c89a2f2156"
              accept-charset="UTF-8"
              method="post"
            >
              <input type="hidden" name="_method" value="patch" /><input
                type="hidden"
                name="authenticity_token"
                value="yfnc7ECUt695zzEuTwFMQap/a7gZNZhEP3sKRwrxWEfjKTLBOaCTpSiMokRm/PGTZV1SK9Zgk3bMPnDaEauODw=="
              />
              <input
                type="hidden"
                name="previous_step"
                id="previous_step"
                value="shipping_method"
              />
              <input type="hidden" name="step" value="payment_method" />

              <div class="step__sections">
                <div class="section">
                  <div class="content-box">
                    <div
                      role="table"
                      class="content-box__row content-box__row--tight-spacing-vertical"
                    >
                      <div role="row" class="review-block">
                        <div class="review-block__inner">
                          <div role="rowheader" class="review-block__label">Contact</div>
                          <div role="cell" class="review-block__content">
                            <bdo dir="ltr">gashira@outlook.com</bdo>
                          </div>
                        </div>
                        <div role="cell" class="review-block__link">
                          <a
                            class="link--small"
                            href="https://porto-demo.myshopify.com/15595181/checkouts/e97bc5e1d758b3aa44ae61c89a2f2156?step=contact_information"
                          >
                            <span aria-hidden="true">Change</span>
                            <span class="visually-hidden"
                              >Change contact information</span
                            >
                          </a>
                        </div>
                      </div>

                      <div role="row" class="review-block">
                        <div class="review-block__inner">
                          <div role="rowheader" class="review-block__label">Ship to</div>
                          <div role="cell" class="review-block__content">
                            <address class="address address--tight">
                              5884 New Cannan Highfield, Highfiels, Harare , Zimbabwe
                              <address></address>
                            </address>
                          </div>
                        </div>
                        <div role="cell" class="review-block__link">
                          <a
                            class="link--small"
                            href="https://porto-demo.myshopify.com/15595181/checkouts/e97bc5e1d758b3aa44ae61c89a2f2156?step=contact_information"
                          >
                            <span aria-hidden="true">Change</span>
                            <span class="visually-hidden">Change shipping address</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="section section--shipping-method">
                  <div class="section__header">
                    <h2 class="section__title" id="main-header" tabindex="-1">
                      Shipping method
                    </h2>
                  </div>

                  <div class="section__content">
                    <div class="content-box" data-shipping-methods="">
                      <div class="content-box__row">
                        <div
                          class="radio-wrapper"
                          data-shipping-method="shopify-International%20Shipping-18.00"
                        >
                          <div class="radio__input">
                            <input
                              class="input-radio"
                              data-checkout-total-shipping="$18.00"
                              data-checkout-total-shipping-cents="1800"
                              data-checkout-shipping-rate="$18.00"
                              data-checkout-original-shipping-rate="$18.00"
                              data-checkout-total-price="$218.00"
                              data-checkout-total-price-cents="21800"
                              data-checkout-payment-due="$218.00"
                              data-checkout-payment-due-cents="21800"
                              data-checkout-payment-subform="required"
                              data-checkout-subtotal-price="$200.00"
                              data-checkout-subtotal-price-cents="20000"
                              data-checkout-total-taxes="$0.00"
                              data-checkout-total-taxes-cents="0"
                              data-checkout-multiple-shipping-rates-group="false"
                              data-backup="shopify-International%20Shipping-18.00"
                              type="radio"
                              value="shopify-International%20Shipping-18.00"
                              name="checkout[shipping_rate][id]"
                              id="checkout_shipping_rate_id_shopify-international20shipping-18_00"
                              checked="checked"
                            />
                          </div>
                          <label
                            class="radio__label"
                            for="checkout_shipping_rate_id_shopify-international20shipping-18_00"
                          >
                            <span
                              class="radio__label__primary"
                              data-shipping-method-label-title="International
                                Shipping"
                            >
                              International Shipping
                            </span>
                            <span class="radio__label__accessory">
                              <span class="content-box__emphasis"> $18.00 </span>
                            </span>
                          </label>
                        </div>
                        <!-- /radio-wrapper-->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="step__footer" data-step-footer="">
                <button
                  name="button"
                  type="submit"
                  id="continue_button"
                  class="step__footer__continue-btn btn"
                  aria-busy="false"
                >
                  <span class="btn__content" data-continue-button-content="true"
                    >Continue to payment</span
                  ><svg
                    class="icon-svg icon-svg--size-18 btn__spinner icon-svg--spinner-button"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <use xlink:href="#spinner-button"></use>
                  </svg>
                </button>
                <a
                  class="step__footer__previous-link"
                  href="https://porto-demo.myshopify.com/15595181/checkouts/e97bc5e1d758b3aa44ae61c89a2f2156?step=contact_information"
                  ><svg
                    focusable="false"
                    aria-hidden="true"
                    class="icon-svg icon-svg--color-accent icon-svg--size-10 previous-link__icon"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 10"
                  >
                    <path d="M8 1L7 0 3 4 2 5l1 1 4 4 1-1-4-4"></path></svg
                  ><span class="step__footer__previous-link-content"
                    >Return to information</span
                  ></a
                >
              </div>

              <input
                type="hidden"
                name="checkout[client_details][browser_width]"
                value="1518"
              /><input
                type="hidden"
                name="checkout[client_details][browser_height]"
                value="706"
              /><input
                type="hidden"
                name="checkout[client_details][javascript_enabled]"
                value="1"
              /><input
                type="hidden"
                name="checkout[client_details][color_depth]"
                value="24"
              /><input
                type="hidden"
                name="checkout[client_details][java_enabled]"
                value="false"
              /><input
                type="hidden"
                name="checkout[client_details][browser_tz]"
                value="420"
              />
            </form>
          </div>

          <div class="hidden">
            <span class="visually-hidden" id="forwarding-external-new-window-message">
              Opens external website in a new window.
            </span>

            <span class="visually-hidden" id="forwarding-new-window-message">
              Opens in a new window.
            </span>

            <span class="visually-hidden" id="forwarding-external-message">
              Opens external website.
            </span>

            <span class="visually-hidden" id="checkout-context-step-one">
              Customer information - porto-demo - Checkout
            </span>
          </div>
        </main>
        <footer class="main__footer" role="contentinfo">
          <p class="copyright-text">All rights reserved porto-demo</p>
        </footer>
      </div>
      <aside class="sidebar" role="complementary">
        <div class="sidebar__header">
          <a class="logo logo--left" href="https://porto-demo.myshopify.com/"
            ><span class="logo__text heading-1">porto-demo</span></a
          >

          <h1 class="visually-hidden">Shipping</h1>
        </div>
        <div class="sidebar__content">
          <div
            id="order-summary"
            class="order-summary order-summary--is-collapsed"
            data-order-summary=""
          >
            <h2 class="visually-hidden-if-js">Order summary</h2>

            <div class="order-summary__sections">
              <div class="order-summary__section order-summary__section--product-list">
                <div class="order-summary__section__content">
                  <table class="product-table">
                    <caption class="visually-hidden">
                      Shopping cart
                    </caption>
                    <thead class="product-table__header">
                      <tr>
                        <th scope="col">
                          <span class="visually-hidden">Product image</span>
                        </th>
                        <th scope="col">
                          <span class="visually-hidden">Description</span>
                        </th>
                        <th scope="col"><span class="visually-hidden">Quantity</span></th>
                        <th scope="col"><span class="visually-hidden">Price</span></th>
                      </tr>
                    </thead>
                    <tbody data-order-summary-section="line-items">
                      <tr
                        class="product"
                        data-product-id="4878315487309"
                        data-variant-id="33199524708429"
                        data-product-type=""
                        data-customer-ready-visible=""
                      >
                        <td class="product__image">
                          <div class="product-thumbnail">
                            <div class="product-thumbnail__wrapper">
                              <img
                                alt="Men Black Gentle Belt - Small / Blue"
                                class="product-thumbnail__image"
                                src="images/products/1.jpg"
                              />
                            </div>
                            <span class="product-thumbnail__quantity" aria-hidden="true"
                              >1</span
                            >
                          </div>
                        </td>
                        <th class="product__description" scope="row">
                          <span class="product__description__name order-summary__emphasis"
                            >Men Black Gentle Belt</span
                          >
                          <span
                            class="product__description__variant order-summary__small-text"
                            >Small / Blue</span
                          >
                        </th>
                        <td class="product__quantity">
                          <span class="visually-hidden"> 1 </span>
                        </td>
                        <td class="product__price">
                          <span class="order-summary__emphasis skeleton-while-loading"
                            >$99.00</span
                          >
                        </td>
                      </tr>
                      <tr
                        class="product"
                        data-product-id="4878315356237"
                        data-variant-id="33199524216909"
                        data-product-type=""
                        data-customer-ready-visible=""
                      >
                        <td class="product__image">
                          <div class="product-thumbnail">
                            <div class="product-thumbnail__wrapper">
                              <img
                                alt="Men Black Sports Watch - Small / Red"
                                class="product-thumbnail__image"
                                src="images/products/3.jpg"
                              />
                            </div>
                            <span class="product-thumbnail__quantity" aria-hidden="true"
                              >1</span
                            >
                          </div>
                        </td>
                        <th class="product__description" scope="row">
                          <span class="product__description__name order-summary__emphasis"
                            >Men Black Sports Watch</span
                          >
                          <span
                            class="product__description__variant order-summary__small-text"
                            >Small / Red</span
                          >
                        </th>
                        <td class="product__quantity">
                          <span class="visually-hidden"> 1 </span>
                        </td>
                        <td class="product__price">
                          <span class="order-summary__emphasis skeleton-while-loading"
                            >$101.00</span
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    class="order-summary__scroll-indicator"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    Scroll for more items
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      class="icon-svg icon-svg--size-12"
                    >
                      <use xlink:href="#down-arrow"></use>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                class="order-summary__section order-summary__section--total-lines"
                data-order-summary-section="payment-lines"
              >
                <table class="total-line-table">
                  <caption class="visually-hidden">
                    Cost summary
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">
                        <span class="visually-hidden">Description</span>
                      </th>
                      <th scope="col"><span class="visually-hidden">Price</span></th>
                    </tr>
                  </thead>
                  <tbody class="total-line-table__tbody">
                    <tr class="total-line total-line--subtotal">
                      <th class="total-line__name" scope="row">Subtotal</th>
                      <td class="total-line__price">
                        <span
                          class="order-summary__emphasis skeleton-while-loading"
                          data-checkout-subtotal-price-target="20000"
                          >$200.00</span
                        >
                      </td>
                    </tr>

                    <tr class="total-line total-line--shipping">
                      <th class="total-line__name" scope="row">
                        <span>Shipping</span>
                      </th>
                      <td class="total-line__price">
                        <span
                          class="skeleton-while-loading order-summary__emphasis"
                          data-checkout-total-shipping-target="1800"
                          >$18.00</span
                        >
                      </td>
                    </tr>

                    <tr
                      class="total-line total-line--taxes hidden"
                      data-checkout-taxes=""
                    >
                      <th class="total-line__name" scope="row">Taxes</th>
                      <td class="total-line__price">
                        <span
                          class="order-summary__emphasis skeleton-while-loading"
                          data-checkout-total-taxes-target="0"
                          >$0.00</span
                        >
                      </td>
                    </tr>
                  </tbody>
                  <tfoot class="total-line-table__footer">
                    <tr class="total-line">
                      <th class="total-line__name payment-due-label" scope="row">
                        <span class="payment-due-label__total">Total</span>
                      </th>
                      <td
                        class="total-line__price payment-due"
                        data-presentment-currency="USD"
                      >
                        <span class="payment-due__currency remove-while-loading"
                          >USD</span
                        >
                        <span
                          class="payment-due__price skeleton-while-loading--lg"
                          data-checkout-payment-due-target="21800"
                          >$218.00</span
                        >
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div
            class="visually-hidden"
            data-order-summary-section="accessibility-live-region"
          >
            <div aria-live="polite" aria-atomic="true" role="status">
              Updated total price:
              <span data-checkout-payment-due-target="21800">$218.00</span>
            </div>
          </div>

          <div
            id="partial-icon-symbols"
            class="icon-symbols"
            data-tg-refresh="partial-icon-symbols"
            data-tg-refresh-always="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg">
              <symbol id="spinner-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path
                    d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10
                      0v2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8h2z"
                  ></path>
                </svg>
              </symbol>
              <symbol id="chevron-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
                  <path d="M2 1l1-1 4 4 1 1-1 1-4 4-1-1 4-4"></path>
                </svg>
              </symbol>
              <symbol id="down-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                  <path
                    d="M10.817 7.624l-4.375 4.2c-.245.235-.64.235-.884
                      0l-4.375-4.2c-.244-.234-.244-.614
                      0-.848.245-.235.64-.235.884 0L5.375
                      9.95V.6c0-.332.28-.6.625-.6s.625.268.625.6v9.35l3.308-3.174c.122-.117.282-.176.442-.176.16
                      0 .32.06.442.176.244.234.244.614 0 .848"
                  ></path>
                </svg>
              </symbol>
            </svg>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div.wrap {
  display: flex;
  margin: 0px auto;
  max-width: 78.5714em;
  zoom: 1;
  padding: 0px 5%;
  width: 90%;
  flex-direction: row;
  flex: 1 0 auto;
}
div.main {
  width: 52%;
  padding-right: 6%;
  float: left;
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 4em;
}
span.logo__text.heading-1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 28px;
  line-height: 1.3em;
  color: rgb(51, 51, 51);
}

span.logo__text.heading-1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 28px;
  line-height: 1.3em;
  color: rgb(51, 51, 51);
}
div.content-box__row.content-box__row--tight-spacing-vertical {
  padding: 1.14286em;
  position: relative;
  zoom: 1;
  display: table;
  box-sizing: border-box;
  width: 100%;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-top: 0.857143em;
  padding-bottom: 0.857143em;
}
div.review-block__label {
  color: rgb(115, 115, 115);
  padding-right: 1.14286em;
  flex: 0 1 5em;
}
div.review-block__content {
  flex: 5 1 0%;
  color: rgb(51, 51, 51);
  padding-right: 1.14286em;
}
div.review-block__label {
  color: rgb(115, 115, 115);
  padding-right: 1.14286em;
  flex: 0 1 5em;
}
h2#main-header.section__title {
  font-weight: 400;
  margin: 0px;
  line-height: 1.3em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 18px;
  color: rgb(51, 51, 51);
}
button#continue_button.step__footer__continue-btn.btn {
  color: rgb(255, 255, 255);
  font-style: inherit;
  font-variant: inherit;
  font-weight: 500;
  font-stretch: inherit;
  font-size: 14px;
  font-family: inherit;
  margin: 0px;
  padding: 1.4em 1.7em;
  appearance: button;
  border: 1px solid transparent;
  background: 0px 0px;
  line-height: normal;
  overflow: visible;
  text-transform: none;
  cursor: pointer;
  display: inline-block;
  background-color: rgb(0, 96, 142);
  background-clip: border-box;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: center;
  position: relative;
  transition: background-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s,
    box-shadow 0.2s ease-in-out 0s, -webkit-box-shadow 0.2s ease-in-out 0s;
  float: right;
}
span.btn__content {
  position: relative;
  transition: opacity 0.3s ease-in-out 0s;
}
span.step__footer__previous-link-content {
  vertical-align: middle;
}
aside.sidebar {
  position: relative;
  color: rgb(83, 83, 83);
  width: 38%;
  padding-left: 4%;
  background-position: left top;
  float: right;
  padding-top: 4em;
}
</style>
