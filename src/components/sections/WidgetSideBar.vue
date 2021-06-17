<template>
  <div
    class="widget-sidebar side-custom-menu custom-menu-1597047153171 category-menu-style-default_new"
    style="margin-bottom: 20px"
  >
    <h2>
      <span>BROWSE CATEGORIES</span>
    </h2>
    <div class="navigation-wrapper">
      <div class="main-navigation">
        <ul class="top-navigation side-menu">
          <li class="level0 level-top active">
            <router-link to="/" class="level-top">
              <i class="category-icon Simple-Line-Icons-home"></i>

              <span>
                <span>Home </span>
              </span>
            </router-link>
          </li>

          <side-bar-link
            :iconClass="'category-icon Simple-Line-Icons-badge'"
            v-for="category in categories"
            :key="category.id"
          >
            <template v-slot:link> {{ category.name }} </template>
            <template v-slot:drop-down>
              <sub-menu :product_categories="category.product_categories"> </sub-menu>
            </template>
          </side-bar-link>

          <li class="level0 level-top active">
            <router-link to="/" class="level-top">
              <i class="category-icon Simple-Line-Icons-layers"></i>

              <span>
                <span>More</span>
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import SubMenu from "../ui/SubMenu.vue";
import SideBarLink from "../links/SideBarLink.vue";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  components: {
    SubMenu,
    SideBarLink,
  },
  data: () => {
    return {
      categories: [],
      product_categories: [],
      loading: false,
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {},
  computed() {},
};
</script>

<style scoped>
.list-of-products {
  /* border: 1px solid #ccc; */
  display: flex;

  align-items: center;
  /* justify-content: center; */
}
.image-container {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid #0088cc;
}
</style>
