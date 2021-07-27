<template>
  <div class="search-area show-icon-tablet">
    <a href="#" class="search-icon"
      ><span><i class="icon-magnifier"></i></span
    ></a>
    <div class="search-extended has-categories">
      <form role="search" class="searchform has-categories-dropdown porto-ajax-search">
        <label class="screen-reader-text" for="q"></label>
        <input type="text" class="s" placeholder="Search..." v-model="searchTerm" />
        <input type="hidden" name="type" value="product" />
        <div id="shopify-section-search-by-category" class="shopify-section"></div>
        <button class="searchsubmit" @click.prevent="searchProduct">Search</button>
      </form>

      <div class="search-info-text">
        <span>Start typing to see products you are looking for.</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import global from "@/mixins/global.js";
import { mapGetters, mapMutations } from "vuex";
export default {
  mixins: [global],
  data: () => {
    return {
      searchTerm: " ",
    };
  },
  watch: {
    ...mapMutations(["setSearchItems"]),
    searchTerm: {
      handler: function (newVal, oldVal) {
        if (newVal === " ") {
          localStorage.setItem("searchItems", []);
          this.$store.commit("setSearchItems", {
            searchItems: [],
          });
        }
      },
      deep: true,
    },
  },

  computed: {
    ...mapGetters(["getSearchItems"]),
    axiosParams() {
      const params = new URLSearchParams();
      params.append("query", this.searchTerm);
      return params;
    },
  },
  mounted() {},
  methods: {
    async searchProduct() {
      try {
        await this.$store.dispatch("searchProducts", this.axiosParams);
      } catch (error) {
        throw new Error(error);
      } finally {
      }
    },
  },
};
</script>

<style scoped>
input.s {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  overflow: visible;
  padding: 0px 170px 0px 21px;
  padding-right: 200px;
  width: 100%;
  height: 40px;
  border: 0px;
  border-radius: 20px;
  background-color: transparent !important;
  color: rgb(141, 141, 141);
  visibility: visible;
}
</style>
