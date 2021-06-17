<template>
  <div class="col-md-12">
    <div class="history wow fadeInUp">
      <div class="thumb">
        <img
          width="150"
          height="150"
          src="images/r1.jpg"
          alt="office-1"
          class="history-image"
        />
      </div>
      <div class="featured-box">
        <div class="box-content theme-border-color">
          <h4><strong>2012</strong></h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc vehicula
            lacinia. Proin adipiscing porta tellus, Curabitur pellentesque neque eget diam
            posuere porta. Quisque ut nulla at nunc vehicula lacinia. Proin adipiscing
            porta tellus,
          </p>
        </div>
      </div>
      <!--.feature-box-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.thumb {
  box-sizing: border-box;
  margin: 0px 0px 30px;
  padding: 0px;
  //   background: url("history-thumb.png") 0px 0px no-repeat transparent;
  width: 227px;
  height: 160px;
  float: left;
}
img.history-image {
  box-sizing: border-box;
  vertical-align: middle;
  border-style: none;
  margin: 7px 8px;
  padding: 0px;
  max-width: 100%;
  border: 0px;
  outline: none;
  opacity: 1;
  width: 145px;
  height: 145px;
  border-radius: 50% !important;
}

.featured-box {
  box-sizing: border-box;
  margin: 20px auto;
  padding: 0px;
  border-right: 1px solid rgb(236, 236, 236);
  border-bottom: 1px solid rgb(223, 223, 223);
  border-left: 1px solid rgb(236, 236, 236);
  border-radius: 8px;
  background: linear-gradient(white 1%, rgb(249, 249, 249) 98%) 0px 0px repeat scroll
    transparent;
  text-align: left;
  margin-bottom: 35px;
  margin-left: 225px;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 41, 60);
}

.box-content {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0px;
  padding: 30px 20px 0px;
  border-radius: 8px;
  border-top: 4px solid rgb(59, 59, 59);
  border-color: rgb(0, 136, 204) !important;
  border-top: 4px solid rgb(59, 59, 59);
  border-color: rgb(0, 136, 204) !important;

  h4 {
    padding: 2rem;
  }
}
</style>
