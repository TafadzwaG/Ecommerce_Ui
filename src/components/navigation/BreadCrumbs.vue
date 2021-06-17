<template>
  <nav class="main-breadcrumbs" role="navigation" aria-label="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs">
        <div class="breadcrumbs-inner">
          <ul class="bread-crumb-links">
            <li class="home">
              <router-link :to="to" class="" tag="a">
                <i class="category-icon Simple-Line-Icons-home"></i>
              </router-link>
            </li>

            <li class="">
              <span class="breadcrumbs-split"><i class="icon-angle-right"></i></span>
              <span>
                <span>{{ current_route }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    home: {
      type: String,
      required: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },

    current_route: {
      type: String,
      required: false,
    },
  },
};
</script>

<style>
.main-breadcrumbs {
  margin-top: 1rem;
}
.home a::after {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "porto";
  text-indent: 0;
  content: "\e883";
}

.bread-crumb-links {
  display: flex;
}
</style>
