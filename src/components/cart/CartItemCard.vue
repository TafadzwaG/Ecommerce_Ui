<template>
  <tr>
    <td class="product-thumbnail" data-label="Product">
      <div class="position-relative">
        <mini-cart-image :image="cart_item.product.product_images[0].image">
        </mini-cart-image>
        <a class="remove remove-product position-absolute"
          ><i class="icon-cancel" @click.prevent="removeItemFromCart"></i
        ></a>
      </div>
    </td>
    <td class="product-name">
      <a
        href="https://porto-demo.myshopify.com/products/men-black-gentle-belt?variant=33199524708429"
      >
        <div class="lang1">
          {{ cart_item.quantity + " " + "x" + " " + cart_item.product.name }}
        </div>
      </a>
      <div class="cart__meta-text">Size: Small<br />Color: Blue<br /></div>
    </td>
    <td class="product-price" data-label="Price">
      <span class="cart-price">
        <span class="money" data-currency-usd="$99.00"
          >${{ cart_item.product.price }}</span
        >
      </span>
    </td>
    <td class="product-quantity" data-label="Quantity">
      <input-box :items_quantity="cart_item.quantity" :product_id="cart_item.product.id">
      </input-box>
    </td>
    <td class="product-subtotal text-center text-md-right" data-label="Subtotal">
      <span class="shopify-Price-amount amount"
        >${{ cart_item.quantity * cart_item.product.price }}</span
      >
    </td>
  </tr>
</template>

<script>
import InputBox from "@/components/ui/InputBox.vue";
import global from "@/mixins/global.js";
import MiniCartImage from "@/components/navigation/middle-bar-items/MiniCartImage.vue";
export default {
  mixins: [global],
  props: ["cart_item"],
  components: {
    InputBox,
    MiniCartImage,
  },

  data: () => {
    return {};
  },

  methods: {
    removeItemFromCart() {
      this.$store.dispatch("removeItemFromCart", this.cart_item.id);
      this.loadUser();
      setTimeout(() => {
        location.reload();
      }, 2000);
    },
  },
};
</script>

<style></style>
