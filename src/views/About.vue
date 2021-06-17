<template>
  <div>
    <breadcrumb :home="'Home'" :to="'/'" :current_route="'ABOUT US'"> </breadcrumb>
    <div class="page-container">
      <div class="lang1">
        <div class="container">
          <div class="about-us-classic">
            <div class="row">
              <div class="col-md-12">
                <h2 class="word-rotator-title">
                  The New Way to
                  <strong>
                    <span class="word-rotate active" style="height: 73px">
                      <span class="word-rotate-items" style="top: -146px; width: 186px">
                        <span>success. </span>
                      </span>
                    </span>
                  </strong>
                </h2>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10">
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum
                  pellentesque imperdiet. Nulla lacinia iaculis nulla non
                  <span class="alternative-font">metus.</span> pulvinar. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Ut eu risus enim, ut pulvinar lectus. Sed hendrerit nibh.
                </p>
              </div>
              <div class="col-md-2">
                <a class="btn btn-primary push-top" title="Join Our Team!" href="#"
                  >Join Our Team!</a
                >
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 height-clear">
                <hr class="tall" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-8">
                <h3 class="we-are-here"><strong>Who</strong> We Are</h3>
                <p class=" ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                  pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc
                  <a href="#">vehicula</a> lacinia. Proin adipiscing porta tellus, ut
                  feugiat nibh adipiscing sit amet. In eu justo a felis faucibus ornare
                  vel id metus. Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; In eu libero ligula. Fusce eget metus
                  lorem, ac viverra leo. Nullam convallis, arcu vel pelle ntesque sodales,
                  nisiest varius diam, ac ultrices sem ante quis sem. Proin ultricies
                  volutpat sapien, nec scelerisque ligula mollis lobortis. Curabitur
                  pellentesque neque eget diam posuere porta. Quisque ut nulla at nunc
                  vehicula lacinia. Proin adipiscing porta tellus, ut feugiat nibh
                  adipiscing <span class="alternative-font">metus</span> sit amet. In eu
                  justo a felis faucibus ornare vel id metus. Vestibulum ante ipsum primis
                  in faucibus orci luctus et ultrices posuere cubilia Curae; In eu libero
                  ligula. Fusce eget metus lorem, ac viverra leo. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu
                  libero ligula. Fusce eget metus lorem, ac viverra leo. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                  In eu libero ligula.
                </p>
              </div>

              <div class="col-md-4">
                <div class="featured-box">
                  <div class="box-content clearboth">
                    <h4 class="behind-scenes-h4">Behind the scenes</h4>
                    <div class="block block-flickr-photos">
                      <div class="block-content theme-border-color behind-images">
                        <small-user-image
                          v-for="(image, index) in images"
                          :key="index"
                          :image="image"
                        >
                        </small-user-image>
                        <small-user-image
                          v-for="(image, index) in images"
                          :key="index"
                          :image="image"
                        >
                        </small-user-image>
                      </div>
                    </div>
                  </div>
                </div>
                <!--.featured-box-->
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <hr class="tall" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 height-clear">
                <h3 class="push-top">Our <strong>History</strong></h3>
              </div>
            </div>
            <div class="row">
              <history> </history>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import History from "@/components/ui/History.vue";
import SmallUserImage from "@/components/ui/SmallUserImage.vue";
import Breadcrumb from "@/components/navigation/BreadCrumbs.vue";
export default {
  components: {
    History,
    SmallUserImage,
    Breadcrumb,
  },
  data: () => {
    return {
      images: ["images/r1.jpg", "images/r2.jpg", "images/r3.jpg"],
    };
  },
};
</script>
<style lang="scss" scoped>
h3.push-top {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 33px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
  color: rgb(59, 59, 59);
  font-size: 23.8px;

  margin: 0px 0px 20px;
  padding: 0px;
  text-transform: uppercase;
  letter-spacing: normal;
}
.box-content {
  box-sizing: border-box;
  margin: 0px;
  padding: 30px 20px 0px;
  border-radius: 8px;
  border-top: 4px solid rgb(59, 59, 59);
  text-align: center;
}

.behind-scenes-h4 {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 400;
  line-height: 1.35;
  color: rgb(34, 37, 41);
  font-size: 18.2px;
  margin: 0px 0px 14px;
  padding: 0px;
  letter-spacing: -0.7px;
  text-transform: uppercase;
}
.behind-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.we-are-here {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 33px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 24px;
  color: rgb(59, 59, 59);
  font-size: 23.8px;
  margin: 0px 0px 20px;
  padding: 0px;
  text-transform: uppercase;
  letter-spacing: normal;
}
.word-rotator-title {
  box-sizing: border-box;
  margin-top: 0px;
  margin-bottom: 0.5rem;
  font-family: Poppins;
  font-weight: 300;
  line-height: 4.6rem;
  color: rgb(49, 49, 49);
  font-size: 48px;
  margin: 0px 0px 20px;
  padding: 0px;
  letter-spacing: normal;
}
.height-clear {
  height: 3rem;
}
a.btn.btn-primary.push-top {
  box-sizing: border-box;
  display: inline-block;
  font-weight: 700;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 22.4px;
  line-height: 1.42857;
  border-radius: 4px;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s,
    border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  cursor: pointer;
  margin: 0px;
  background: #3d3d3d;
  font-family: Poppins;
  text-transform: uppercase;
  margin-top: 20px;
  letter-spacing: 0.01em;
}
a.btn.btn-primary.push-top:hover {
  color: rgb(255, 255, 255);
  text-decoration: none;
  background-color: rgb(0, 153, 230);
  border-color: rgb(0, 153, 230);
}
</style>
