<template>
  <div class="mini-cart">
    <div class="cart-design-7 widget-design-3">
      <router-link :to="{ name: 'Cart' }" class="icon-cart-header">
        <i class="icon-mini-cart"></i
        ><span class="cart-total"
          ><span class="cart-qty">0</span
          ><span data-translate="cart.header.total_numb">item(s)</span></span
        >
      </router-link>

      <div class="cart-wrapper theme-border-color">
        <div class="cart-inner">
          <div class="cart-inner-content">
            <div class="cart-content">
              <div class="total-count">
                <span
                  >0 <span data-translate="cart.header.total_numb">item(s)</span></span
                >
                <a href="cart.html" class="btn-button view-cart bordered uppercase">
                  <span data-translate="cart.header.view_cart">View cart</span>
                </a>
              </div>
              <p class="no-items-in-cart" data-translate="cart.header.no_item">
                You have no items in your shopping cart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
