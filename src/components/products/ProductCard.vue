<template>
  <div class="item product product-col product-default product-type-simple">
    <div class="product-inner">
      <div class="product-image">
        <router-link :to="'/product-details/' + product.id">
          <div class="inner img-effect">
            <img
              alt="Basketball Sports Blue Shoes"
              class="img-responsive main lazyloaded"
              style=""
              :src="image_url + product.product_images[0].image"
            />

            <img
              alt="Basketball Sports Blue Shoes"
              class="hover-image img-responsive lazyloaded"
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
              <a class="action-list quickview-icon quickview" @click="openQuickView">
                <span>Quick View</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product-content">
        <span class="category-list"
          ><a href="#" title="">{{ product.categories[0].name }}</a
          >, {{ product.categories[1].name }}</span
        ><a class="product-loop-title" href="#">
          <h3 class="shopify-loop-product__title">
            <span class="lang1">{{ product.name }}</span>
          </h3>
        </a>

        <div class="rating-wrap">
          <div class="rating-content">
            <span class="spr-badge" id="spr_badge_4878316077133" data-rating="0.0"
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
          ><span class="price-wrapper"
            ><span class="shopify-Price-amount amount"
              ><span class="money">${{ product.totalPrice }}</span></span
            ></span
          >
        </span>
        <div class="add-links-wrap">
          <div class="add-links clearfix">
            <a
              @click.prevent="addToCart"
              class="button product_type_variable add_to_cart_button"
              ><span>Add to Cart</span></a
            >
            <div class="yith-wcwl-add-to-wishlist">
              <div class="yith-wcwl-add-button show">
                <div class="product-wishlist wishlist-4878316077133">
                  <a class="add_to_wishlist link-wishlist" @click.prevent="addToWishlist"
                    ><span>Add to wishlist</span></a
                  >
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <a href="javascript:;" class="link-compare">
              <span>Add to compare</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <modal :show="openQuickViewModal" @close="closeQuickView">
      <modal-item
        @close-quick-view="closeQuickView"
        @add-to-wish-list="addToWisList"
        :featured_item="product"
      >
      </modal-item>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/Modal.vue";
import ModalItem from "@/components/Modal/ModalItem.vue";
import global from "@/mixins/global.js";
import axios from "axios";
import StarRating from "vue-star-rating";
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  mixins: [global],
  components: {
    Modal,
    ModalItem,
    StarRating,
  },
  data: () => {
    return {
      openQuickViewModal: false,
    };
  },
  computed: {},
  methods: {
    openQuickView() {
      this.openQuickViewModal = true;
    },
    closeQuickView() {
      this.openQuickViewModal = false;
    },
    addToCart() {
      try {
        this.$store.dispatch("addItemToCart", {
          product_id: this.product.id,
          quantity: 1,
        });
      } catch (ex) {
        throw new Error(ex);
      } finally {
      }
    },
  },
};
</script>

<style scoped>
.product-image {
  height: 180px;
}
.rating-wrap {
  margin-top: -2rem !important;
}
</style>
