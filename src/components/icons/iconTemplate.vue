<template>
  <div class="icon-container">
    <i :class="iconClass"></i>
    <h3>{{ preText }}<br />{{ proText }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      required: true,
    },

    preText: {
      type: String,
      required: true,
    },

    proText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  box-sizing: border-box;
  margin: 0px;
  padding: 20px 0px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 65px;
  margin-bottom: 0px;
  border-bottom: 1px solid rgb(222, 229, 232);
  padding-top: 0px;
}
i {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  border: 0px;
  color: rgb(0, 136, 204);
  font-size: 40px;
}

h3 {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 20px;
  color: rgb(107, 122, 131);
  font-size: 14px;
  margin: 0px 0px 20px;
  padding: 0px;
  margin-left: 26px;
  letter-spacing: 0.005em;
}
</style>
