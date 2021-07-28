<template>
  <div class="item product product-col product-default product-type-simple card-simple">
    <div class="product-inner">
      <div class="product-image">
        <router-link :to="'/product-details/' + product.id">
          <div class="inner img-effect" v-if="product.product_images">
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
        <div class="taa">
          <span class="category-list category_name"
            ><a
              href="#"
              v-for="category in product.categories"
              :key="category.id"
              title=""
            >
              {{ category.name }},&nbsp;
            </a></span
          >
        </div>

        <a class="product-loop-title" href="#">
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
                :read-only="true"
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
            >
              <span v-if="loading == true">Adding to cart....</span>
              <span v-else>Add to Cart</span>
            </a>

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

    <!-- <base-spinner> </base-spinner> -->

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
import BaseSpinner from "@/components/ui/BaseSpinner.vue";
export default {
  props: ["product"],
  mixins: [global],
  components: {
    Modal,
    ModalItem,
    StarRating,
    BaseSpinner,
  },
  data: () => {
    return {
      openQuickViewModal: false,
      loading: false,
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
    async addToCart() {
      this.loading = true;

      try {
        await this.$store.dispatch("addItemToCart", {
          product_id: this.product.id,
          quantity: 1,
        });
      } catch (ex) {
        throw new Error(ex);
        this.loading = false;
      } finally {
        this.loading = false;
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
.category_name {
  display: inline;
  overflow: hidden !important;
  /* border: 1px solid red; */
}
.card-simple {
  /* border-radius: 10px;
  background: #fff;
  box-shadow: 20px 20px 60px #c9c6c6, -20px -20px 60px #ffffff; */
}
.taa {
}
</style>
