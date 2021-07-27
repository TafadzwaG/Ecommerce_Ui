<template>
  <div class="narrow-item sidebar-toogle d-block" hidden="">
    <dt class="block-title">
      <h3>
        <span class="lang1">Price</span>
      </h3>

      <span class="collapse">
        <i class="icon-down-dir"></i>
        <i class="icon-up-dir"></i>
      </span>
    </dt>
    <dd class="sidebar-content layer-filter price color-swatch">
      <ol class="swatch-list fields">
        <li>
          <div class="item swatch-checkbox" v-for="(price, index) in prices" :key="index">
            <div class="input-container">
              <input
                type="checkbox"
                class="checkbox smart_input"
                :value="index"
                :id="'price' + index"
                v-model="selected.prices"
              />
            </div>
            <span class="name"
              >{{ price.name }}
              <span class="count-price">({{ price.products_count }})</span>
            </span>
          </div>
        </li>
      </ol>
    </dd>
  </div>
</template>

<script>
import PriceInput from "@/components/ui/PriceInput.vue";
import axios from "axios";
import global from "@/mixins/global.js";
export default {
  mixins: [global],
  components: {
    PriceInput,
  },

  data: () => {
    return {
      prices: [],

      selected: {
        prices: [],
      },
    };
  },

  watch: {
    selected: {
      handler: function () {
        this.getPrices();
        this.getFilteredProducts();
      },
      deep: true,
    },
  },
  methods: {
    getFilteredProducts() {
      axios
        .get(this.base_url + "products_filter", {
          params: this.selected,
        })
        .then((response) => {
          console.log(response.data.data);

          this.$emit("filtered-items", response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPrices() {
      axios
        .get(this.base_url + "prices", {
          params: (this.selected, "prices"),
        })
        .then((response) => {
          this.prices = response.data;
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    // axiosParams() {
    //   const params = new URLSearchParams();
    //   params.append("prices", this.$route.params.id);
    //   params.append("categories", this.$route.params.id);
    //   return params;
    // },
  },
  mounted() {
    this.getPrices();
  },
};
</script>

<style scoped>
div.narrow-item.sidebar-toogle.d-block {
  box-sizing: border-box;
  display: block !important;
  margin: 0px;
  padding: 20px;
  border-bottom: 1px solid rgb(231, 231, 231);
}
.count-price {
}

h3 {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: inherit;
  line-height: inherit;
  color: rgb(34, 37, 41);
  font-size: 15px;
  margin: 0px;
  padding: 0px;
}
dd.sidebar-content.layer-filter.price.color-swatch {
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  margin-left: 0px;
  margin: 0px;
  padding: 0.6631em 0px;
  overflow: hidden;
  padding-bottom: 0px;
  color: rgb(68, 68, 68);
}

.input-container {
  margin-top: 10px !important;
}
.swatch-checkbox {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  display: flex !important;
  align-items: center;

  cursor: pointer;
  border-color: rgb(0, 136, 204);
}
span.name {
  box-sizing: border-box;
  margin: 0px;
  padding-left: 7px;
  font-family: "Poppins";

  line-height: 32px;
  vertical-align: middle !important;
}
input.checkbox.smart_input {
  box-sizing: border-box;
  margin: 0px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.6;
  overflow: visible;
  padding: 0px;

  width: 18px;
  height: 18px;
  opacity: 1;
  z-index: 99;
  cursor: pointer;
}
</style>
