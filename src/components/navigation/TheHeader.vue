<template>
  <header class="main-section-header header-color" style="height: 119px">
    <div
      class="header-container type1 header-color-custom header-sticky-color-dark header-menu-style-default_new sticky-menu-color-dark header-menu-left sticky-header"
    >
      <app-top-bar></app-top-bar>
      <app-middle-bar></app-middle-bar>
    </div>
  </header>
</template>

<script>
import TheTopBar from "./TheTopBar.vue";
import TheMiddleBar from "./TheMiddleBar.vue";
export default {
  name: "TheHeader",
  components: {
    appTopBar: TheTopBar,
    appMiddleBar: TheMiddleBar,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.header-container.type1.header-color-custom.header-sticky-color-dark.header-menu-style-default_new.sticky-menu-color-dark.header-menu-left.sticky-header {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  position: relative;
  border-top-width: 0px;
  border-top-style: solid;
  background-color: transparent;
  color: rgb(51, 51, 51);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-color: rgb(0, 136, 204);
}
</style>
