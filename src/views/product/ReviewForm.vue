<template>
  <div class="spr-container">
    <div class="spr-content">
      <div class="spr-form" id="form_4878315749453" style="display: block">
        <form id="new-review-form_4878315749453" class="new-review-form">
          <fieldset class="spr-form-contact">
            <div class="spr-form-contact-name">
              <label class="spr-form-label label-custom" for="review_author_4878315749453"
                >Name</label
              >
              <input
                class="spr-form-input spr-form-input-text"
                v-model="name"
                placeholder="Enter your name"
              />
            </div>
            <div class="spr-form-contact-email">
              <label class="spr-form-label label-custom" for="review_email_4878315749453"
                >Email</label
              >
              <input
                class="spr-form-input spr-form-input-email"
                type="email"
                v-model="email"
                placeholder="john.smith@example.com"
              />
            </div>
          </fieldset>

          <fieldset class="spr-form-review">
            <div class="spr-form-review-rating">
              <label class="spr-form-label label-custom rating-label" for="review[rating]"
                >Rating</label
              >
              <div class="star">
                <star-rating
                  :star-size="20"
                  @update:rating="setRating"
                  v-model="rating"
                  :show-rating="false"
                ></star-rating>
              </div>
            </div>
            <br />

            <div class="spr-form-review-title">
              <label class="spr-form-label label-custom" for="review_title_4878315749453"
                >Review Title</label
              >
              <input
                class="spr-form-input spr-form-input-text"
                type="text"
                v-model="review_title"
                placeholder="Give your review a title"
              />
            </div>

            <div class="spr-form-review-body">
              <label class="spr-form-label label-custom" for="review_body_4878315749453">
                Body of Review
                <span role="status" aria-live="polite" aria-atomic="true">
                  <span class="spr-form-review-body-charactersremaining">(1500)</span>
                  <span class="visuallyhidden">characters remaining</span>
                </span>
              </label>
              <div class="spr-form-input">
                <textarea
                  class="spr-form-input spr-form-input-textarea"
                  rows="10"
                  v-model="review"
                  placeholder="Write your comments here"
                ></textarea>
              </div>
            </div>
          </fieldset>

          <fieldset class="spr-form-actions">
            <button
              class="spr-button spr-button-primary button button-primary btn btn-primary"
              @click.prevent="submitReview"
            >
              Send Review
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
import axios from "axios";
import global from "@/mixins/global.js";
import StarRating from "vue-star-rating";
export default {
  mixins: [global],
  props: ["productId"],
  components: {
    ReviewCard,
    StarRating,
  },

  data: () => {
    return {
      loading: false,
      error: null,
      name: "",
      email: "",
      rating: null,
      review_title: "",
      review: "",
    };
  },
  methods: {
    setRating(rating) {
      this.rating = rating;
    },
    async getReviews() {
      try {
        const response = await axios.get(
          this.base_url + "reviews",
          this.requestAuthHeader()
        );
        this.reviews = response.data.data;

        console.log("reviews", response.data.data);
      } catch (ex) {
        this.error = ex;
        throw new Error(ex);
      } finally {
      }
    },
    async submitReview() {
      try {
        const resp = await axios.post(
          this.base_url + "reviews",
          {
            product_id: this.productId,
            name: this.name,
            email: this.email,
            star: this.rating,
            review_title: this.review_title,
            review: this.review,
          },
          this.requestAuthHeader()
        );
        console.log(resp.data);
      } catch (ex) {
        this.error = ex;
        throw new Error(ex);
      } finally {
        (this.loading = false),
          (this.error = null),
          (this.name = ""),
          (this.email = ""),
          (this.rating = null),
          (this.review_title = ""),
          (this.review = "");
        this.getReviews();
      }
    },
  },
  computed: {},
};
</script>

<style scoped>
.rating-label {
  padding-right: 10px !important;
}
.star {
  padding-top: 5px;
}
.label-custom {
  color: rgb(119, 119, 119) !important;
  font-size: 13px !important;
  line-height: 40px !important;
}
h3.spr-form-title {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 700;
  line-height: 24px;
  color: rgb(34, 37, 41);
  font-size: 16px;
  margin: 0px 0px 20px;
  padding: 0px;
}
label.spr-form-label {
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 10px;
  margin: 0px;
  padding: 0px;
  position: relative;
  float: left;
  color: rgb(119, 119, 119);
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  line-height: 20px;
}
input#review_author_4878315749453.spr-form-input.spr-form-input-text {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  overflow: visible;
  padding: 10px;
  width: 100%;
  height: 38px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  background: rgb(255, 255, 255);
  color: rgb(119, 119, 119);
  box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset;
  max-width: 100%;
}
a.spr-icon.spr-icon-star.spr-icon-star-empty.spr-icon-star-hover {
  box-sizing: border-box;
  color: rgb(153, 153, 153) !important;
  text-decoration: none;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
  opacity: 1 !important;
  font-size: 14px;
  position: relative;
  top: 1px;
  width: 1.3em;
  height: 1.3em;
  display: inline-block;
  float: left;
}
label.spr-form-label {
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 10px;
  margin: 0px;
  padding: 0px;
  position: relative;
  float: left;
  color: rgb(119, 119, 119);
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  line-height: 20px;
}
input#review_email_4878315749453.spr-form-input.spr-form-input-email {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  overflow: visible;
  padding: 10px;
  width: 100%;
  height: 38px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  background: rgb(255, 255, 255);
  color: rgb(119, 119, 119);
  box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset;
  max-width: 100%;
}
input#review_title_4878315749453.spr-form-input.spr-form-input-text {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.6;
  overflow: visible;
  padding: 10px;
  width: 100%;
  height: 38px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 6px;
  background: rgb(255, 255, 255);
  color: rgb(119, 119, 119);
  box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset;
  max-width: 100%;
}
textarea#review_body_4878315749453.spr-form-input.spr-form-input-textarea {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 13px;
  line-height: 1.4;
  overflow: auto;
  resize: vertical;
  padding: 10px;
  height: 10em;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 0px;
  background: rgb(255, 255, 255);
  color: rgb(119, 119, 119);
  width: 100%;
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0.09);
  max-height: 150px;
  max-width: 100%;
}
fieldset.spr-form-review {
  box-sizing: border-box;
  min-width: 0px;
  padding: 0px;
  margin: 0px;
  border: 0px;
}
button.spr-button.spr-button-primary.button.button-primary.btn.btn-primary {
  box-sizing: border-box;
  margin: 0px;
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.42857;
  overflow: visible;
  appearance: button;
  display: inline-block;
  font-weight: 400 !important;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 9px 15px;
  border-radius: 0px;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  text-decoration: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 136, 204);
  border-color: rgb(0, 136, 204);
  text-transform: uppercase;
  opacity: 0.9;
  letter-spacing: 0.01em;
  width: auto;
  min-height: 1em;
  float: right;
}
</style>
