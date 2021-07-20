<template>
  <a class="product-image">
    <img
      class="lazyloaded"
      :data-src="image_url + computeImage"
      alt="product image"
      :src="image_url + computeImage"
    />
  </a>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: ["image"],

  computed: {
    computeImage() {
      return this.image.replace(/^public/, "");
    },
  },
};
</script>
<style scoped></style>
