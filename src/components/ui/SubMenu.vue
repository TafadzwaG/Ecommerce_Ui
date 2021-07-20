<template>
  <div
    class="level0 menu-wrap-sub"
    style="width: 650px; left: 0px; right: auto; border-radius: 0px 6px 6px"
  >
    <div class="container">
      <div class="mega-columns row">
        <div
          class="ulmenu-block ulmenu-block-center menu-items col-md-8 itemgrid itemgrid-2col"
        >
          <div class="row">
            <ul class="level0" style="min-height: 150px; margin-top: 1rem">
              <li
                class="level1 groups item margin-top"
                v-for="category in sub_categories"
                :key="category.id"
              >
                <div class="menu-wrapper">
                  <ul class="level1">
                    <li class="level2">
                      <a
                        href="https://porto-demo.myshopify.com/collections/accessories"
                        class="site-nav__link"
                        @click.prevent="getCategory(category.name)"
                      >
                        <span class="lang1"> {{ category.name }} </span>
                      </a>
                    </li>
                    <!-- <div class="content" v-if="collapsible == true">
                      <ul
                        v-for="sub_category in category.subcategory"
                        :key="sub_category.id"
                      >
                        <li>{{ sub_category.name }}</li>
                      </ul>
                    </div> -->
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="menu-static-blocks ulmenu-block ulmenu-block-right col-md-4">
          <div class="lang1">
            <div
              :style="
                'background-position: -15px center;background-image: url(&quot;' +
                image_url +
                image +
                '&quot;);background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;'
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
import axios from "axios";
export default {
  mixins: [global],
  name: "SubMenu",
  props: ["sub_categories", "image"],

  data: () => {
    return {
      category: {},
      loading: false,
      collapsible: false,
    };
  },
  methods: {
    getCategory(category) {
      axios
        .get(this.base_url + "categories_get/" + category)
        .then((response) => {
          console.log(response.data.data);
          this.category = response.data.data;
          this.collapsible = true;
        })
        .catch((err) => {
          console.log(err);
          this.collapsible = false;
        });
    },
  },
};
</script>

<style scoped>
.ulmenu-block-right * {
  height: 100%;
}
.product-category {
  display: flex;
}
.margin-top {
  margin-top: -2rem;
}
</style>
