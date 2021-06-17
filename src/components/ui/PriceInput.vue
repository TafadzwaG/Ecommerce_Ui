<template>
  <li>
    <div class="item swatch-checkbox">
      <div class="input-container">
        <input type="checkbox" class="checkbox smart_input" />
      </div>
      <span class="name">{{ name }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
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
