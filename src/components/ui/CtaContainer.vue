<template>
  <div class="vc_column_container col-md-4">
    <div class="wpb_wrapper vc_column-inner">
      <div class="porto-sicon-box px-2 style_1 top-icon">
        <div class="porto-sicon-top">
          <div
            class="porto-just-icon-wrapper"
            style="text-align: center; margin-bottom: 15px"
          >
            <div
              class="porto-icon advanced"
              style="
                color: #0188cc;
                background: #ffffff;
                border-style: solid;
                border-color: #0188cc;
                border-width: 2px;
                width: 84px;
                height: 84px;
                line-height: 84px;
                border-radius: 500px;
                font-size: 35px;
                display: inline-block;
              "
            >
              <i :class="iconClass"></i>
            </div>
          </div>
        </div>
        <div class="porto-sicon-header">
          <h3
            class="porto-sicon-title"
            style="font-weight: 700; font-size: 1rem; line-height: 1.2"
          >
            {{ title }}
          </h3>
          <p style="line-height: 1.4; color: #555555; margin-bottom: 0">
            {{ sub_title }}
          </p>
        </div>
        <div class="porto-sicon-description" style="font-size: 0.8125rem">
          {{ description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    sub_title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
