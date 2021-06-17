<template>
  <div class="slider">
        <div class="slides">


            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">

            <div class="slide first">
                <img src="img/1.png" alt="">
            </div>

            <div class="slide">
                <img src="img/2.jpg" alt="">
            </div>
            <div class="slide">
                <img src="img/3.jpg" alt="">
            </div>
            <div class="slide">
                <img src="img/4.jpg" alt="">
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

  setInterval(function() {
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if (counter > 3) {
          counter = 1;
      }
  }, 5000)



import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import BannerItem from "@/components/ui/BannerItem.vue";
import axios from "axios";
import global from '@/mixins/global.js'
export default {
  mixins:[global],
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
    width: 800px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
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
    justify-content: start;
    margin-left: 2rem;
}

.manual-btn {
    border: 1px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
}

.manual-btn:not(:last-child) {
    margin-right: 10px;
}

.manual-btn:hover {
    background: #40d3dc;
}

#radio1:checked~.first {
    margin-left: 0;
}

#radio2:checked~.first {
    margin-left: -20%;
}

#radio3:checked~.first {
    margin-left: -40%;
}

#radio4:checked~.first {
    margin-left: -60%;
}


/* css for automatic navigation */

.navigation-auto {
    position: absolute;
    display: flex;
    width: 800px;
    justify-content: start;
    margin-top: 460px;
    margin-left: 2rem;
}

.navigation-auto div {
    border: 1px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
}

.navigation-auto div:not(:last-child) {
    margin-right: 10px;
}

#radio1:checked~.navigation-auto .auto-btn1 {
    background: #40d3dc;
}

#radio2:checked~.navigation-auto .auto-btn2 {
    background: #40d3dc;
}

#radio3:checked~.navigation-auto .auto-btn3 {
    background: #40d3dc;
}

#radio4:checked~.navigation-auto .auto-btn4 {
    background: #40d3dc;
}
</style>
