<template>
  <div class="search-area show-icon-tablet">
    <a href="#" class="search-icon"
      ><span><i class="icon-magnifier"></i></span
    ></a>
    <div class="search-extended has-categories">
      <form
        role="search"
        method="get"
        class="searchform has-categories-dropdown porto-ajax-search"
        data-thumbnail="1"
        data-price="1"
        data-post-type="product"
        data-count="15"
      >
        <label class="screen-reader-text" for="q"></label>
        <input
          type="text"
          class="s"
          data-translate="general.search.placeholder"
          placeholder="Search..."
          value=""
          name="q"
          autocomplete="off"
        />
        <input type="hidden" name="type" value="product" />
        <div id="shopify-section-search-by-category" class="shopify-section"></div>
        <button type="submit" class="searchsubmit" data-translate="general.search.submit">
          Search
        </button>
      </form>
      <div class="search-info-text">
        <span data-translate="general.search.info_search"
          >Start typing to see products you are looking for.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
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
  background-color: transparent;
  color: rgb(141, 141, 141);
  visibility: visible;
}
</style>
