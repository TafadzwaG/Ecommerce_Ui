<template>
  <div class="row mt-2 mb-2">
    <div class="col-lg-12">
      <div class="breadcrumbs-wrap text-center">
        <ul class="breadcrumb">
          <li class="home">
            <i class="category-icon Simple-Line-Icons-home"></i>
            <router-link :to="{ name: 'Home' }" class="navigation">Home</router-link>
            <i class="icon-angle-right"></i>
          </li>
          <li>
            <span class="navigation">{{ current_location }}</span>
          </li>
        </ul>
      </div>
      <div class="text-center">
        <h1 class="page-title">
          <span>{{ title }}</span>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    current_location: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  li {
    font-size: 13px !important;
  }
}
.navigation {
  font-size: 10px;
}
.category-icon {
  font-size: 10px !important;
  margin-right: 4px;
}
.page-title {
  font-size: 23px !important;
  font-weight: 900 !important;
}
.home a::after {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "porto";
  text-indent: 0;
  content: "" !important;
}
</style>
