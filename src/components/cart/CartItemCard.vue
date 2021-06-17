<template>
  <tr>
    <td class="product-thumbnail" data-label="Product">
      <div class="position-relative">
        <a
          href="https://porto-demo.myshopify.com/collections/all/products/men-black-gentle-belt?variant=33199524708429"
        >
          <img
            class="cart__image lazypreload lazyloaded"
            data-src="images/products/1.jpg"
            alt="Men Black Gentle Belt - Small / Blue"
            src="images/products/1.jpg"
          />
        </a>
        <a
          href="https://porto-demo.myshopify.com/cart/change?line=1&amp;quantity=0"
          class="remove remove-product position-absolute"
          ><i class="icon-cancel"></i
        ></a>
      </div>
    </td>
    <td class="product-name">
      <a
        href="https://porto-demo.myshopify.com/products/men-black-gentle-belt?variant=33199524708429"
      >
        <div class="lang1">Men Black Gentle Belt</div>
      </a>
      <div class="cart__meta-text">Size: Small<br />Color: Blue<br /></div>
    </td>
    <td class="product-price" data-label="Price">
      <span class="cart-price">
        <span class="money" data-currency-usd="$99.00">$99.00</span>
      </span>
    </td>
    <td class="product-quantity" data-label="Quantity">
      <input-box> </input-box>
    </td>
    <td class="product-subtotal text-center text-md-right" data-label="Subtotal">
      <span class="shopify-Price-amount amount">$99.00</span>
    </td>
  </tr>
</template>

<script>
import InputBox from "@/components/ui/InputBox.vue";
export default {
  components: {
    InputBox,
  },
};
</script>

<style></style>
