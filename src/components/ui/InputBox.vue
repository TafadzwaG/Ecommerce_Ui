<template>
  <div class="input-box">
    <div class="plus-minus">
      <div class="reduced items items1">
        <i class="icon-minus" @click="decreaseQuantity"></i>
      </div>
      <input type="text" min="1" v-model="quantity" class="quantity-selector" />
      <div class="increase items items2">
        <i class="icon-plus" @click.prevent="increaseQuantity"></i>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref, reactive } from "vue";
import global from "@/mixins/global.js";
import { mapMutations } from "vuex";
export default {
  mixins: [global],
  props: ["items_quantity", "product_id"],

  data: () => {
    return {
      quantity: 1,
    };
  },

  watch: {
    quantity: {
      handler: function (val, oldVal) {
        const newValue = val - oldVal;
        this.addToCart(newValue);

        // setTimeout(() => {
        //   location.reload();
        // }, 2000);
        this.loadUser();
      },

      deep: true,
    },
  },
  methods: {
    ...mapMutations(["setUser"]),

    addToCart(value) {
      this.$store.dispatch("addItemToCart", {
        product_id: this.product_id,
        quantity: value,
      });

      this.loadUser();

      this.setUser({
        token: localStorage.getItem("token"),
        user: localStorage.getItem("user"),
      });
    },

    decreaseQuantity() {
      if (this.quantity <= 1) {
        return;
      }
      return this.quantity--;
    },

    increaseQuantity() {
      return this.quantity++;
    },
  },
};
</script>

<style scoped lang="scss">
.input-box {
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -ms-flex-pack: center;
  justify-content: center;
  width: 102px;
  margin-right: 0.5rem;
  vertical-align: top;
  margin-bottom: 5px;
  input {
    max-width: 100px;
    border: 1px solid #e7e7e7;
    color: #222529;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    width: calc(100% - 68px);
    height: 3rem;
    margin: 0;
    font-family: "Poppins";
    line-height: 1.6;
  }
}
.plus-minus {
  display: flex;

  .items2 {
    border-right: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
  }
  .items1 {
    border-left: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
  }

  .items {
    width: calc(100% - 78px);

    i {
      position: relative;
      display: block;
      text-align: center;
      cursor: pointer;
      width: 100%;
      height: 100%;
      color: inherit;
      font-size: 10px;
      font-weight: 100 !important;
      line-height: 41px;
    }
  }
}
</style>
