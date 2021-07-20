<template>
  <div class="collection-sorting-row">
    <div class="sorter_wrap">
      <div class="sort-by">
        <div class="select-new">
          <div class="select-inner">
            <span data-translate="collections.sorting.title">Sort by: </span>

            <select name="sort-by" class="field bootstrap-select">
              <option value="manual" data-translate="collections.sorting.featured">
                Featured
              </option>
              <option value="best-selling">Best Selling</option>
              <option value="title-ascending" selected="selected">Name, A-Z</option>
              <option value="title-descending">Name, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
              <option value="created-descending">Date, new to old</option>
              <option value="created-ascending">Date, old to new</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="limited-wrap">
      <div class="limited-view select-new">
        <div class="select-inner">
          <span data-translate="collections.limiter.title">Show: </span>
          <select name="limiter" class="field bootstrap-select" v-model="value">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>All</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  data: () => {
    return {
      value: 10,
    };
  },

  watch: {
    value: {
      handler: function (newVal, oldVal) {
        console.log("OldVal", oldVal);
        console.log("newVal", newVal);

        this.getProducts(newVal);
      },
    },
  },

  methods: {
    getProducts(value) {
      axios
        .get(this.base_url + "products_per_page/" + value, this.requestAuthHeader())
        .then((response) => {
          console.log(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
