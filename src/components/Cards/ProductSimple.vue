<template>
  <div
    class="item product product-col product-outimage_aq_onimage product-type-simple card-simple"
  >
    <div class="product-inner">
      <div class="product-image">
        <router-link :to="'/product-details/' + product.id">
          <div class="inner img-effect">
            <img
              alt="Black Glasses"
              class="img-responsive main lazypreload lazyloaded"
              style=""
              :src="image_url + product.product_images[0].image"
            />

            <img
              alt="Black Glasses"
              class="hover-image img-responsive lazypreload lazyloaded"
              style=""
              :src="image_url + product.product_images[1].image"
            />
          </div>
        </router-link>

        <div class="loader-container" style="display: none">
          <div class="loader"><i class="porto-ajax-loader"></i></div>
        </div>
        <div class="links-on-image">
          <div class="add-links-wrap">
            <div class="add-links clearfix">
              <a class="button product_type_variable add_to_cart_button"
                ><span>Add to Cart</span></a
              >
              <div class="yith-wcwl-add-to-wishlist">
                <div class="yith-wcwl-add-button show">
                  <div class="product-wishlist wishlist-4747899142191">
                    <a href="javascript:;" class="add_to_wishlist link-wishlist"
                      ><span>Add to wishlist</span></a
                    >
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <a href="javascript:;" class="link-compare"> <span>Add to compare</span> </a
              ><a class="action-list quickview-icon quickview">
                <span data-translate="collections.general.quickview">Quick View</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product-content">
        <div class="yith-wcwl-add-to-wishlist">
          <div class="yith-wcwl-add-button show">
            <div class="product-wishlist wishlist-4747899142191">
              <a
                href="javascript:;"
                class="add_to_wishlist link-wishlist"
                title="Add to wishlist"
                ><i class="icon-wishlist"></i><span>Add to wishlist</span></a
              >
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <span
          class="category-list category_name"
          v-for="category in product.categories"
          :key="category.id"
          ><a title=""> {{ category.name }} </a>,</span
        ><a class="product-loop-title">
          <h3 class="shopify-loop-product__title">
            <span class="lang1">{{ product.name }}</span>
          </h3>
        </a>

        <div class="rating-wrap">
          <div class="rating-content">
            <span class="spr-badge" id="spr_badge_4747899142191" data-rating="0.0"
              ><star-rating
                :star-size="15"
                :show-rating="false"
                :rating="product.rating"
              ></star-rating>
            </span>
          </div>
        </div>

        <div class="description">
          <div class="lang1">
            {{ product.description }}
          </div>
        </div>
        <span class="price"
          ><span class="shopify-Price-amount amount"
            ><span class="money">${{ product.totalPrice }}</span></span
          ></span
        >
      </div>
    </div>
  </div>
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
.category_name {
  display: inline-block !important;
  opacity: 1;
}
.rating-wrap {
  margin-top: -2rem !important;
}
.card-simple {
  // border-radius: 10px;
  // background: #fff;
  // box-shadow: 20px 20px 60px #c9c6c6, -20px -20px 60px #ffffff;
}
</style>
