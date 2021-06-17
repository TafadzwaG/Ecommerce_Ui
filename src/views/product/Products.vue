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
                        <category-card> </category-card>
                        <category-card> </category-card>
                        <category-card> </category-card>
                        <category-card> </category-card>
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

export default {
  components: {
    CategoryCard,
    FeaturedGrid,
    ProductsList,
  },

  data: () => {
    return {};
  },

  methods: {},
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
.category-container {
  display: flex;
}
</style>
