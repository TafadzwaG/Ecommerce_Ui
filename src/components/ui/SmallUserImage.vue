<template>
  <a href="#" class="flickr-image" target="_blank" rel="noopener noreferrer">
    <img
      :src="image"
      title="f01"
      alt="f01"
      width="80"
      height="80"
      class="lazypreload lazyloaded"
    />
  </a>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
    },
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img.lazypreload.lazyloaded {
  box-sizing: border-box;
  vertical-align: middle;
  border-style: none;
  margin: 0px;
  padding: 0px;
  max-width: 100%;
  border: 0px;
  outline: none;
  opacity: 1;
}
.flickr-image {
  margin-bottom: 2rem;
}
</style>
