<template>
  <div class="page-loader">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
$colors: rgb(107, 120, 136), #69beeb, #f5aa39, rgb(34, 37, 41);

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
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
