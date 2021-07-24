<template>
  <div class="block block-nav sidebar-cate-toogle">
    <div class="block-title">
      <h3>
        <span data-translate="collections.sidebar.categories">Categories</span>
      </h3>
      <span class="collapse">
        <i class="icon-up-dir"></i>
        <i class="icon-down-dir"></i>
      </span>
    </div>
    <div class="sidebar-content block-content">
      <ul id="categories_nav" class="nav-accordion nav-categories" style="">
        <li
          class="level0 level-top parent active"
          v-for="(category, index) in product_categories"
          :key="index"
        >
          <a @click="filterProduct" class="level-top">
            <span class="span-with-check-box">
            <input type="checkbox" class="checkbox smart_input" name="" :value="category.id" :id="'category'+index" v-model="selected.product_categories">
              <span class="lang1" @click="expandCategories(index)">{{
                category.name
              }}</span>
              <span class="count">({{ category.products_count }})</span>
            </span> </a
          ><span
            v-if="category.subcategory.length > 0"
            :class="isExpanded(index) ? 'expand' : 'collapse'"
            >expand</span
          >
          <ul
            class="level0"
            v-show="isExpanded(index)"
            :class="isExpanded(index) ? 'block' : 'none-block'"
          >
            <li
              class="level1"
              v-for="(category, key) in category.subcategory"
              :key="category.id"
            >
              <a>
                <span>
                  <span class="lang1" @click="expandSubCategories(key)">{{
                    category.name
                  }}</span>
                  <span class="count">({{ category.products_count }})</span>
                </span>
              </a>
              <span
                v-if="category.subcategory.length > 0"
                :class="isExpandedSubGroup(key) ? 'expand' : 'collapse'"
                >expand</span
              >
              <ul
                class="level0"
                v-show="isExpandedSubGroup(key)"
                :class="isExpandedSubGroup(key) ? 'block' : 'none-block'"
              >
                <li
                  class="level1"
                  v-for="category in category.subcategory"
                  :key="category.id"
                >
                  <a>
                    <span>
                      <span class="lang1">{{ category.name }}</span>
                      <span class="count">({{ category.products_count }})</span>
                    </span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
import axios from "axios";
export default {
  mixins: [global],
  data: () => {
    return {
      product_categories: [],
      loading: false,
      expandedGroup: [],
      expandSubGroup: [],

      selected: {
        product_categories: []
      }

    };
  },

  mounted() {
    this.getProductCategories();
   
  },

  watch : {
    selected: {
      handler: function(){
        this.getProductCategories(); 
        this.getFilteredProducts()
      },
      deep: true,
    },
  },

  computed: {},
  methods: {
    filterProduct() {
      this.$emit("filter-product");
    },

     getFilteredProducts() {
      axios
        .get(this.base_url + "products_filter", {
          params: this.selected,
        })
        .then((response) => {
          console.log("Products from filtering")
          console.log(response.data.data);
          console.log("Products from filtering")
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getProductCategories() {
      this.loading = true;
      axios
        .get(this.base_url + "categories", 
        this.requestAuthHeader(), 
        { 
          params : (this.selected, "product_categories")
        })
        .then((response) => {
          if (response.status == 200) {
            console.log(response.data.data);
            this.product_categories = response.data.data;
            this.loading = false;
          }
        })
        .catch((error) => {
          console.log(error);
          this.loading = false;
        });
    },

    isExpanded(index) {
      return this.expandedGroup.indexOf(index) !== -1;
    },

    expandCategories(index) {
      if (this.isExpanded(index))
        this.expandedGroup.splice(this.expandedGroup.indexOf(index), 1);
      else this.expandedGroup.push(index);
    },

    isExpandedSubGroup(key) {
      return this.expandSubGroup.indexOf(key) !== -1;
    },

    expandSubCategories(key) {
      if (this.isExpandedSubGroup(key))
        this.expandSubGroup.splice(this.expandSubGroup.indexOf(key), 1);
      else this.expandSubGroup.push(key);
    },
  },
  computed: {},
};
</script>

<style scoped>
.count {
  /* float: right; */
}
.expand,
.collapse,
.parent {
  cursor: pointer;
}

.block {
  display: block;
}
.none-block {
  display: none;
}
.span-with-check-box{
  /* border: 1px solid red; */
  display: flex
}
.check{
  border: 1px solid yellow !important;
}

input.checkbox.smart_input {
  box-sizing: border-box;
  margin: 4px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.6;
  overflow: visible;
  padding: 0px;

 
  width: 18px;
  height: 18px;
  opacity: 1;
  z-index: 99;
  cursor: pointer;
}
</style>
