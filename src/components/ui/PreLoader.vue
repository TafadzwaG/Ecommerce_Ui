<template>
  <div class="page-loader" v-if="!isLoaded">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      isLoaded: false,
    };
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isLoaded = true;
      }
    };
  },
};
</script>
<style scoped lang="scss">
$colors: #8cc271, #69beeb, #f5aa39, #e9643b;

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  z-index: 999;
}
.page-loader-white {
  background-color: #333;
}
.cube {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;

  @for $i from 1 through length($colors) {
    &:nth-child(#{$i}) {
      background-color: nth($colors, $i);
    }
  }

  &:first-child {
    animation: left 1s infinite;
  }

  &:last-child {
    animation: right 1s infinite 0.5s;
  }
}

@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
