<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 main-content main-cart">
        <div id="shopify-section-cart-template" class="shopify-section">
          <div class="page-width">
            <div class="checkout-cart text-center">
              <i class="cart-empty icon-bag-2"></i>
              <p class="px-3 py-2 cart-empty">Your cart is currently empty.</p>
              <p class="return-to-shop">
                <router-link :to="{ name: 'Home' }" class="button btn-dark btn-go-shop">
                  Return To Shop
                </router-link>
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
