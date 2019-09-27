<template>
<div>

     <div class="nav-container">
      <div>
        <nav id="menu2" class="bar bar-2">
          <div class="container">
            <div class="row">
              <div class="col-xs-4 col text-center-xs text-left-md">
                <div class="bar__module">
                  <nuxt-link to="/">
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
                  <a class="btn btn--sm type--uppercase btn--primary" :href="document.link_start_application.url">
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
    <section class="switchable">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-12">
            <div v-html="Dom.RichText.asHtml(document.terms_and_conditions)"></div>
          </div>
        </div>
      </div>
    </section>
     <Footer1 />
  </div>
    </div>
</template>
<script>
import Prismic from "prismic-javascript";
import PrismicConfig from "~/prismic.config.js";
import PrismicDOM from "prismic-dom";
import Footer1 from "~/components/Footer1.vue";
export default {
  components: {
    Footer1
  },
  data: function() {
    return {
      document: null,
      documentId: null,
      Dom: PrismicDOM      
    };
  },
  created() {
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  methods: {
    changeLang(lang){


    }
  },
  async asyncData({ context, error, req , store}) {

    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document = {};
      const result = await api.getSingle("homepage", { lang : store.state.language });
      document = result.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentId: result.id
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style scoped>
</style>
