<template>
  <div
    class="level0 menu-wrap-sub"
    style="width: 650px; left: 0px; right: auto; border-radius: 0px 6px 6px; "
    v-if="product_categories.length != 0"
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
                v-for="product_cat in product_categories"
                :key="product_cat.id"
              >
                <div class="menu-wrapper">
                  <ul class="level1">
                    <li class="level2">
                      <a
                        href="https://porto-demo.myshopify.com/collections/accessories"
                        class="site-nav__link"
                      >
                        <span class="lang1">
                          {{ product_cat.name }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="menu-static-blocks ulmenu-block ulmenu-block-right col-md-4">
          <div class="lang1">
            <div
              :style="'background-position: -15px center;background-image: url(&quot;' +image_url +product_categories[0].image +'&quot;);background-repeat: no-repeat;background-size: cover;width: 100%;height: 100%;' "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  name: "SubMenu",
  props: ["product_categories"],
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
