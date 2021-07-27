<template>
  <div class="porto-custom-block">
    <div class="lang1">
      <hr class="grdnt-sprt" />
      <div class="filter-products" style="padding-top: 32px; padding-bottom: 39px">
        <div class="row">
          <product-container>
            <template v-slot:title> LATEST PRODUCTS </template>
            <template v-slot:product v-if="latest_products.length > 0">
              <mini-product
                v-for="(product, index) in latest_products"
                :key="index"
                :product="product"
              >
              </mini-product>
            </template>
          </product-container>
          <product-container>
            <template v-slot:title> TOP RATED PRODUCTS </template>
            <template v-slot:product>
              <mini-product
                v-for="(product, index) in products_by_rating"
                :key="index"
                :product="product"
              >
              </mini-product>
            </template>
          </product-container>
          <product-container>
            <template v-slot:title> BEST SELLING PRODUCTS </template>
            <template v-slot:product>
              <!-- <mini-product> </mini-product> -->
            </template>
          </product-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniProduct from "@/components/Cards/MiniProduct.vue";
import ProductContainer from "../ui/ProductContainer.vue";
import axios from "axios";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  components: {
    MiniProduct,
    ProductContainer,
  },

  data: () => {
    return {
      latest_products: [],
      error: "",
      loading: false,

      products_by_rating: [],
    };
  },

  methods: {
    getLatestProducts() {
      axios
        .get(this.base_url + "latest_products")
        .then((response) => {
          if (response.status == 200) {
            console.log("***** start of the latest products");
            console.log(response.data.data);
            this.latest_products = response.data.data;
            console.log("***** end of latest products");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getProductsByHighestRated() {
      try {
        const response = await axios.get(this.base_url + "products_rating");
        this.products_by_rating = response.data.data;
      } catch (ex) {
        throw new Error(ex);
      } finally {
        this.loading = false;
      }
    },
  },
  computed: {},
  mounted() {
    this.getLatestProducts();
    this.getProductsByHighestRated();
  },
};
</script>

<style></style>
