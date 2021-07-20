<template>
  <div id="shopify-section-1600312911861" class="shopify-section">
    <div
      class="html-code"
      data-section-id="1600312911861"
      data-section-type="html-section"
    >
      <div class="html-code-wrapper">
        <div class="lang1">
          <div class="container custom-title hide-actions" style="padding-top: 32px">
            <div class="products-collection porto-products title-border-bottom">
              <h2 class="section-title text-left">
                <span class="inline-title"><span class="lang1">PRODUCTS</span> </span>
              </h2>
              <div class="porto-products-element">
                <div
                  class="category-products products products-container grid products-spacing-10 item-1200-5 item-992-4 item-768-3 item-640-2 item-320-1"
                >
                  <div class="products-grid columns5">
                    <product-simple
                      v-for="(product, index) in products"
                      :key="index"
                      :product="product"
                    >
                    </product-simple>
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
import ProductSimple from "@/components/Cards/ProductSimple.vue";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  components: {
    ProductSimple,
  },

  data: () => {
    return {
      loading: false,
      products: [],
    };
  },
  methods: {},
  mounted() {
    this.getProducts();
  },
  computed: {},
};
</script>
<style>
.custom-title .porto-products.title-border-bottom .section-title {
  margin-bottom: 16px;
  padding-bottom: 7px;
}
</style>
