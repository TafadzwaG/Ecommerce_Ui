<template>
  <div>
    <div v-for="(f, index) in featured_products" :key="index">
      <!-- <div
        :style="
          'background-image: url(&quot;' +
          image_url +
          f.products_images[0].image +
          '&quot;);'
        "
      ></div> -->
      {{ f.products_images }}
    </div>
  </div>
</template>

<script>
import useFetch from "@/hooks/fetch.js";
import useGlobal from "@/hooks/global.js";
import useGlobalVariable from "@/hooks/globalVariable.js";
import { ref, onMounted } from "vue";
export default {
  setup() {
    const { featured_products, getFeaturedProducts } = useGlobal();

    const { baseUrl, image_url, requestAuthHeader } = useGlobalVariable();

    onMounted(getFeaturedProducts);
    return {
      featured_products,
      image_url,
    };
  },
};
</script>

<style scoped>
a.action-list.quickview-icon.quickview {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(77, 77, 74);
  margin: 0px;
  padding: 1.6px 24px;
  position: absolute;
  top: 50%;
  opacity: 1;
  visibility: visible;
  z-index: 2;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  overflow: hidden;
  border-radius: 32px !important;
  text-indent: 0px;
  width: auto;
  height: auto;
  right: 50%;
  transform: translateZ(0px) translateX(50%);
  margin-top: -20px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  text-shadow: none;
  transition: all 0.25s ease 0s;
  line-height: 34px;
  border: 1px solid rgb(221, 221, 221);
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins;
}
.border-1 {
  border: 1px solid rgb(221, 221, 221) !important;
}

span.category-list {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: block;
  font-size: 10px;
  opacity: 0.8;
  text-transform: uppercase;
  line-height: 1.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(255, 255, 255);
}
.adjust-margin {
  padding-top: -20px !important;
}
a.action-list.quickview-icon.quickview.border-1.adjust-margin {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(77, 77, 74);
  margin: -20px 0px 0px;
  padding: 1.6px 24px;
  position: absolute;
  top: 45%;
  opacity: 1;
  visibility: visible;
  z-index: 2;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  overflow: hidden;
  border-radius: 32px !important;
  text-indent: 0px;
  width: auto;
  height: auto;
  right: 50%;
  transform: translateZ(0px) translateX(50%);
  margin-top: -20px;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  text-align: center;
  vertical-align: top;
  text-shadow: none;
  transition: all 0.25s ease 0s;
  line-height: 34px;
  border: 1px solid rgb(221, 221, 221) !important;
  background: transparent;
  text-transform: uppercase;
  font-weight: 600;
  font-family: Poppins;
}
.lazyload,
.lazyloading,
img:not(.lazyloaded) {
  transition: opacity 400ms;
  background-color: #eee;
  opacity: 1 !important;
  padding: 1rem !important;
}

.imo {
  display: block;
  opacity: 1 !important;
}
</style>
