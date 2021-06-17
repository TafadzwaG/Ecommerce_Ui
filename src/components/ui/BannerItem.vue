<template>
  <div class="item" style="padding-top: 50.778443113772454%; background-color: #eeeeee">
    <div
      class="slide-bg lazypreload lazyloaded"
      :data-bg="'(&quot;' + image_url + banner.image + '&quot;)'"
      :style="'background-image: url(&quot;' + image_url + banner.image + '&quot;);'"
    ></div>

    <div class="content-container">
      <div>
        <div class="vc_custom_1569919294806 has-content-pos justify-content-center">
          <h4
            style="
              font-size: 1.6em;
              color: rgba(119, 119, 119, 0.7);
              line-height: 1;
              font-weight: 500; ;
            "
            class="vc_custom_heading ls-80 mb-2 align-left"
          >
            {{ banner.description }}
          </h4>
          <h3
            style="font-size: 5.5em; line-height: 1; font-weight: 700"
            class="vc_custom_heading mb-3 align-left heading-dark"
          >
            {{ banner.title }}
          </h3>
          <div class="vc_row wpb_row vc_inner row">
            <div class="vc_column_container col-md-12">
              <div class="wpb_wrapper vc_column-inner">
                <h4
                  style="font-size: 1.4em; line-height: 1.5; font-weight: 700"
                  class="vc_custom_heading mr-2 pull-left align-left text-uppercase heading-dark"
                >
                  Starting At
                </h4>
                <h4
                  style="font-size: 2.6em; line-height: 1; margin-right: 30px"
                  class="vc_custom_heading pull-left m-r-lg align-left heading-dark"
                >
                  <b><sup>$</sup>{{ banner.starting_at }}</b>
                </h4>
                <div class="mb-0" style="display: inline-block">
                  <button
                    class="btn btn-modern btn-md btn-dark"
                    style="padding: 13px 36.4px; font-size: 13px"
                  >
                    Get Yours!
                  </button>
                </div>
              </div>
            </div>
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
  props: ["banner"],
};
</script>

<style scoped>
.content-container {
  margin-left: 2rem;
}
.vc_custom_1569918879668 {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 5.5%;
}
h4.vc_custom_heading.ls-80.mb-2.align-left {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem !important;
  font-family: Poppins;
  font-weight: 500;
  line-height: 1;
  color: rgba(119, 119, 119, 0.7);
  font-size: 16px;
  margin: 0px 0px 14px;
  padding: 0px;
  letter-spacing: 0.08em;
  text-align: left;
}
h3.vc_custom_heading.mb-3.align-left.heading-dark {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 1rem !important;
  font-family: Poppins;
  font-weight: 700;
  line-height: 1;
  color: rgb(34, 37, 41);
  font-size: 55px;
  margin: 0px 0px 20px;
  padding: 0px;
  letter-spacing: normal;
  text-align: left;
}

h4.vc_custom_heading.mr-2.pull-left.align-left.text-uppercase.heading-dark {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 1.5;
  color: rgb(34, 37, 41);
  font-size: 14px;
  margin-right: 0.5rem !important;
  text-transform: uppercase !important;
  margin: 0px 0px 14px;
  padding: 0px;
  letter-spacing: normal;
  text-align: left;
  float: left;
}
b {
  box-sizing: border-box;
  font-weight: 700;
  margin: 0px;
  padding: 0px;
}
button.btn.btn-modern.btn-md.btn-dark {
  box-sizing: border-box;
  border-radius: 0px;
  margin: 0px;
  font-family: Poppins;
  font-size: 13px;
  line-height: 1.42857;
  overflow: visible;
  text-transform: uppercase;
  appearance: none;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 13px 36.4px;
  margin-left: -25rem !important;
}
button.btn.btn-modern.btn-md.btn-dark:hover {
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  text-decoration: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(35, 39, 43);
  border-color: rgb(29, 33, 36);
  background: rgb(59, 59, 59);
  letter-spacing: 0.01em;
  text-shadow: none;
}
</style>
