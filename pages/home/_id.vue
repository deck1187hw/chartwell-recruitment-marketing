<template>
  <div>
    <div class="nav-container">
      <div>
        <nav id="menu2" class="bar bar-2">
          <div class="container">
            <div class="row">
              <div class="col-xs-4 col text-center-xs text-left-md">
                <div class="bar__module">
                  <nuxt-link :to="`/home/${$store.state.language}`">
                    <img
                      class="logo logo-dark"
                      alt="logo"
                      src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1566047004/websiteAssets/logo_huhwki.png"
                    />
                    <img
                      class="logo logo-light"
                      alt="logo"
                      src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1566047004/websiteAssets/logo_huhwki.png"
                    />
                  </nuxt-link>
                </div>
              </div>
              <div class="col-xs-8 col text-right text-right-xs text-right-sm hidden-xs">
                <div class="bar__module">
                  <a
                    class="btn btn--sm type--uppercase btn--primary"
                    :href="appUrl"
                  >
                    <span class="btn__text">{{document.start_application_text}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="main-container">
      <section
        id="section_1"
        class="cover height-80 imagebg switchable text-center parallax switchable--switch space--xxs"
        data-overlay="9"
      >
        <div class="background-image-holder">
          <b-img
            :src="document.section_1_image.url"
            :alt="Dom.RichText.asText(document.section_1_title)"
          ></b-img>
        </div>
        <div class="container pos-vertical-center">
          <div class="row text-right">
            <div class="col-lg-12">
              <ul class="menu-horizontal text-center linklang">
                <li>
                  <nuxt-link
                    to="/home/en-gb"
                    :class="{'active': $store.state.language === 'en-gb'}"
                  >English</nuxt-link>
                </li>
                <li>
                  <nuxt-link
                    to="/home/de-de"
                    :class="{'active': $store.state.language === 'de-de'}"
                  >Deutch</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5 col-md-7">
              <div class="switchable__text">
                <h1 class="sec1_title" v-html="Dom.RichText.asText(document.section_1_title)"></h1>
                <div class="lead">
                  <span v-html="Dom.RichText.asHtml(document.section_1_text)"></span>
                </div>
                <a
                  class="btn btn--primary type--uppercase"
                  :href="appUrl"
                >
                  <span class="btn__text">{{document.start_application_text}}</span>
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-12">
              <div class="video-cover border--round box-shadow-wide">
                <div class="background-image-holder">
                  <b-img
                    :src="document.image_video.url"
                    :alt="Dom.RichText.asText(document.section_1_title)"
                  ></b-img>
                </div>
                <div class="video-play-icon"></div>
                <iframe :data-src="document.section_1_video.url" allowfullscreen="allowfullscreen"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg--secondary space--xxs">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-5">
              <div v-html="Dom.RichText.asHtml(document.text_section_2)"></div>
            </div>
            <div class="col-md-7">
              <div class="boxed text-center boxed--lg boxed--border bg--secondary">
                <div class="slider" data-arrows="true" data-paging="true" data-timing="5000">
                  <ul class="slides">
                    <li v-for="(item, index) in document.images_section_2" :key="index">
                      <img alt="Case study" :src="item.img.url" />
                    </li>
                  </ul>
                </div>

                <br />
                <a
                  class="btn type--uppercase"
                  :href="document.case_study_pdf_link_2.url"
                  target="_blank"
                >
                  <span class="btn__text">{{document.view_case_study_text}}</span>
                </a>

                <div v-html="Dom.RichText.asHtml(document.text_below_images)"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-large parallax space--xxs cover" data-overlay="7">
        <div class="background-image-holder">
          <img alt="background" :src="document.background_image.url" />
        </div>
        <div class="container">
          <div
            class="row justify-content-between text-center boxed boxed--lg boxed--border bg--secondary"
          >
            <div class="col-md-6" v-for="(item, index) in document.image_1_group" :key="index">
              <div class="boxed boxed--sm">
                <img v-if="item.img.url" class="border--round box-shadow-wide" :src="item.img.url" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="boxed boxed--sm">
                <div v-html="Dom.RichText.asHtml(document.section_3_text)"></div>
              </div>
              <div class="boxed boxed--sm">
                <a
                  class="btn type--uppercase"
                  :href="document.case_study_pdf_link.url"
                  target="_blank"
                >
                  <span class="btn__text">{{document.view_case_study_text}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="feature-large switchable space--xs">
        <div class="container">
          <div class="row justify-content-between text-center-xs text-left-md">
            <div class="col-lg-6 col-md-6">
              <img
                v-if="document.section_4_image.url"
                alt="How do you fit into this?"
                class="border--round box-shadow-wide"
                :src="document.section_4_image.url"
              />
            </div>
            <div class="col-lg-5 col-md-6">
              <div v-html="Dom.RichText.asHtml(document.section_4_text)"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-center feature-large imagebg parallax space--xxs" data-overlay="7">
        <div class="background-image-holder">
          <img alt="background" :src="document.section_5_background.url" />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-10">
              <div class="boxed boxed--sm">
                <div v-html="Dom.RichText.asHtml(document.section_5_text)"></div>
                <br />
                <div class="video-cover border--round">
                  <div class="background-image-holder">
                    <img alt="Video" :src="document.image_video1.url" />
                  </div>
                  <div class="video-play-icon"></div>
                  <iframe
                    :data-src="document.section_5_video.url"
                    allowfullscreen="allowfullscreen"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="space--xs">
        <div class="container">
          <div class="row text-center-xs text-left-md">
            <div class="col-md-4">
              <div class="feature">
                <div class="boxed boxed--sm img1cont">
                  <div class="slider" data-arrows="true" data-paging="false" data-timing="5000">
                    <ul class="slides">
                      <li v-for="(item, index) in document.block_1_images" :key="index">
                        <img
                          :alt="Dom.RichText.asText(document.block_1_text)"
                          :src="item.image_1.url"
                           class="border--round"
                        />
                      </li>
                    </ul>
                  </div>
                </div>

                <h4>{{document.block_1_title}}</h4>
                <div v-html="Dom.RichText.asHtml(document.block_1_text)"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="boxed boxed--sm img1cont">
                  <div class="slider" data-arrows="true" data-paging="false" data-timing="5000">
                    <ul class="slides">
                      <li v-for="(item, index) in document.block_2_images" :key="index">
                        <img
                          :alt="Dom.RichText.asText(document.block_2_text)"
                          :src="item.image_2.url"
                          class="border--round"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <h4>{{document.block_2_title}}</h4>
                <div v-html="Dom.RichText.asHtml(document.block_2_text)"></div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="feature">
                <div class="boxed boxed--sm img1cont">
                  <div class="slider" data-arrows="true" data-paging="false" data-timing="5000">
                    <ul class="slides">
                      <li v-for="(item, index) in document.block_3_images" :key="index">
                        <img
                          :alt="Dom.RichText.asText(document.block_3_text)"
                          :src="item.image_3.url"
                           class="border--round"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
                <h4>{{document.block_3_title}}</h4>
                <div v-html="Dom.RichText.asText(document.block_3_text)"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        class="text-center imagebg space--xxs"
        data-gradient-bg="#1c8743,#19af4b,#50b849,#7ac464"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-lg-6">
              
<div class="BoxBorder">
                    <div class="BoxBorder-content">
                          <div class="cta">
                        <div v-html="Dom.RichText.asHtml(document.start_application_text1)"></div>
                        <a
                          class="btn btn--primary type--uppercase"
                          :href="appUrl"
                          target="_self"
                        >
                          <span>{{document.start_application_text}}</span>
                        </a>
                      </div>
                    </div>
                </div>


           
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Footer1 from "~/components/Footer1.vue";
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
import Cookies from "js-cookie";
import cookie from "cookie";

export default {
  components: {
    Logo,
    Footer1
  },
  watchQuery: ["page"],
  data: function() {
    return {
      document: null,
      documentId: null,
      Dom: PrismicDOM
    };
  },
  methods: {
    changeLang(lang) {
      this.$store.dispatch("changeLang", lang);
      location.reload();
    }
  },
  computed: {
    appUrl() {
      return `${this.document.link_start_application.url}?lang=${this.$store.state.language}`
    }
  },
  created() {
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  async asyncData({ context, params, error, app, req, store }) {
    let l = "en-gb";
    if (params.id) {
      l = params.id;
      store.dispatch("changeLang", l);
    }

    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("homepage", { lang: l });
      document = result.data;
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        language: l,
        documentId: result.id
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
h1.sec1_title {
  font-weight: 600;
}
.flickity-viewport {
  height: 120px !important;
}
.linklang .active {
  text-decoration: underline;
}

.BoxBorder {
    position: relative;
    padding: 1rem
}

.BoxBorder::before,
.BoxBorder::after,
.BoxBorder .BoxBorder-content::before,
.BoxBorder .BoxBorder-content::after {
    position: absolute;
    display: block;
    width: 25px;
    height: 25px;
    content: ''
}

.BoxBorder::before {
    top: -2px;
    left: -2px;
    border-top: 4px solid #017401;
    border-left: 4px solid #017401
}

.BoxBorder::after {
    top: -2px;
    right: -2px;
    border-top: 4px solid #017401;
    border-right: 4px solid #017401
}

.BoxBorder-content::before {
    bottom: -2px;
    left: -2px;
    border-bottom: 4px solid #017401;
    border-left: 4px solid #017401
}

.BoxBorder-content::after {
    right: -2px;
    bottom: -2px;
    border-right: 4px solid #017401;
    border-bottom: 4px solid #017401
}

.BoxBorder-content--centered {
    text-align: center
}

@media (min-width: 48em) {
    .BoxBorder {
        padding: 2rem
    }
}
.img1cont{
  height: 270px;
}
ul{
  padding-left: 0px;
}
</style>
