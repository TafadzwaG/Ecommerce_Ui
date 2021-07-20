<template>
  <div class="blog-container">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 main-content main-blog">
          <div class="blog-wrapper">
            <div class="post-wrapper">
              <div class="post-banner">
                <h1>IMAGE CONATANER</h1>
              </div>
              <div class="post-date">
                <span class="day">01</span>
                <span class="month">Dec</span>
              </div>
              <div class="postTitle">
                <a href="news/post-format-video.html">
                  <h2 class="lang1">Post Format – Video</h2>
                </a>
              </div>
              <div class="postContent">
                <p>
                  <span class="lang1"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
                    placerat mi. Etiam non tellus sem. Aenea&nbsp;pretium convallis lorem,
                    sit amet dapibus ante mollis a. Integer bibendum interdum sem, eget
                    volutpat purus pulvinar in. Sed tristique augue vitae sagittis porta.
                    Phasellus ullamcorper, dolor suscipit mattis viverra, sapien elit
                    condimentum odio,...</span
                  >
                </p>
              </div>

              <div class="postDetails pl-0">
                <span
                  class="blog_author"
                  data-translate="blogs.article.author_on_date_html|date:<time datetime='2016-12-01'>December 01, 2016</time>,author:Tong Duc Thach"
                  translate-item="blog-date-author"
                >
                  <i class="icon-calendar"></i>
                  <time datetime="2016-12-01">December 01, 2016</time>
                </span>
                <span
                  class="blog_author"
                  data-translate="blogs.article.by_admin|author:Tong Duc Thach"
                  translate-item="blog-date-author"
                >
                  <i class="icon-user"></i>
                  By Tong Duc Thach
                </span>
                <a
                  class="readmore"
                  href="news/post-format-video.html"
                  data-translate="blogs.article.read_more"
                  >Read more<i class="icon-right-dir"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 sidebar-right col-right">
          <div id="shopify-section-sidebar-right-blog" class="shopify-section">
            <div class="mobile-canvas-overlay close-right"></div>
            <div
              class="block-main-canvas canvas-right"
              style="border-bottom: 1.11111px solid rgb(225, 225, 225)"
            >
              <div class="canvas-icon sicon-right d-block d-lg-none">
                <a href="javascript:void(0)"><i class="fa fa-sliders"></i></a>
              </div>
              <div class="canvas-inner">
                <div class="block">
                  <div class="block-title">
                    <h3 class="mt-0" data-translate="blogs.sidebar.recent_articles">
                      Recent Posts
                    </h3>
                  </div>
                  <div class="block-content blogs-items">
                    <ul>
                      <li>
                        <div class="post-image" style="background-image: url()"></div>
                        <a href="news/post-format-video.html"
                          ><span class="lang1">Post Format – Video</span>
                        </a>
                        <div class="post-time">
                          <span
                            class="blog_author"
                            data-translate="blogs.article.author_on_date_html|date:<time datetime='2016-12-01'>December 01, 2016</time>"
                            translate-item="blog-date-author"
                          >
                            <time datetime="2016-12-01">December 01, 2016</time>
                          </span>
                          <div class="clear"></div>
                        </div>
                      </li>
                      <li>
                        <div class="post-image" style="background-image: url()"></div>
                        <a href="news/post-format-image-gallery.html"
                          ><span class="lang1">Post Format – Image Gallery</span>
                          <span class="lang2">Post Format – Image Gallery</span></a
                        >
                        <div class="post-time">
                          <span
                            class="blog_author"
                            data-translate="blogs.article.author_on_date_html|date:<time datetime='2016-12-01'>December 01, 2016</time>"
                            translate-item="blog-date-author"
                          >
                            <time datetime="2016-12-01">December 01, 2016</time>
                          </span>
                          <div class="clear"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="block">
                  <div class="block-title">
                    <h3 data-translate="blogs.sidebar.tags">Tag Cloud</h3>
                  </div>
                  <div class="block-content">
                    <ul class="no-bullets blog-tags clearfix">
                      <li>
                        <a href="#" title="Show articles tagged Blog">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
