<template>
  <div class="porto-custom-block">
    <div>
      <div style="padding-bottom: 14px">
        <div class="products-collection porto-products title-border-bottom">
          <h2 class="section-title slider-title text-left">
            <span class="inline-title"><span>FEATURED PRODUCTS</span> </span>
          </h2>

          <div class="porto-products-element">
            <carousel :items-to-show="4" :autoplay="3000" :transition="500">
              <slide v-for="featured_item in featured_products" :key="featured_item.id">
                <div
                  class="category-products products products-spacing-10 featured-box-container"
                >
                  <featured-item
                    :featured_item="featured_item"
                    @open-modal="openQuickView"
                  ></featured-item>
                </div>
              </slide>
            </carousel>
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";
import Modal from "@/components/Modal/Modal.vue";
import ModalItem from "@/components/Modal/ModalItem.vue";
export default {
  mixins: [global],
  components: {
    FeaturedItem,
    Carousel,
    Slide,
    Modal,
    ModalItem,
  },

  data() {
    return {
      featured_products: [],
      openQuickViewModal: false,
    };
  },
  methods: {
    openQuickView() {
      this.openQuickViewModal = true;
    },
  },
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
