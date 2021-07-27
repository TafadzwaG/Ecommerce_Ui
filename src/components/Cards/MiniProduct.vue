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
        <span class="shopify-product-reviews-badge" data-id="4611505291298">
          <star-rating
            :star-size="15"
            :show-rating="false"
            :rating="product.rating"
            :read-only="true"
          ></star-rating>
        </span>
      </div>
      <span class="shopify-Price-amount amount"
        ><span class="money">${{ product.price }}</span></span
      >
    </div>
  </li>
</template>

<script>
import global from "@/mixins/global.js";
import StarRating from "vue-star-rating";
export default {
  mixins: [global],
  props: ["product"],
  components: {
    StarRating,
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.product-title {
  color: #222529 !important;
}
</style>
