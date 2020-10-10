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
              <div
                class="col-xs-8 col text-right text-right-xs text-right-sm hidden-xs"
              >
                <div class="bar__module">
                  <a
                    class="btn btn--sm type--uppercase btn--primary"
                    :href="document.link_start_application.url"
                  >
                    <span class="btn__text">{{
                      document.start_application_text
                    }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <div class="main-container">
      <section class="text-center imagebg space--xs" data-overlay="7">
        <div class="background-image-holder">
          <b-img :src="documentContact.top_image.url"></b-img>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8">
              <h1 v-html="Dom.RichText.asText(documentContact.title)"></h1>
            </div>
          </div>
        </div>
      </section>
      <section class="switchable text-center space--xs">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-12">
              <div
                v-html="Dom.RichText.asHtml(documentContact.description)"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 v-bind:translations="{ terms: document.terms_conditions }" />
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
    Footer1,
  },
  data: function () {
    return {
      document: null,
      documentId: null,
      documentContact: null,
      Dom: PrismicDOM,
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
    changeLang(lang) {},
  },
  async asyncData({ context, error, req, params, store }) {
    let l = "en-gb";
    if (params.id) {
      l = params.id;
      store.dispatch("changeLang", l);
    }
    try {
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, { req });

      let document,
        document_contact = {};
      const result = await api.getSingle("homepage", { lang: l });
      const result_contact = await api.getSingle("contact", { lang: l });
      document = result.data;
      document_contact = result_contact.data;

      // Load the edit button
      if (process.client) window.prismic.setupEditButton();

      return {
        document,
        documentContact: document_contact,
        documentId: result.id,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style scoped>
</style>
