<template>
  <div class="item product product-col product-outimage_aq_onimage product-type-simple">
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
              data-src="//cdn.shopify.com/s/files/1/1613/0131/products/BlackGlasses1_300x300_crop_center.jpg?v=1600571398"
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
              <a
                href="https://porto-demo7.myshopify.com/collections/all/products/black-glasses"
                class="button product_type_variable add_to_cart_button"
                ><span data-translate="products.product.add_to_cart">Add to Cart</span></a
              >
              <div class="yith-wcwl-add-to-wishlist">
                <div class="yith-wcwl-add-button show">
                  <div class="product-wishlist wishlist-4747899142191">
                    <a
                      href="javascript:;"
                      data-product-handle="black-glasses"
                      data-product-title="Black Glasses"
                      class="add_to_wishlist link-wishlist"
                      title="Add to wishlist"
                      ><span data-translate="wish_list.general.add_to_wishlist"
                        >Add to wishlist</span
                      ></a
                    >
                  </div>
                </div>
              </div>
              <div class="clear"></div>
              <a
                href="javascript:;"
                data-product-handle="black-glasses"
                data-product-title="Black Glasses"
                class="link-compare"
              >
                <span data-translate="compare_list.general.add_to_compare"
                  >Add to compare</span
                > </a
              ><a
                href="https://porto-demo7.myshopify.com/products/black-glasses?view=quickview"
                class="action-list quickview-icon quickview"
              >
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
                data-product-handle="black-glasses"
                data-product-title="Black Glasses"
                class="add_to_wishlist link-wishlist"
                title="Add to wishlist"
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
            href="https://porto-demo7.myshopify.com/collections/best-selling-products"
            title=""
            >BEST SELLING PRODUCTS</a
          >,&nbsp;<a
            href="https://porto-demo7.myshopify.com/collections/featured-products"
            title=""
            >FEATURED PRODUCTS</a
          ></span
        ><a
          class="product-loop-title"
          href="https://porto-demo7.myshopify.com/collections/all/products/black-glasses"
        >
          <h3 class="shopify-loop-product__title">
            <span class="lang1">{{ product.name }}</span>
          </h3>
        </a>

        <div class="rating-wrap">
          <div class="rating-content">
            <span class="spr-badge" id="spr_badge_4747899142191" data-rating="0.0"
              ><span class="spr-starrating spr-badge-starrating"
                ><i class="spr-icon spr-icon-star-empty" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star-empty" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star-empty" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star-empty" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star-empty" style="color: #ffc600"></i></span
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
export default {
  mixins: [global],
  props: ["product"],
  data: () => {
    return {};
  },
};
</script>

<style></style>
