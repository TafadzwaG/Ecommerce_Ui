<template>
  <div class="porto-custom-block"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.lazyload,
.lazyloading,
img:not(.lazyloaded) {
  opacity: 1 !important;
}
.brand-image {
  width: 296.333px;
}
.brand-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
