<template>
  <ul class="breadcrumb text-center">
    <li class="current">
      <router-link :to="{ name: 'Cart' }">Shopping Cart</router-link>
    </li>
    <li class="">
      <i class="icon-angle-right"></i>

      <router-link :to="{ name: 'Checkout' }">Proceed to checkout</router-link>
    </li>
    <li class="disable">
      <i class="icon-angle-right"></i>

      <router-link :to="{ name: 'Shipping' }">Order Complete</router-link>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
