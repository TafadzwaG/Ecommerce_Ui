<template>
  <img id="product-featured-image" class="" :src="image_url + image" alt="image" />
</template>

<script>
import global from "@/mixins/global.js";
export default {
  props: ["image"],
  mixins: [global],
};
</script>

<style></style>
