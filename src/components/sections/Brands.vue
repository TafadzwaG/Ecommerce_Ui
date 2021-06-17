<template>
  <div class="porto-custom-block">
    <div class="lang1">
      <hr class="grdnt-sprt" />

      <div style="padding: 10px 0">
        <div class="brand-container" style="width: 296.333px; margin-right: 20px">
          <div class="item">
            <a href="#">
              <img
                data-src="images/david-smith.png"
                alt="Brand 4"
                class="brand-image"
                src="images/david-smith.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
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
