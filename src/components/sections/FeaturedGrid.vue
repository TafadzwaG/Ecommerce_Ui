<template>
  <div
    id="shopify-section-1586321820731"
    class="shopify-section"
    v-if="featured_products.length !== 0"
  >
    <div class="html-code">
      <div class="html-code-wrapper">
        <div class="lang1">
          <div class="container">
            <div class="products-collection porto-products title-border-bottom">
              <h2 class="section-title text-left">
                <span class="inline-title"
                  ><span class="lang1">FEATURED PRODUCTS</span>
                </span>
              </h2>
              <div class="porto-products-element">
                <div
                  class="category-products products products-container grid-creative products-spacing-10"
                >
                  <div
                    class="products-grid masonry-init masonry-grid columns3"
                    style="opacity: 1; position: relative; height: 600px"
                  >
                    <div class="grid-sizer"></div>
                    <div
                      class="item product product-col product-onimage3 product-type-simple masonry-grid-item grid-col-1-2 grid-height-1"
                      style="height: 500px; position: absolute; left: 0%; top: 0px"
                    >
                      <div class="product-inner">
                        <div class="product-image">
                          <a href="#">
                            <div class="inner">
                              <img
                                data-src="images/products/4.jpg"
                                alt="Women Blouse"
                                class="img-responsive main lazypreload lazyloaded"
                                style="padding-top: "
                                :src="
                                  image_url + featured_products[0].product_images[0].image
                                "
                              />
                            </div>
                          </a>
                          <div class="loader-container" style="display: none">
                            <div class="loader">
                              <i class="porto-ajax-loader"></i>
                            </div>
                          </div>
                          <div class="links-on-image">
                            <div class="add-links-wrap">
                              <div class="add-links clearfix">
                                <form
                                  action="https://porto-demo32.myshopify.com/cart/add"
                                  method="post"
                                  enctype="multipart/form-data"
                                >
                                  <select class="d-none" name="id">
                                    <option value="33170903433354">
                                      Default Title - $299.00
                                    </option></select
                                  ><input
                                    type="hidden"
                                    name="quantity"
                                    value="1"
                                  /><button
                                    type="submit"
                                    class="button product_type_simple add_to_cart_button add-to-cart ajax_add_to_cart border-1"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </form>
                                <div class="yith-wcwl-add-to-wishlist">
                                  <div class="yith-wcwl-add-button show">
                                    <div class="product-wishlist wishlist-4792582111370">
                                      <a
                                        href="javascript:;"
                                        class="add_to_wishlist link-wishlist border-1"
                                        ><span>Add to wishlist</span></a
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="clear"></div>
                                <a href="javascript:;" class="link-compare border-1">
                                  <span>Add to compare</span>
                                </a>
                                <a
                                  href="#"
                                  class="action-list quickview-icon quickview border-1"
                                >
                                  <span>Quick View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <div class="clear"></div>
                          <span class="category-list"
                            ><a href="#" title="">{{
                              featured_products[0].categories[1].name
                            }}</a
                            >,&nbsp;<a href="#" title="">{{
                              featured_products[0].categories[2].name
                            }}</a></span
                          >
                          <a class="product-loop-title" href="#">
                            <h3 class="shopify-loop-product__title">
                              <span class="lang1">{{ featured_products[0].name }}</span>
                            </h3>
                          </a>
                          <div class="rating-wrap">
                            <div class="rating-content">
                              <span
                                class="spr-badge"
                                id="spr_badge_4792582111370"
                                data-rating="0.0"
                                ><span class="spr-starrating spr-badge-starrating"
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                ></span>
                                <span class="spr-badge-caption">No reviews</span>
                              </span>
                            </div>
                          </div>

                          <span class="price"
                            ><span class="shopify-Price-amount amount"
                              ><span class="money" data-currency-usd="$299.00"
                                >${{ featured_products[0].price }}</span
                              ></span
                            >
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      class="item product product-col product-onimage3 product-type-simple masonry-grid-item grid-col-1-4 grid-height-1"
                      style="height: 500px; position: absolute; left: 50%; top: 0px"
                    >
                      <div class="product-inner">
                        <div class="product-image">
                          <a href="#">
                            <div class="inner">
                              <img
                                :data-src="
                                  image_url + featured_products[1].product_images[1].image
                                "
                                alt="Men
                                                                                        Clothes"
                                class="img-responsive main lazypreload lazyloaded"
                                style="padding-top: "
                                :src="
                                  image_url + featured_products[1].product_images[1].image
                                "
                              />
                            </div>
                          </a>
                          <div class="loader-container" style="display: none">
                            <div class="loader">
                              <i class="porto-ajax-loader"></i>
                            </div>
                          </div>
                          <div class="links-on-image">
                            <div class="add-links-wrap">
                              <div class="add-links clearfix">
                                <form
                                  action="https://porto-demo32.myshopify.com/cart/add"
                                  method="post"
                                  enctype="multipart/form-data"
                                >
                                  <select class="d-none" name="id">
                                    <option value="33169942970506">
                                      Default Title - $199.00
                                    </option></select
                                  ><input
                                    type="hidden"
                                    name="quantity"
                                    value="1"
                                  /><button
                                    type="submit"
                                    class="button product_type_simple add_to_cart_button add-to-cart ajax_add_to_cart border-1"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </form>
                                <div class="yith-wcwl-add-to-wishlist">
                                  <div class="yith-wcwl-add-button show">
                                    <div class="product-wishlist wishlist-4792010637450">
                                      <a
                                        href="javascript:;"
                                        class="add_to_wishlist link-wishlist border-1"
                                        ><span>Add to wishlist</span></a
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="clear"></div>
                                <a href="javascript:;" class="link-compare border-1">
                                  <span
                                    data-translate="compare_list.general.add_to_compare"
                                    >Add to compare</span
                                  >
                                </a>
                                <a
                                  href="#"
                                  class="action-list quickview-icon quickview border-1 adjust-margin"
                                >
                                  <span>Quick View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <div class="clear"></div>
                          <span class="category-list"
                            ><a href="#" title="">{{
                              featured_products[1].categories[1].name
                            }}</a
                            >,&nbsp;<a href="#" title="">{{
                              featured_products[1].categories[2].name
                            }}</a></span
                          >
                          <a class="product-loop-title" href="#">
                            <h3 class="shopify-loop-product__title">
                              <span class="lang1">{{ featured_products[1].name }}</span>
                            </h3>
                          </a>
                          <div class="rating-wrap">
                            <div class="rating-content">
                              <span
                                class="spr-badge"
                                id="spr_badge_4792582111370"
                                data-rating="0.0"
                                ><span class="spr-starrating spr-badge-starrating"
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                ></span>
                                <span class="spr-badge-caption">No reviews</span>
                              </span>
                            </div>
                          </div>

                          <span class="price"
                            ><span class="shopify-Price-amount amount"
                              ><span class="money" data-currency-usd="$299.00"
                                >${{ featured_products[1].price }}</span
                              ></span
                            >
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      class="item product product-col product-onimage3 product-type-simple masonry-grid-item grid-col-1-4 grid-height-1-2"
                      style="height: 250px; position: absolute; left: 75%; top: 0px"
                    >
                      <div class="product-inner">
                        <div class="product-image">
                          <a href="#">
                            <div class="inner">
                              <img
                                v-if="featured_products[2].product_images.length > 0"
                                alt="Men Belt"
                                class="img-responsive main lazypreload lazyloaded"
                                style="padding-top: "
                                :src="
                                  image_url + featured_products[2].product_images[0].image
                                "
                              />
                            </div>
                          </a>
                          <div class="loader-container" style="display: none">
                            <div class="loader">
                              <i class="porto-ajax-loader"></i>
                            </div>
                          </div>
                          <div class="links-on-image">
                            <div class="add-links-wrap">
                              <div class="add-links clearfix">
                                <form
                                  action="https://porto-demo32.myshopify.com/cart/add"
                                  method="post"
                                  enctype="multipart/form-data"
                                >
                                  <select class="d-none" name="id">
                                    <option value="33169930289290">
                                      Default Title - $99.00
                                    </option></select
                                  ><input
                                    type="hidden"
                                    name="quantity"
                                    value="1"
                                  /><button
                                    type="submit"
                                    class="button product_type_simple add_to_cart_button add-to-cart ajax_add_to_cart border-1"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </form>
                                <div class="yith-wcwl-add-to-wishlist">
                                  <div class="yith-wcwl-add-button show">
                                    <div class="product-wishlist wishlist-4792001953930">
                                      <a
                                        href="javascript:;"
                                        class="add_to_wishlist link-wishlist border-1"
                                        ><span
                                          data-translate="wish_list.general.add_to_wishlist"
                                          >Add to wishlist</span
                                        ></a
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="clear"></div>
                                <a href="javascript:;" class="link-compare border-1">
                                  <span
                                    data-translate="compare_list.general.add_to_compare "
                                    >Add to compare</span
                                  >
                                </a>
                                <a
                                  href="#"
                                  class="action-list quickview-icon quickview border-1 adjust-margin"
                                >
                                  <span>Quick View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="product-content">
                          <div class="clear"></div>
                          <span class="category-list"
                            ><a href="#" title="">{{
                              featured_products[2].categories[1].name
                            }}</a
                            >,&nbsp;<a href="#" title="">{{
                              featured_products[2].categories[2].name
                            }}</a></span
                          >
                          <a class="product-loop-title" href="#">
                            <h3 class="shopify-loop-product__title">
                              <span class="lang1">{{ featured_products[2].name }}</span>
                            </h3>
                          </a>
                          <div class="rating-wrap">
                            <div class="rating-content">
                              <span
                                class="spr-badge"
                                id="spr_badge_4792582111370"
                                data-rating="0.0"
                                ><span class="spr-starrating spr-badge-starrating"
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                ></span>

                                {{}}
                                <span class="spr-badge-caption">No reviews</span>
                              </span>
                            </div>
                          </div>

                          <span class="price"
                            ><span class="shopify-Price-amount amount"
                              ><span class="money"
                                >${{ featured_products[2].price }}</span
                              ></span
                            >
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      class="item product product-col product-onimage3 product-type-simple masonry-grid-item grid-col-1-4 grid-height-1-2"
                      style="height: 250px; position: absolute; left: 75%; top: 250px"
                    >
                      <div class="product-inner">
                        <div class="product-image">
                          <a href="#">
                            <div class="inner">
                              <img
                                v-if="featured_products[3].product_images.length > 0"
                                alt="Men Belt"
                                class="img-responsive main lazypreload lazyloaded"
                                style="padding-top: "
                                :src="
                                  image_url + featured_products[3].product_images[0].image
                                "
                              />
                            </div>
                          </a>
                          <div class="loader-container" style="display: none">
                            <div class="loader">
                              <i class="porto-ajax-loader"></i>
                            </div>
                          </div>
                          <div class="links-on-image">
                            <div class="add-links-wrap">
                              <div class="add-links clearfix">
                                <form method="post" enctype="multipart/form-data">
                                  <select class="d-none" name="id">
                                    <option value="33170891112586">
                                      Default Title - $399.00
                                    </option></select
                                  ><input
                                    type="hidden"
                                    name="quantity"
                                    value="1"
                                  /><button
                                    type="submit"
                                    class="button product_type_simple add_to_cart_button add-to-cart ajax_add_to_cart border-1"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </form>
                                <div class="yith-wcwl-add-to-wishlist">
                                  <div class="yith-wcwl-add-button show">
                                    <div class="product-wishlist wishlist-4792573689994">
                                      <a
                                        href="javascript:;"
                                        class="add_to_wishlist link-wishlist border-1"
                                        ><span>Add to wishlist</span></a
                                      >
                                    </div>
                                  </div>
                                </div>
                                <div class="clear"></div>
                                <a href="javascript:;" class="link-compare border-1">
                                  <span>Add to compare</span>
                                </a>
                                <a
                                  href="#"
                                  class="action-list quickview-icon quickview border-1 adjust-margin"
                                >
                                  <span>Quick View</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="product-content">
                          <div class="clear"></div>
                          <span class="category-list"
                            ><a href="#" title="">{{
                              featured_products[3].categories[1].name
                            }}</a
                            >,&nbsp;<a href="#" title="">{{
                              featured_products[3].categories[2].name
                            }}</a></span
                          >
                          <a class="product-loop-title" href="#">
                            <h3 class="shopify-loop-product__title">
                              <span class="lang1">{{ featured_products[3].name }}</span>
                            </h3>
                          </a>
                          <div class="rating-wrap">
                            <div class="rating-content">
                              <span
                                class="spr-badge"
                                id="spr_badge_4792582111370"
                                data-rating="0.0"
                                ><span class="spr-starrating spr-badge-starrating"
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                  ><i class="spr-icon spr-icon-star-empty"></i
                                ></span>
                                <span class="spr-badge-caption">No reviews</span>
                              </span>
                            </div>
                          </div>

                          <span class="price"
                            ><span class="shopify-Price-amount amount"
                              ><span class="money"
                                >${{ featured_products[3].price }}</span
                              ></span
                            >
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useFetch from "@/hooks/fetch.js";
import useGlobal from "@/hooks/global.js";
import useGlobalVariable from "@/hooks/globalVariable.js";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const { featured_products, getFeaturedProducts } = useGlobal();

    const { baseUrl, image_url, requestAuthHeader } = useGlobalVariable();

    onMounted(getFeaturedProducts);
    return {
      featured_products,
      image_url,
    };
  },
};
</script>

