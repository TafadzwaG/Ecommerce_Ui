<template>
  <div class="top-links-container topbar-text-custom">
    <div class="container">
      <div class="top-links-inner">
        <currency></currency>
        <span class="split"></span>
        <language></language>

        <div class="top-links-area show-icon-tablet">
          <div id="shopify-section-header-toplink-menu" class="shopify-section">
            <links></links>
            <span class="separator"></span>
            <share></share>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Currency from "./top-bar-items/Currency.vue";
import Language from "./top-bar-items/Language.vue";
import Share from "./top-bar-items/Share.vue";
import Links from "./top-bar-items/Links.vue";
export default {
  components: {
    Currency,
    Language,
    Share,
    Links,
  },
};
</script>

<style lang="scss" scoped>
.conta {
  margin-left: 9.5rem;
  margin-right: 9.5rem;
}
</style>
