<template>
  <div class="narrow-item sidebar-toogle d-block" hidden="">
    <dt class="block-title">
      <h3>
        <span class="lang1">Price</span>
      </h3>

      <span class="collapse">
        <i class="icon-down-dir"></i>
        <i class="icon-up-dir"></i>
      </span>
    </dt>
    <dd class="sidebar-content layer-filter price color-swatch">
      <ol class="swatch-list fields">
        <price-input :name="'Below $100.00'"> </price-input>
        <price-input :name="'$100.00-199.00'"> </price-input>
        <price-input :name="'$200.00-299.00'"> </price-input>
        <price-input :name="'$300.00-399.00'"> </price-input>
        <price-input :name="'$400.00-499.00'"> </price-input>
        <price-input :name="'Above $500.00'"> </price-input>
      </ol>
    </dd>
  </div>
</template>

<script>
import PriceInput from "@/components/ui/PriceInput.vue";
export default {
  components: {
    PriceInput,
  },
};
</script>

<style scoped>
div.narrow-item.sidebar-toogle.d-block {
  box-sizing: border-box;
  display: block !important;
  margin: 0px;
  padding: 20px;
  border-bottom: 1px solid rgb(231, 231, 231);
}

h3 {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: inherit;
  line-height: inherit;
  color: rgb(34, 37, 41);
  font-size: 15px;
  margin: 0px;
  padding: 0px;
}
dd.sidebar-content.layer-filter.price.color-swatch {
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  margin-left: 0px;
  margin: 0px;
  padding: 0.6631em 0px;
  overflow: hidden;
  padding-bottom: 0px;
  color: rgb(68, 68, 68);
}
</style>
