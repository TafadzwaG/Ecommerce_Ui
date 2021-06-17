<template>
  <div class="product-quick-view product-view" style="margin: 2rem">
    <div class="product-essential row">
      <div class="product-img-box col-md-6 mb-0">
        <div class="product-img-list">
          <div class="product-image product-image-zoom zoom-available">
            <div class="product-image-gallery">
              <img
                id="product-featured-image"
                class="gallery-image visible lazyloaded"
                style=""
                :src="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="product-shop col-md-6 mb-0">
        <div class="product-shop-wrapper">
          <div class="product-name top-product-detail">
            <h1>
              <a href="#">
                <span>{{ name }}</span>
              </a>
            </h1>
          </div>
          <div class="review-product-details">
            <span class="spr-badge"
              ><span class="spr-starrating spr-badge-starrating"
                ><i class="spr-icon spr-icon-star" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star" style="color: #ffc600"></i
                ><i class="spr-icon spr-icon-star" style="color: #ffc600"></i></span
              ><span class="spr-badge-caption">1 review</span>
            </span>
          </div>

          <div class="short-description-detail">
            <div class="short-description">
              <div>
                {{ description }}
              </div>
            </div>
          </div>

          <div class="middle-product-detail">
            <div class="product-type-data">
              <div class="price-box">
                <div id="price" class="detail-price" itemprop="price">
                  <div class="price">{{ price }}</div>
                </div>
                <meta itemprop="priceCurrency" content="USD" />

                <link itemprop="availability" href="#" />
              </div>
            </div>

            <div class="product-inventory">
              <span data-translate="products.product.availability">Availability: </span>
              <span class="in-stock">{{ in_stock }} </span>
            </div>
          </div>
          <div class="product-type-main">
            <form class="product-form">
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
                          <button href="javascript:;" class="btn-cart add-to-cart">
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
                            class="link-wishlist"
                            title="Add to wishlist"
                            @click="addToWishList"
                            ><i class="icon-heart"></i><span>Add to wishlist</span></a
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
    <button title="Close (Esc)" type="button" class="mfp-close" @click="closeQuickView">
      ×
    </button>
  </div>
</template>

<script>
import ShareLinks from "../links/ShareLinks.vue";
export default {
  emits: ["close-quick-view"],
  props: {
    image: {
      type: String,
      required: true,
      default: "images/products/3.jpg",
    },

    name: {
      type: String,
      required: true,
      default: "Porto Extended Camera",
    },

    description: {
      type: String,
      required: true,
      default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo",
    },

    in_stock: {
      type: String,
      required: true,
      default: "Out of Stock",
    },

    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
  },
  components: {
    ShareLinks,
  },

  methods: {
    closeQuickView() {
      this.$emit("close-quick-view");
    },
    addToWishList() {
      this.$emit("add-to-wish-list");
    },
  },
};
</script>

<style></style>
