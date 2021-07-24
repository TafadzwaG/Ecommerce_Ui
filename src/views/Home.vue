<template>
  <div class="wrapper">
    <div class="page">
      <div class="main-container">
        <div class="main-wrapper">
          <div class="main pt-main">
            <home-bar-section> </home-bar-section>
            <div id="shopify-section-1597047153171" class="shopify-section">
              <div>
                <div
                  id="main-block-1597047153171"
                  class="main-section-one main_section main_section_1597047153171"
                  style="margin-top: 20px; margin-bottom: px; padding: "
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-9 order-2">
                        <slide-banner-section></slide-banner-section>
                        <home-ads-container> </home-ads-container>
                        <featured-products> </featured-products>
                        <brands> </brands>
                        <filter-products> </filter-products>
                        <support> </support>
                      </div>
                      <div class="col-lg-3 order-1 side-left">
                        <widget-side-bar></widget-side-bar>
                        <cta-small> </cta-small>
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
</template>

<script>
// @ is an alias to /src
import HomeBarSection from "@/components/sections/HomeBarSection.vue";
import SlideBannerSection from "@/components/sections/SlideBannerSection.vue";
import WidgetSideBar from "@/components/sections/WidgetSideBar.vue";
import CtaSmall from "@/components/ui/CtaSmall";
import HomeAdsContainer from "@/components/ui/HomeAdsContainer.vue";
import FeaturedProducts from "@/components/sections/FeaturedProducts.vue";
import Brands from "@/components/sections/Brands.vue";
import FilterProducts from "@/components/sections/FilterProducts.vue";
import Support from "@/components/sections/Support.vue";
export default {
  name: "Home",
  components: {
    HomeBarSection,
    SlideBannerSection,
    WidgetSideBar,
    CtaSmall,
    HomeAdsContainer,
    FeaturedProducts,
    Brands,
    FilterProducts,
    Support,
  },

  mounted() {
    console.log();
  },
};
</script>

<style lang="scss"></style>
