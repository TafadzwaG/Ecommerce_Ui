<template>
  <div class="porto-custom-block">
    <div>
      <div class="row home-ads mb-2">
        <home-ad
          v-for="home_ad in home_ads"
          :key="home_ad.id"
          :home_ad="home_ad"
        ></home-ad>
      </div>
    </div>
  </div>
</template>

<script>
import HomeAd from "./HomeAd.vue";
import global from "@/mixins/global.js";
import axios from "axios";
export default {
  mixins: [global],
  components: {
    HomeAd,
  },

  data: () => {
    return {
      home_ads: [],
      loading: false,
    };
  },
  mounted() {
    this.getHomeAds();
  },
  methods: {
    getHomeAds() {
      axios
        .get(this.base_url + "home_ads")
        .then((response) => {
          if (response.status == 200 || response.status == 201) {
            console.log(response.data.data);
            this.home_ads = response.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
