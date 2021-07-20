<template>
  <div class="">
    <div class="" style="width: 255px">
      <div class="item shadow">
        <router-link to="">
          <span class="thumb-info align-center"
            ><span class="thumb-info-wrapper tf-none"
              ><img
                data-src="images/products/2.jpg"
                alt=""
                class="lazypreload lazyloaded"
                :src="image_url + category.image"
              /> </span
            ><span class="thumb-info-wrap">
              <span class="thumb-info-title">
                <h3 class="sub-title thumb-info-inner">
                  <span class="category-title">{{ category.name }}</span>
                </h3>
                <span class="thumb-info-type">
                  <mark class="count"
                    ><span>{{ category.products.length }} Products</span></mark
                  >
                </span>
              </span>
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: ["category"],

  data: () => {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style scoped>
.short-collection-list.overlay-bg-75 .item .thumb-info-wrapper:after {
  background-color: rgba(27, 27, 23, 0.75);
}

.short-collection-list.overlay-bg-75 .item:hover .thumb-info-wrapper:after {
  background-color: rgba(27, 27, 23, 0.6);
}

.short-collection-list .item.cat-has-icon:hover a,
.short-collection-list .item.cat-has-icon:hover .thumb-info-title {
  color: #c3512f;
}
.category-title {
  text-transform: uppercase;
}
</style>
