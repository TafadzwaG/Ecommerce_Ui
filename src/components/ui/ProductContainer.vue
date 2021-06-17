<template>
  <div class="col-md-4">
    <div class="products-collection widget-products porto-products title-">
      <h2 class="section-title text-left">
        <span class="inline-title"
          ><span class="lang1">
            <slot name="title"></slot>
          </span>
        </span>
      </h2>
      <div class="widget">
        <ul class="product_list_widget">
          <slot name="product"></slot>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
