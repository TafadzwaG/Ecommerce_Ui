<template>
  <div class="col-lg-3 sidebar-right col-right">
    <div id="shopify-section-sidebar-right" class="shopify-section">
      <div class="mobile-canvas-overlay close-right"></div>
      <div class="block-main-canvas canvas-right">
        <div class="canvas-icon sicon-right d-block d-lg-none">
          <a href="javascript:void(0)"><i class="fa fa-sliders"></i></a>
        </div>
        <div class="canvas-inner">
          <div class="custom-block custom-block-1">
            <div class="lang1">
              <icon-template
                :iconClass="'icon-shipped'"
                :preText="'FREE'"
                :proText="'SHIPPING'"
              >
              </icon-template>
              <icon-template
                :iconClass="'icon-us-dollar'"
                :preText="'100% MONEY'"
                :proText="'BACK GUARANTEE'"
              >
              </icon-template>
              <icon-template
                :iconClass="'icon-online-support'"
                :preText="'ONLINE'"
                :proText="'SUPPORT 24/7'"
              >
              </icon-template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconTemplate from "@/components/icons/iconTemplate.vue";

export default {
  components: {
    iconTemplate,
  },
};
</script>

<style></style>
