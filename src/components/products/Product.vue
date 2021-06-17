<template>
  <div class="product-essential">
    <div class="row">
      <div class="product-img-box col-md-6">
        <div class="product-img-list">
          <div class="product-image product-image-zoom zoom-available">
            <div class="product-image-gallery loading">
              <img
                id="product-featured-image"
                class="gallery-image visible"
                data-src="//cdn.shopify.com/s/files/1/1632/5913/products/BlackGreyHeadset1_cef1a518-cfe5-4cc0-9e3c-f1ba9e249b90_600x_crop_center.jpg?v=1597401202"
                data-zoom-image="//cdn.shopify.com/s/files/1/1632/5913/products/BlackGreyHeadset1_cef1a518-cfe5-4cc0-9e3c-f1ba9e249b90.jpg?v=1597401202"
                style="padding-top: 100%"
              />
              <div class="icon-zoom d-none d-sm-block" style="cursor: pointer">
                <div class="icon-magnifier-add"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-shop col-md-6">
        <div class="product-shop-wrapper">
          <div class="prev-next-products">
            <div class="product-nav product-prev no-next">
              <a href="sports-shoes.html" title="Previous Product">
                <i class="icon-angle-left"></i>
              </a>
              <div class="product-pop" data-with-product="sports-shoes"></div>
            </div>
          </div>
          <div class="product-name top-product-detail">
            <h1>
              <a href="black-ears.html"><span class="lang1">Black Ears</span> </a>
            </h1>
          </div>
          <div class="review-product-details">
            <span class="shopify-product-reviews-badge" data-id="4611501588514"></span>
          </div>
          <div class="product-type-data">
            <div class="price-box">
              <div id="price" class="detail-price" itemprop="price">
                <div class="price">$101.00</div>
              </div>
              <meta itemprop="priceCurrency" content="USD" />
              <link itemprop="availability" href="http://schema.org/OutOfStock" />
            </div>
          </div>

          <div class="short-description-detail">
            <div class="short-description">
              <div class="lang1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi...
              </div>
            </div>
          </div>

          <div class="middle-product-detail">
            <div class="product-inventory">
              <span data-translate="products.product.availability">Availability: </span>
              <span class="in-stock">Out Of Stock </span>
            </div>
            <div class="product-category">
              <span data-translate="products.product.category">Categories:</span>
              <span class="category-list"
                ><a href="../../dress.html" title="">DRESS</a>,&nbsp;<a
                  href="../../shop.html"
                  title=""
                  >SHOP</a
                >,&nbsp;<a href="../../trousers.html" title="">TROUSERS</a></span
              >
            </div>
          </div>
          <div class="product-type-main">
            <form
              method="post"
              action="https://porto-demo1.myshopify.com/cart/add"
              id="product-main-form"
              accept-charset="UTF-8"
              class="product-form"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="form_type" value="product" /><input
                type="hidden"
                name="utf8"
                value="✓"
              />

              <div class="product-options-bottom">
                <div class="add-to-cart-box">
                  <div class="input-box">
                    <input
                      type="text"
                      id="qty"
                      name="quantity"
                      value="1"
                      min="1"
                      class="quantity-selector"
                    />
                    <div class="plus-minus">
                      <div
                        class="increase items"
                        onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;"
                      >
                        <i class="icon-up-dir"></i>
                      </div>
                      <div
                        class="reduced items"
                        onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) result.value--;return false;"
                      >
                        <i class="icon-down-dir"></i>
                      </div>
                    </div>
                  </div>
                  <div class="actions">
                    <div class="action-list addtocart">
                      <div class="button-wrapper">
                        <div class="button-wrapper-content">
                          <button
                            href="javascript:;"
                            class="btn-cart add-to-cart"
                            disabled="disabled"
                          >
                            <i class="icon-cart"></i>
                            <span>Sold Out</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="action-list wishlist">
                      <ul class="add-to-links">
                        <li>
                          <a
                            href="javascript:;"
                            data-product-handle="black-ears"
                            data-product-title="Black Ears"
                            class="link-wishlist"
                            title="Add to wishlist"
                            ><i class="icon-heart"></i
                            ><span data-translate="wish_list.general.add_to_wishlist"
                              >Add to wishlist</span
                            ></a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            data-product-handle="black-ears"
                            data-product-title="Black Ears"
                            class="link-compare"
                            title="Add to compare"
                            ><i class="icon-compare"></i
                            ><span data-translate="compare_list.general.add_to_compare"
                              >Add to compare</span
                            ></a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="product-share">
            <share-links> </share-links>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareLinks from "@/components/links/ShareLinks.vue";
export default {
  components: {
    ShareLinks,
  },
};
</script>

<style></style>
