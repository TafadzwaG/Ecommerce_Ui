<template>
  <div>
    <div id="shopify-section-1586267892685" class="shopify-section">
      <div class="html-code">
        <div class="html-code-wrapper">
          <div>
            <div class="container" style="padding-top: 50px; padding-bottom: 16px">
              <div class="short-collection-list">
                <div class="align-left heading heading-border heading-bottom-border">
                  <h2 class="section-title">
                    <span>BROWSE BY CATEGORY</span>
                  </h2>
                </div>

                <div class="list">
                  <div
                    class="collection-slide porto-products short-collection-list show-count-on-static category-pos-middle collection-spacing-20 category-text-center category-color-light overlay-bg-75"
                  >
                    <div class="middle nav-pos-outside nav-style-4 show-nav-hover">
                      <div class="category-container">
                        <div class="cat-container">
                          <category-card
                            v-for="product_category in product_categories"
                            :key="product_category.id"
                            :category="product_category"
                          >
                          </category-card>
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

    <featured-grid> </featured-grid>
    <products-list> </products-list>
  </div>
</template>

<script>
import CategoryCard from "@/components/Cards/CategoryCard.vue";
import FeaturedGrid from "@/components/sections/FeaturedGrid.vue";
import ProductsList from "@/components/sections/ProductsList.vue";
import global from "@/mixins/global.js";
import axios from "axios";
import useGlobal from "@/hooks/global.js";
import { ref, onMounted, watch, toRefs, computed, reactive } from "vue";
export default {
  mixins: [global],
  components: {
    CategoryCard,
    FeaturedGrid,
    ProductsList,
  },

  setup() {
    const loading = ref(false);
    const error = ref(null);
    const product_categories = ref([]);

    const [
      baseUrl,
      image_url,
      featured_products,
      requestAuthHeader,
      requestHeader,
      getFeaturedProducts,
    ] = useGlobal();

    const getProductCategories = async () => {
      try {
        const resp = await axios.get(baseUrl.value + "categories", requestAuthHeader());
        product_categories.value = resp.data.data;
      } catch (ex) {
        error.value = ex;
        throw new Error(ex);
      } finally {
        loading.value = false;
      }
    };

    onMounted(getProductCategories);

    return {
      loading,
      error,
      product_categories,
    };
  },
};
</script>

<style scoped>
.shadow {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
}
.nav-button {
  background-color: red;
  border-radius: 50%;
}
.cat-container {
  display: flex;
  margin: 0 1rem;
}
</style>

// data: () => { // return { // loading: false, // product_categories: [], // }; // }, //
methods: { // getProductCategories() { // this.loading = true; // axios //
.get(this.base_url + "categories", this.requestAuthHeader()) // .then((response) => { //
if (response.status == 200) { // console.log(response.data.data); //
this.product_categories = response.data.data; // this.loading = false; // } // }) //
.catch((error) => { // console.log(error); // this.loading = false; // }); // }, // }, //
mounted() { // this.getProductCategories(); // },
