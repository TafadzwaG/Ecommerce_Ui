<template>
  <div>
    <pre-loader> </pre-loader>
    <app-header></app-header>
    <top-navigation> </top-navigation>

    <div class="home-container">
      <router-view> </router-view>
    </div>
    <app-footer> </app-footer>
  </div>
</template>
<script>
import TheHeader from "@/components/navigation/TheHeader.vue";
import Footer from "@/components/sections/Footer.vue";
import PreLoader from "@/components/ui/PreLoader.vue";
import TopNavigation from "@/components/navigation/TopNavigation.vue";

export default {
  components: {
    appHeader: TheHeader,
    appFooter: Footer,
    PreLoader,
    TopNavigation,
  },
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.home-container {
  min-height: 100vh !important;
  margin-left: 9rem;
  margin-right: 9rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
