<template>
  <div class="slider" v-if="banner_ads.length != 0">
    <div class="slides">
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />

      <div
        class="slide"
        v-for="(banner, index) in banner_ads"
        :key="banner.id"
        :class="{ first: index === 0 }"
      >
        <div
          :style="
            'height: 400px; background-size: cover;background-repeat: no-repeat;background-position:  center; background-color: rgba(0, 0, 0, 0); min-height: 400px; background-image:  linear-gradient(to right, #e0eafc36, #cfdef344),  url(&quot;' +
            image_url +
            banner.image +
            '&quot;);'
          "
        >
          <p class="slide-description">{{ banner.description }}</p>
          <h1 class="slide-title">{{ banner.title }}</h1>
          <h3
            style="font-size: 4.6em; line-height: 1; font-weight: 700; margin-left: 2rem"
            class="mb-3 align-left heading-light"
          >
            {{ banner.percentage_off }}
          </h3>
          <div class="vc_row wpb_row vc_inner row" style="margin-left: 2rem">
            <div class="vc_column_container col-md-12">
              <div class="wpb_wrapper vc_column-inner">
                <h4
                  style="
                    font-size: 1.1em;
                    line-height: 1;
                    font-weight: 600;
                    padding-top: 10px;
                  "
                  class="mr-3 pull-left p-t-sm ls-n-20 align-left text-uppercase heading-light"
                >
                  Starting At
                </h4>
                <h4
                  style="font-size: 1.5em; line-height: 1"
                  class="coupon-sale-text d-inline-block mr-2 background-color-secondary align-left heading-light"
                >
                  <b><sup>$</sup>{{ banner.starting_at }}</b>
                </h4>
                <div style="display: inline-block; font-size: 1.4em; margin-left: -3px">
                  <router-link
                    :to="{ name: 'ShopList' }"
                    class="btn btn-modern btn-md btn-dark"
                    style="padding: 13px 36.4px; font-size: 13px"
                    >Shop Now!</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- automatic navigation start-->
      <div class="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>
      <!-- automatic navigation end-->
    </div>

    <!-- manual navigation start -->
    <div class="navigation-manual">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>
    <!-- manual navigation end -->
  </div>
</template>

<script>
//  slider scripts

var counter = 1;

setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BannerItem from "@/components/ui/BannerItem.vue";
import axios from "axios";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    BannerItem,
  },

  data: () => {
    return {
      banner_ads: [],
      loading: false,
    };
  },
  mounted() {
    this.getBannerAd();
  },
  methods: {
    getBannerAd() {
      this.loading = true;
      axios
        .get("http://127.0.0.1:8000/api/banner_ads")
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            console.log("Home ad loaded");
            this.banner_ads = response.data.data;
            this.loading = false;
            console.log(response.data.data);
          }
        })
        .catch((err) => {
          console.log("Error", err);
        });
    },
  },
};
</script>

<style scoped>
.slider {
  width: 775px;
  height: 400px;
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.slides {
  width: 500%;
  height: 400px;
  display: flex;
}

.slides input {
  display: none;
}

.slide {
  width: 20%;
  transition: 2s;
}
.slide-title {
  /* margin-top: -1.7rem; */
  margin-left: 2rem;
}
.slide-description {
  padding-top: 3rem;
  margin-left: 2rem;
}

.slide img {
  width: 100%;
  height: 400px;
}

/* manual slide navigation */

.navigation-manual {
  position: absolute;
  width: 800px;
  margin-top: -40px;
  display: flex;
  justify-content: flex-start;
  margin-left: 2rem;
}

.manual-btn {
  border: 1px solid #0088cc;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
}

.manual-btn:not(:last-child) {
  margin-right: 10px;
}

.manual-btn:hover {
  background: #0088cc;
}

#radio1:checked ~ .first {
  margin-left: 0;
}

#radio2:checked ~ .first {
  margin-left: -20%;
}

#radio3:checked ~ .first {
  margin-left: -40%;
}

#radio4:checked ~ .first {
  margin-left: -60%;
}

/* css for automatic navigation */

.navigation-auto {
  position: absolute;
  display: flex;
  width: 800px;
  justify-content: flex-start;
  margin-top: 360px;
  margin-left: 2rem;
}

.navigation-auto div {
  border: 1px solid #0088cc;
  padding: 5px;
  border-radius: 10px;
  transition: 1s;
}

.navigation-auto div:not(:last-child) {
  margin-right: 10px;
}

#radio1:checked ~ .navigation-auto .auto-btn1 {
  background: #0088cc;
}

#radio2:checked ~ .navigation-auto .auto-btn2 {
  background: #0088cc;
}

#radio3:checked ~ .navigation-auto .auto-btn3 {
  background: #0088cc;
}

#radio4:checked ~ .navigation-auto .auto-btn4 {
  background: #0088cc;
}
</style>
