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
              <option
                value="best-selling"
                data-translate="collections.sorting.best_selling"
              >
                Best Selling
              </option>
              <option
                value="title-ascending"
                selected="selected"
                data-translate="collections.sorting.az"
              >
                Name, A-Z
              </option>
              <option value="title-descending" data-translate="collections.sorting.za">
                Name, Z-A
              </option>
              <option
                value="price-ascending"
                data-translate="collections.sorting.price_ascending"
              >
                Price, low to high
              </option>
              <option
                value="price-descending"
                data-translate="collections.sorting.price_descending"
              >
                Price, high to low
              </option>
              <option
                value="created-descending"
                data-translate="collections.sorting.date_descending"
              >
                Date, new to old
              </option>
              <option
                value="created-ascending"
                data-translate="collections.sorting.date_ascending"
              >
                Date, old to new
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="limited-wrap">
      <div class="limited-view select-new">
        <div class="select-inner">
          <span data-translate="collections.limiter.title">Show: </span>
          <select name="limiter" class="field bootstrap-select">
            <option value="grid">12</option>
            <option value="grid_24">24</option>
            <option value="grid_36">36</option>
            <option value="grid_all" data-translate="collections.limiter.limit_all">
              All
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
