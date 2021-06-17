<template>
  <div class="product-main">
    <breadcrumb :home="'Home'" :to="'/'" :current_route="'Product Details'"> </breadcrumb>
    <div class="container">
      <div class="box_product_page">
        <div class="row">
          <div class="col-lg-9 main-content product-main-inner">
            <div class="product-view product-page-area">
              <product> </product>
            </div>
          </div>
          <side-bar-right> </side-bar-right>
        </div>

        <tab-container> </tab-container>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/navigation/BreadCrumbs.vue";
import Product from "@/components/products/Product.vue";
import SideBarRight from "@/components/products/SideBarRight.vue";
import TabContainer from "@/components/products/TabContainer.vue";
export default {
  components: {
    Breadcrumb,
    SideBarRight,
    Product,
    TabContainer,
  },
};
</script>

<style scoped></style>
