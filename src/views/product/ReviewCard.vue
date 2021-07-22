<template>
  <div class="spr-reviews" id="reviews_4878315749453">
    <div class="spr-review" id="spr-review-108674818">
      <div class="spr-review-header">
        <span class="spr-starratings spr-review-header-starratings">
          <star-rating
            :star-size="20"
            :show-rating="false"
            :rating="review.star"
          ></star-rating>
        </span>
        <h3 class="spr-review-header-title">{{ review.review_title }} -</h3>
        <span class="spr-review-header-byline"
          ><strong>posted</strong> on
          <strong> {{ formatDate(review.date_posted) }}</strong></span
        >
      </div>

      <div class="spr-review-content">
        <p class="spr-review-content-body">{{ review.review }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
import StarRating from "vue-star-rating";

export default {
  mixins: [global],
  props: ["review"],
  components: {
    StarRating,
  },
};
</script>

<style scoped lang="scss">
@import url(~@/assets/css/review.scss);
.spr-reviews {
  margin-top: 3rem !important;
}
.spr-review-header-starratings {
  float: right !important;
}
</style>
