<template>
  <li class="level0 level-top parent static-dropdown">
    <router-link :to="to" class="level-top">
      <i :class="iconClass"></i>

      <span>
        <span>
          <slot name="link"></slot>
        </span>
      </span>
    </router-link>

    <slot name="drop-down"></slot>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "/",
    },
    iconClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