<style scoped>
a.action-list.quickview-icon.quickview {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(77, 77, 74);
  margin: 0px;
  padding: 1.6px 24px;
  position: absolute;
  top: 50%;
  opacity: 1;
  visibility: visible;
  z-index: 2;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  overflow: hidden;
  border-radius: 32px !important;
  text-indent: 0px;
  width: auto;
  height: auto;
  right: 50%;
  transform: translateZ(0px) translateX(50%);
  margin-top: -20px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  text-shadow: none;
  transition: all 0.25s ease 0s;
  line-height: 34px;
  border: 1px solid rgb(221, 221, 221);
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins;
}
.border-1 {
  border: 1px solid rgb(221, 221, 221) !important;
}

span.category-list {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 10px;
  opacity: 0.8;
  text-transform: uppercase;
  line-height: 1.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(255, 255, 255);
}
.adjust-margin {
  padding-top: -20px !important;
}
a.action-list.quickview-icon.quickview.border-1.adjust-margin {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(77, 77, 74);
  margin: -20px 0px 0px;
  padding: 1.6px 24px;
  position: absolute;
  top: 45%;
  opacity: 1;
  visibility: visible;
  z-index: 2;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  overflow: hidden;
  border-radius: 32px !important;
  text-indent: 0px;
  width: auto;
  height: auto;
  right: 50%;
  transform: translateZ(0px) translateX(50%);
  margin-top: -20px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  text-shadow: none;
  transition: all 0.25s ease 0s;
  line-height: 34px;
  border: 1px solid rgb(221, 221, 221) !important;
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins;
}
</style>
