<template>
  <div class="product-main">
    <breadcrumb :home="'Home'" :to="'/'" :current_route="'Product Details'"> </breadcrumb>
    <div class="container">
      <div class="box_product_page">
        <div class="row">
          <div class="col-lg-9 main-content product-main-inner">
            <div class="product-view product-page-area">
              <product :product="product"> </product>
            </div>
          </div>
          <side-bar-right> </side-bar-right>
        </div>

        <tab-container> </tab-container>
        <div class="spr-header">
          <h2 class="spr-header-title">Customer Reviews</h2>

          <div class="spr-summary">
            <span class="spr-starrating spr-summary-starrating">
              <star-rating
                :star-size="20"
                :show-rating="false"
                :rating="product.rating"
                :read-only="true"
              ></star-rating>
            </span>
            <span class="spr-summary-caption"
              ><span class="spr-summary-actions-togglereviews" v-if="product.reviews"
                >Based on {{ product.reviews.length }} review(s)</span
              >
            </span>
            <span class="spr-summary-actions">
              <a @click="writeReview" class="spr-summary-actions-newreview"
                >Write a review</a
              >
            </span>
          </div>
        </div>
        <review-form
          v-if="toggleWriteReview"
          :productId="$route.params.id"
          @updateReview="getReviews"
        >
        </review-form>
        <review-card v-for="review in reviews" :key="review.id" :review="review">
        </review-card>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import Breadcrumb from "@/components/navigation/BreadCrumbs.vue";
import Product from "@/components/products/Product.vue";
import SideBarRight from "@/components/products/SideBarRight.vue";
import TabContainer from "@/components/products/TabContainer.vue";
import axios from "axios";
import global from "@/mixins/global.js";
import useGlobalVariable from "@/hooks/globalVariable.js";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";

export default {
  mixins: [global],
  components: {
    Breadcrumb,
    ReviewCard,
    SideBarRight,
    Product,
    TabContainer,
    ReviewForm,
    StarRating,
  },
  data: () => {
    return {
      product: {},
      loading: false,
      error: null,
      toggleWriteReview: false,
      reviews: [],
    };
  },

  mounted() {
    this.getProductDetails();
  },
  methods: {
    writeReview() {
      this.toggleWriteReview = !this.toggleWriteReview;
    },

    async getProductDetails() {
      try {
        const response = await axios.get(
          this.base_url + "products/" + this.$route.params.id
        );
        this.product = response.data.data;
        console.log("Single Product", response.data.data);
      } catch (ex) {
        this.error = ex;
        throw new Error(ex);
      } finally {
      }
    },

    async getReviews() {
      try {
        const response = await axios.get(
          this.base_url + "reviews",
          {
            params: this.axiosParams,
          },
          this.requestAuthHeader()
        );
        this.reviews = response.data.data;

        console.log("reviews", response.data.data);
      } catch (ex) {
        this.error = ex;
        throw new Error(ex);
      } finally {
        this.toggleWriteReview = false;
      }
    },
  },
  computed: {
    axiosParams() {
      const params = new URLSearchParams();
      params.append("product_id", this.$route.params.id);
      return params;
    },
  },
  mounted() {
    this.getReviews();
    this.getProductDetails();
  },
};
</script>

<style scoped>
h2.spr-header-title {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 600;
  line-height: 1.35;
  color: rgb(34, 37, 41);
  font-size: 18px;
  margin: 0px 0px 15px;
  padding: 0px;
  text-transform: uppercase;
}
.spr-summary-actions-newreview {
  float: right;
}
</style>

setup() { const loading = ref(false); const error = ref(null); const product =
reactive({}); const { baseUrl, image_url } = useGlobalVariable(); const route =
useRoute(); onMounted(getProductDetails); const getProductDetails = () => { try { const
response = axios.get(baseUrl.value + "products/" + route.params.id); product =
response.data.data; console.log(product); } catch (ex) { error.value = ex; throw new
Error(ex); } finally { console.log("Function Runs"); } }; return { loading, error,
product, }; },
