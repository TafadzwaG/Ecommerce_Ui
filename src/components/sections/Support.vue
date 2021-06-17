<template>
  <div class="porto-custom-block">
    <div class="lang1">
      <hr class="grdnt-sprt" />
      <div class="vc_row wpb_row row" style="padding: 38px 0 40px">
        <cta-container
          :iconClass="'Simple-Line-Icons-earphones-alt'"
          :title="'CUSTOMER SUPPORT'"
          :sub_title="' Need Assistence?'"
          :description="description"
        >
        </cta-container>

        <cta-container
          :iconClass="'Simple-Line-Icons-credit-card'"
          :title="'SECURED PAYMENT'"
          :sub_title="' Safe &amp; Fast'"
          :description="description"
        >
        </cta-container>
        <cta-container
          :iconClass="'Simple-Line-Icons-action-undo'"
          :title="'RETURNS'"
          :sub_title="'Easy &amp; Free'"
          :description="description"
        >
        </cta-container>
      </div>
    </div>
  </div>
</template>

<script>
import CtaContainer from "@/components/ui/CtaContainer.vue";
export default {
  components: {
    CtaContainer,
  },

  data: () => {
    return {
      description:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum magna, et dapib",
    };
  },
};
</script>

<style lang="scss" scoped>
.top-icon .porto-sicon-header {
  margin-bottom: 0.75rem;
}
.porto-sicon-box .porto-sicon-header p {
  font-family: Poppins;
}
</style>
