<template>
  <button type="submit" class="btn-button btn btn-primary" name="subscribe">
    Submit
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button.btn-button.btn.btn-primary {
  box-sizing: border-box;
  border-radius: 0px !important;
  margin: 0px;
  font-family: Poppins;
  font-size: 13px;
  line-height: 1.42857;
  overflow: visible;
  text-transform: uppercase;
  appearance: none;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.8em 2em;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  text-decoration: none;
  cursor: pointer;

  padding-top: 10px;
  padding-bottom: 10px;

  padding-left: 25px;
  padding-right: 30px;
  height: auto;
  width: auto;
  visibility: visible;
  letter-spacing: 0.01em;
}
button.btn-button.btn.btn-primary:hover {
  color: white;
  background-color: rgb(0, 136, 204);
  border-color: rgb(0, 136, 204);
}
</style>
