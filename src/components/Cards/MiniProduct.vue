<template>
  <li v-if="product !== 0">
    <router-link :to="'/product-details/' + product.id" class="product-image">
      <div class="inner">
        <img
          :data-src="image_url + product.product_images[0].image"
          alt="Casual Blue Shoes"
          class="img-responsive main lazypreload lazyloaded"
          style=""
          :src="image_url + product.product_images[0].image"
        />
      </div>
    </router-link>

    <div class="product-details">
      <a href="#" title="Casual Blue Shoes">
        <span class="product-title">
          <span>{{ product.name }}</span>
        </span>
      </a>
      <div class="star-rating">
        <span class="shopify-product-reviews-badge" data-id="4611505291298"></span>
      </div>
      <span class="shopify-Price-amount amount"
        ><span class="money">${{ product.price }}</span></span
      >
    </div>
  </li>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: ["product"],
  data: () => {
    return {};
  },
};
</script>

<style>
.product-title {
  color: #222529 !important;
}
</style>
