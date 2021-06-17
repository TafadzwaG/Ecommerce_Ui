<template>
  <tr>
    <td colspan="10" class="actions px-md-2">
      <div class="d-sm-flex justify-content-between">
        <router-link :to="{ name: 'ShopList' }" class="btn-button">
          Continue Shopping
        </router-link>

        <router-link :to="{ name: 'Home' }" class="btn-button btn-update tiny">
          Update Shopping Cart
        </router-link>
      </div>
    </td>
  </tr>
</template>

<script>
export default {};
</script>

<style></style>
