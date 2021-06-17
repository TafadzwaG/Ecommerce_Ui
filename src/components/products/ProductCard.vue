<template>
  <div class="item product product-col product-default product-type-simple">
    <div class="product-inner">
      <div class="product-image">
        <a href="/collections/caps/products/basketball-sports-blue-shoes"
          ><div class="inner img-effect">
            <img
              alt="Basketball Sports Blue Shoes"
              class="img-responsive main lazyloaded"
              style=""
              :src="image_hover"
            />

            <img
              alt="Basketball Sports Blue Shoes"
              class="hover-image img-responsive lazyloaded"
              style=""
              :src="image"
            />
          </div>
        </a>
        <div class="loader-container" style="display: none">
          <div class="loader"><i class="porto-ajax-loader"></i></div>
        </div>
        <div class="links-on-image">
          <div class="add-links-wrap">
            <div class="add-links clearfix">
              <a
                href="#"
                class="action-list quickview-icon quickview"
                @click="openQuickView"
              >
                <span>Quick View</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="product-content">
        <span class="category-list"
          ><a href="#" title="">Accessories</a>,&nbsp;<a href="#" title=""
            >BEST SELLING PRODUCTS</a
          ></span
        ><a class="product-loop-title" href="#">
          <h3 class="shopify-loop-product__title">
            <span class="lang1">Basketball Sports Blue Shoes</span>
          </h3>
        </a>

        <div class="rating-wrap">
          <div class="rating-content">
            <span class="spr-badge" id="spr_badge_4878316077133" data-rating="0.0"
              ><span class="spr-starrating spr-badge-starrating"
                ><i class="spr-icon spr-icon-star-empty"></i
                ><i class="spr-icon spr-icon-star-empty"></i
                ><i class="spr-icon spr-icon-star-empty"></i
                ><i class="spr-icon spr-icon-star-empty"></i
                ><i class="spr-icon spr-icon-star-empty"></i></span
              ><span class="spr-badge-caption">No reviews</span>
            </span>
          </div>
        </div>

        <div class="description">
          <div class="lang1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi...
          </div>
        </div>
        <span class="price"
          ><span class="price-wrapper"
            ><span class="shopify-Price-amount amount"
              ><span class="money" data-currency-usd="$101.00" data-currency="USD"
                >$101.00</span
              ></span
            ></span
          >
        </span>
        <div class="add-links-wrap">
          <div class="add-links clearfix">
            <a href="#" class="button product_type_variable add_to_cart_button"
              ><span>Add to Cart</span></a
            >
            <div class="yith-wcwl-add-to-wishlist">
              <div class="yith-wcwl-add-button show">
                <div class="product-wishlist wishlist-4878316077133">
                  <a class="add_to_wishlist link-wishlist"
                    ><span>Add to wishlist</span></a
                  >
                </div>
              </div>
            </div>
            <div class="clear"></div>
            <a
              href="javascript:;"
              data-product-handle="basketball-sports-blue-shoes"
              data-product-title="Basketball Sports Blue Shoes"
              class="link-compare"
            >
              <span data-translate="compare_list.general.add_to_compare"
                >Add to compare</span
              >
            </a>
          </div>
        </div>
      </div>
    </div>

    <modal :show="openQuickViewModal" @close="closeQuickView">
      <modal-item @close-quick-view="closeQuickView" @add-to-wish-list="addToWisList">
      </modal-item>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal/Modal.vue";
import ModalItem from "@/components/Modal/ModalItem.vue";
export default {
  props: {
    image: {
      type: String,
      required: true,
      default: "images/products/3.jpg",
    },
    image_hover: {
      type: String,
      required: true,
      default: "images/products/2.jpg",
    },
  },
  components: {
    Modal,
    ModalItem,
  },
  data: () => {
    return {
      openQuickViewModal: false,
    };
  },
  methods: {
    openQuickView() {
      this.openQuickViewModal = true;
    },
    closeQuickView() {
      this.openQuickViewModal = false;
    },
  },
};
</script>

<style scoped></style>
