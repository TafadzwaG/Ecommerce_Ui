<template>
  <div class="product-main">
    <breadcrumb :home="'Home'" :to="'/'" :current_route="'SHOP LIST'"> </breadcrumb>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 sidebar col-left">
          <div id="shopify-section-sidebar-left" class="shopify-section">
            <div class="mobile-canvas-overlay close-left"></div>
            <!-- end config style -->
            <div
              class="block-main-canvas canvas-left"
              style="border-bottom: 0px none rgb(119, 119, 119)"
            >
              <div class="canvas-icon sicon-left d-block d-lg-none">
                <a href="javascript:void(0)"><i class="fa fa-sliders"></i></a>
              </div>
              <div class="canvas-inner sidebar-style-1">
                <nav-categories @filter="filterByCategory"> </nav-categories>
                <div class="block block-layered-nav">
                  <div class="block-content">
                    <dl class="narrow-by-list">
                      <price-filter @filter="filterByPrice"> </price-filter>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9 main-content collection-content">
          <div id="collection-main">
            <div class="toolbar top_toolbar">
              <!-- /snippets/collection-sorting.liquid -->
              <filter-mini> </filter-mini>
            </div>
            <div
              class="category-products products grid products-spacing-10 item-1200-4 item-992-4 item-768-3 item-640-2 item-320-1"
            >
              <div
                id="products-grid"
                class="products-grid columns4"
                v-if="filterData.length > 0"
              >
                <product-card
                  v-for="product in filterData"
                  :key="product.id"
                  :product="product"
                >
                </product-card>
              </div>
              <div
                id="products-grid"
                class="products-grid columns4"
                v-if="getSearchItems !== null && filterData.length <= 0"
              >
                <product-card
                  v-for="product in getSearchItems"
                  :key="product.id"
                  :product="product"
                >
                </product-card>
              </div>
              <div
                id="products-grid"
                class="products-grid columns4"
                v-if="getSearchItems === null && filterData.length <= 0"
              >
                <product-card
                  v-for="product in products"
                  :key="product.id"
                  :product="product"
                >
                </product-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/products/ProductCard.vue";
import NavCategories from "@/components/navigation/NavCategories.vue";
import PriceFilter from "@/components/navigation/PriceFilter.vue";
import axios from "axios";
import FilterMini from "@/components/ui/FilterMini.vue";
import Breadcrumb from "@/components/navigation/BreadCrumbs.vue";
import global from "@/mixins/global.js";
import { onMounted } from "vue";
import useFetchProducts from "@/hooks/useFetchProducts.js";
import { inject, computed, ref, reactive } from "vue";

import { useStore } from "vuex";
export default {
  components: {
    ProductCard,
    NavCategories,
    PriceFilter,
    FilterMini,
    Breadcrumb,
  },

  setup() {
    const { loading, error, products, getProducts } = useFetchProducts();
    const store = useStore();

    let filterData = reactive([]);
    let filterDataByPrice = reactive([]);

    onMounted(getProducts);

    const filterByCategory = async (prod) => {
      console.log(prod);
      filterData.push(...prod);
      console.log(filterData);
    };

    const filterByPrice = async (product) => {
      filterDataByPrice.push(product);
    };

    const resetFilter = async () => {
      (filterData = []), (filterDataByPrice = []);
    };

    return {
      getSearchItems: computed(() => JSON.parse(store.getters.getSearchItems)),
      loading,
      error,
      products,
      filterData,
      filterByCategory,
      filterByPrice,
    };
  },
};
</script>

<style scoped>
.block-layered-nav dd.size .input-container {
  display: none !important;
}
.collection-sorting-row {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
</style>
