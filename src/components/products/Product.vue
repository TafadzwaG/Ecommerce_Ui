<template>
  <div class="product-essential">
    <div class="row">
      <div class="product-img-box col-md-6">
        <div class="product-img-list">
          <div class="product-image product-image-zoom zoom-available">
            <div class="product-image-gallery" v-if="product.product_images">
              <img :src="image_url + product.product_images[indexOfImage].image" alt="" />
            </div>
          </div>
        </div>

        <carousel
          class="carousel-edit"
          :items-to-show="3"
          :autoplay="3000"
          :wrap-around="true"
          :transition="500"
          v-if="product.product_images"
        >
          <slide v-for="(image, index) in product.product_images" :key="index">
            <div
              class="card"
              :style="
                'background-size: cover;background-repeat: no-repeat;background-position:  center; background-color: rgba(0, 0, 0, 0); height: 6rem; background-image:  linear-gradient(to right, #e0eafc36, #cfdef344),  url(&quot;' +
                image_url +
                image.image +
                '&quot;);'
              "
              @mouseover="getIndex(index)"
              @mouseleave="getIndex(0)"
            ></div>
          </slide>
        </carousel>
      </div>

      <div class="product-shop col-md-6">
        <div class="product-shop-wrapper">
          <div class="prev-next-products">
            <div class="product-nav product-prev no-next">
              <div class="product-pop"></div>
            </div>
          </div>
          <div class="product-name top-product-detail">
            <h1>
              <a href="#"
                ><span class="lang1">{{ product.name }}</span>
              </a>
            </h1>
          </div>
          <div class="review-product-details">
            <span class="shopify-product-reviews-badge">
              <star-rating
                :star-size="20"
                :show-rating="false"
                :rating="product.rating"
              ></star-rating>
            </span>
          </div>
          <div class="product-type-data">
            <div class="price-box">
              <div id="price" class="detail-price" itemprop="price">
                <div class="price">${{ product.totalPrice }}</div>
              </div>
              <meta itemprop="priceCurrency" content="USD" />
              <link itemprop="availability" href="#" />
            </div>
          </div>

          <div class="short-description-detail">
            <div class="short-description">
              <div class="lang1">
                {{ product.description }}
              </div>
            </div>
          </div>

          <div class="middle-product-detail">
            <div class="product-inventory">
              <span>Availability: </span>
              <span class="in-stock" v-if="product.stock <= 0">Out Of Stock </span>
              <span class="in-stock">In Stock({{ product.stock }} )</span>
            </div>
            <div class="product-category" v-if="product.categories">
              <span>Categories:</span>
              <span
                class="category-list"
                v-for="category in product.categories"
                :key="category.id"
                ><a title="">{{ category.name }}</a
                >,&nbsp;</span
              >
            </div>
          </div>
          <div class="product-type-main">
            <form
              id="product-main-form"
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
                            <span v-if="product.stock <= 0">Sold Out</span>
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="action-list wishlist">
                      <ul class="add-to-links">
                        <li>
                          <a
                            href="javascript:;"
                            class="link-wishlist"
                            title="Add to wishlist"
                            ><i class="icon-heart"></i><span>Add to wishlist</span></a
                          >
                        </li>
                        <li>
                          <a
                            href="javascript:;"
                            class="link-compare"
                            title="Add to compare"
                            ><i class="icon-compare"></i><span>Add to compare</span></a
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
import global from "@/mixins/global.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import ImageComponent from "./ImageComponent.vue";
import StarRating from "vue-star-rating";
export default {
  mixins: [global],
  props: ["product"],
  components: {
    ShareLinks,
    ImageComponent,
    StarRating,
    Carousel,
    Slide,
  },

  data: () => {
    return {
      indexOfImage: 0,
    };
  },

  mounted() {},
  computed: {},
  methods: {
    getIndex(index) {
      this.indexOfImage = index;
    },
  },
};
</script>

<style scoped>
.product-view .review-product-details:after {
  content: "";
  display: block;
  width: 100px;
  border-top: 2px solid #e7e7e7;
  margin: 1rem 0 1.25rem;
}

.lazyload,
.lazyloading,
img:not(.lazyloaded) {
  transition: opacity 400ms;
  background-color: #eee;
  opacity: 1 !important;
  padding: 1rem !important;
}
.card {
  height: 6rem;
  width: 6rem;
  /* background-color: red; */
  opacity: 1 !important;
  padding: 10px !important;
  cursor: pointer;
  padding: 10px;
}
.card:hover {
  border: 1px solid #ccc;
}

.carousel-edit {
  margin-top: 1.5rem;
}
</style>
