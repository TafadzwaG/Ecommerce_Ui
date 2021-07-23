<template>
  <div class="vc_column_container col-md-4">
    <div class="wpb_wrapper vc_column-inner">
      <div class="porto-ultimate-content-box-container">
        <div
          class="porto-ultimate-content-box has-content-pos justify-content-center vc_custom_1595216969075 flexxx"
          :style="
            'height: 170px; background-size: cover;background-repeat: no-repeat;background-position:  center;  min-height: 170px; background-image:  linear-gradient(to left top, #ccc, #cfdef344, #eeeeee),  url(&quot;' +
            image_url +
            home_ad.image +
            '&quot;);'
          "
        >
          <div class="content-contaner">
            <h3
              style="font-size: 1.5rem; line-height: 1"
              class="vc_custom_heading mb-2 align-left"
            >
              {{ home_ad.title }}
            </h3>
            <h4
              style="font-size: 1.8125rem; line-height: 1; font-weight: 800"
              class="vc_custom_heading mb-4 align-left heading-primary"
            >
              <sup>
                <del style="color: #222529; margin-right: -4px"
                  ><b>{{ home_ad.was }}%</b></del
                >
              </sup>
              {{ home_ad.is_now }}%<sup>OFF</sup>
            </h4>
          </div>
          <div class="vc_btn3-container mb-0 vc_btn3-inline button-light">
            <router-link
              class="vc_btn3 vc_btn3-shape-default btn btn-flat btn-md btn-light"
              :to="{ name: 'ShopList' }"
            >
              Shop Now
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  props: ["home_ad"],
};
</script>

<style scoped>
.flexxx {
  display: flex !important;
}
.home-ads-container {
  background: red;
}
.vc_custom_1595216969075 {
  margin-bottom: 20px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1.25rem;
  background-color: #f4f4f4;
}

.vc_custom_1595216625670 {
  margin-bottom: 20px;
  border-top-width: 0.875rem;
  border-right-width: 0.875rem !important;
  border-bottom-width: 0.875rem;
  border-left-width: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  background-color: #f4f4f4;
  border-left-color: #e7e7e7;
  border-left-style: solid;
  border-right-color: #e7e7e7;
  border-right-style: solid;
  border-top-color: #e7e7e7;
  border-top-style: solid;
  border-bottom-color: #e7e7e7;
  border-bottom-style: solid;
}
.vc_custom_1595216973929 {
  margin-bottom: 20px;
  padding-top: 1.6rem;
  padding-right: 1rem;
  padding-bottom: 1.6rem;
  background-color: #f4f4f4;
}

.vc_custom_1595216969075 {
  margin-bottom: 20px;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  padding-left: 1.25rem;
  background-color: #f4f4f4;
}
.vc_custom_1595216625670 {
  margin-bottom: 20px;
  border-top-width: 0.875rem;
  border-right-width: 0.875rem !important;
  border-bottom-width: 0.875rem;
  border-left-width: 0.875rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  background-color: #f4f4f4;
  border-left-color: #e7e7e7;
  border-left-style: solid;
  border-right-color: #e7e7e7;
  border-right-style: solid;
  border-top-color: #e7e7e7;
  border-top-style: solid;
  border-bottom-color: #e7e7e7;
  border-bottom-style: solid;
}
.bt {
  background-color: #f4f4f4;
}
.vc_custom_1595216973929 {
  margin-bottom: 20px;
  padding-top: 1.6rem;
  padding-right: 1rem;
  padding-bottom: 1.6rem;
  background-color: #f4f4f4;
}

.content-contaner {
  width: fit-content;
  border-radius: 3px;
  padding: 4px;
  margin-bottom: 15px;
  background: linear-gradient(to right bottom, #ccc, #f7f7f7c7, #eeeeee);
  overflow: hidden;
  transition: all 0.3s ease-in;
}
.porto-ultimate-content-box-container {
  transition: all 0.3s ease-in;
}
.porto-ultimate-content-box-container:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px 0px;
  transition: scale(1.02);
}
.button-light {
  border: 1px solid #f7f7f7;
  background: #f7f7f7;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px 0px;
  width: fit-content;
  padding: 3px;
  border-radius: 3px;
  transition: transform 300ms ease;
}

.button-light:hover,
.button-light:focus {
  transform: scale(1.05);
  background: #f7f7f7b1;
}
</style>
