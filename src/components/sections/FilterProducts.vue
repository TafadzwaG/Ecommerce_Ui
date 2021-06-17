<template>
  <div class="porto-custom-block">
    <div class="lang1">
      <hr class="grdnt-sprt" />
      <div class="filter-products" style="padding-top: 32px; padding-bottom: 39px">
        <div class="row">
          <product-container>
            <template v-slot:title> TOP RATED PRODUCTS </template>
            <template v-slot:product>
              <mini-product> </mini-product>
            </template>
          </product-container>
          <product-container>
            <template v-slot:title> BEST SELLING PRODUCTS </template>
            <template v-slot:product>
              <mini-product> </mini-product>
            </template>
          </product-container>
          <product-container>
            <template v-slot:title> LATEST PRODUCTS </template>
            <template v-slot:product>
              <mini-product> </mini-product>
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
export default {
  components: {
    MiniProduct,
    ProductContainer,
  },
};
</script>

<style></style>
