<template>
  <div class="widget-sidebar widget-custom">
    <div>
      <div
        class="widget widget_newsletter text-center"
        style="background: #f4f4f4; margin-bottom: 24px"
      >
        <div class="box-content" style="padding: 30px 24px 16px 24px">
          <h4 class="widget-title">Subscribe Newsletter</h4>
          <div class="widget_wysija_cont">
            <p style="font-size: 13px">
              Get all the latest information on Events, Sales and Offers.
            </p>
            <div class="wysija-paragraph">
              <div class="newsletter-footer">
                <form>
                  <span class="new-text">
                    <input
                      id="fnc-email"
                      placeholder="Email Address"
                      type="email"
                      value=""
                      name="EMAIL"
                      class="input-group-field"
                      aria-label="Email Address"
                    />
                  </span>
                  <span class="new-button">
                    <news-button></news-button>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewsButton from "../Buttons/NewsButton.vue";
export default {
  components: {
    NewsButton,
  },
};
</script>

<style></style>
