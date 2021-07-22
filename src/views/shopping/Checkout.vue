<template>
  <div>
    <star-rating
      :star-size="20"
      @update:rating="setRating"
      v-model="rating"
      :show-rating="false"
    ></star-rating>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "App",
  components: {
    StarRating,
  },
  data() {
    return {
      rating: null,
    };
  },
  computed: {},

  methods: {
    setRating(rating) {
      this.rating = rating;
    },
  },
};
</script>

<style lang="scss">
.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>
