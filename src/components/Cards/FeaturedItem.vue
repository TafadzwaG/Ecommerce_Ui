<template>
  <div class="" style="width: 200px">
    <div class="item product product-col product-outimage_aq_onimage product-type-simple">
      <div class="product-inner">
        <div class="product-image">
          <a href="#"
            ><div class="labels" v-if="featured_item.discount > 0">
              <div class="onsale">-{{ featured_item.discount }}%</div>
            </div>
            <div class="inner img-effect">
              <img
                :src="image_url + featured_item.product_images[0].image"
                alt="PRODUCT IMAGE"
              />
              <img
                :data-src="image_url + featured_item.product_images[1].image"
                alt="Porto Extended Camera"
                class="hover-image img-responsive lazypreload lazyloaded"
                style=""
                :src="image_url + featured_item.product_images[1].image"
              />
            </div>
          </a>
          <div class="loader-container" style="display: none">
            <div class="loader"><i class="porto-ajax-loader"></i></div>
          </div>
          <div class="links-on-image">
            <div class="add-links-wrap">
              <div class="add-links clearfix">
                <button
                  class="button product_type_simple add_to_cart_button add-to-cart"
                  @click.prevent="addToCart"
                >
                  <span>Add to Cart</span>
                </button>
                <div class="yith-wcwl-add-to-wishlist">
                  <div class="yith-wcwl-add-button show">
                    <div class="product-wishlist wishlist-4611492053026">
                      <a
                        class="add_to_wishlist link-wishlist"
                        @click.prevent="addToWisList"
                        ><span>Add to wishlist</span></a
                      >
                    </div>
                  </div>
                </div>
                <div class="clear"></div>
                <a class="action-list quickview-icon quickview" @click="openQuickView">
                  <span>Quick View</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="product-content">
          <div class="yith-wcwl-add-to-wishlist">
            <div class="yith-wcwl-add-button show">
              <div class="product-wishlist wishlist-4611492053026">
                <a href="#" class="add_to_wishlist link-wishlist" title="Add to wishlist"
                  ><i class="icon-wishlist"></i
                  ><span data-translate="wish_list.general.add_to_wishlist"
                    >Add to wishlist</span
                  ></a
                >
              </div>
            </div>
          </div>
          <div class="clear"></div>
          <span class="category-list"
            ><a
              v-for="category in featured_item.categories"
              :key="category.id"
              href="#"
              title=""
            >
              {{ category.name }},&nbsp; </a
            >,
          </span>
          <a class="product-loop-title" href="#">
            <h3 class="shopify-loop-product__title">
              <span class="lang1-title">{{ featured_item.name }}</span>
            </h3>
          </a>

          <div class="rating-wrap">
            <div class="rating-content">
              <span class="spr-badge" id="spr_badge_4611492970530" data-rating="0.0">
                <star-rating
                  :star-size="15"
                  :show-rating="false"
                  :rating="featured_item.rating"
                  :read-only="true"
                ></star-rating>
              </span>
            </div>
          </div>

          <span class="price"
            ><del
              ><span class="shopify-Price-amount amount"
                ><span class="money" v-if="featured_item.discount > 0"
                  >${{ featured_item.price }}</span
                ></span
              ></del
            >
            <ins
              ><span class="shopify-Price-amount amount"
                ><span class="money">${{ featured_item.totalPrice }}</span></span
              ></ins
            ></span
          >
        </div>
      </div>
    </div>

    <modal :show="openQuickViewModal" @close="closeQuickView">
      <modal-item
        @close-quick-view="closeQuickView"
        @add-to-wish-list="addToWisList"
        :featured_item="featured_item"
      >
      </modal-item>
    </modal>
  </div>
</template>

<script>
import Modal from "../Modal/Modal.vue";
import ModalItem from "../Modal/ModalItem.vue";
import global from "@/mixins/global.js";
import StarRating from "vue-star-rating";

export default {
  emits: ["add-to-cart", "add-to-wishlist"],
  props: ["featured_item"],
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

  methods: {
    addToCart() {
      this.$emit("add-to-cart");
    },
    addToWisList() {
      this.$emit("add-to-wishlist");
    },
    openQuickView() {
      this.openQuickViewModal = true;
      this.$emit("open-modal");
    },
    closeQuickView() {
      this.openQuickViewModal = false;
      this.$emit("close-modal");
    },
  },
};
</script>

<style lang="scss" scoped>
.lazyload,
.lazyloading,
img:not(.lazyloaded) {
  opacity: 1 !important;
}
.product-image {
  height: 180px !important;
}
h3.shopify-loop-product__title {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.45rem;
  font-family: Poppins;
  font-weight: 400;
  line-height: 1.35;
  text-align: left !important;
  color: inherit;
  font-size: 15px;
  margin: 0px 0px 20px;
  padding: 0px;
  letter-spacing: -0.01emp;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.rating-wrap {
  margin-top: -2rem !important;
  display: flex !important;
  justify-content: center !important;
  align-items: flex-start !important;
  padding: 10px !important;
}
</style>
