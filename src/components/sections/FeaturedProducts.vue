<template>
  <div class="porto-custom-block">
    <div>
      <div style="padding-bottom: 14px">
        <div class="products-collection porto-products title-border-bottom">
          <h2 class="section-title slider-title text-left">
            <span class="inline-title"><span>FEATURED PRODUCTS</span> </span>
          </h2>

          <div class="porto-products-element">
            <div
              class="category-products products products-spacing-10 featured-box-container"
            >
              <featured-item
                v-for="featured_item in featured_products"
                :key="featured_item.id"
                :featured_item="featured_item"
              ></featured-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturedItem from "@/components/Cards/FeaturedItem.vue";
import global from "@/mixins/global.js";
import axios from "axios";
export default {
  mixins: [global],
  components: {
    FeaturedItem,
  },

  data() {
    return {
      featured_products: [],
    };
  },
  methods: {},
  mounted() {
    this.getFeaturedProducts();
  },
  computed: {},
};
</script>

<style scoped>
.featured-box-container {
  display: flex;
}
.porto-products-element {
  width: 800px;
}
</style>
