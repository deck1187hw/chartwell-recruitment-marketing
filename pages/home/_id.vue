<template>
    <div>
        <div class="nav-container">
            <div>
                <nav id="menu2" class="bar bar-2">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-xs-4 col text-center-xs text-left-md"
                            >
                                <div class="bar__module">
                                    <a href="https://chartwell.netlify.com/">
                                        <img
                                            class="logo logo-dark"
                                            alt="logo"
                                            src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1709552773/websiteAssets/f1zmhaewialxiw6wznqr.png"
                                        />
                                        <img
                                            class="logo logo-light"
                                            alt="logo"
                                            src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1709552773/websiteAssets/f1zmhaewialxiw6wznqr.png"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div
                                class="col-xs-8 col text-right text-right-xs text-right-sm hidden-xs"
                            >
                                <div class="bar__module">
                                    <a
                                        class="btn btn--sm type--uppercase btn--primary"
                                        :href="appUrl"
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
                                        :class="{
                                            active:
                                                $store.state.language ===
                                                'en-gb',
                                        }"
                                        >{{
                                            document.language_english
                                        }}</nuxt-link
                                    >
                                </li>
                                <li>
                                    <nuxt-link
                                        to="/home/de-de"
                                        :class="{
                                            active:
                                                $store.state.language ===
                                                'de-de',
                                        }"
                                        >{{
                                            document.language_deutsch
                                        }}</nuxt-link
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row justify-content-between align-items-center">
                        <div class="col-md-8 col-sm-12">
                            <div class="switchable__text">
                                <h1
                                    class="sec1_title"
                                    v-html="
                                        Dom.RichText.asText(
                                            document.section_1_title,
                                        )
                                    "
                                ></h1>
                                <div class="lead">
                                    <span
                                        v-html="
                                            Dom.RichText.asHtml(
                                                document.section_1_text,
                                            )
                                        "
                                    ></span>
                                </div>
                                <a
                                    class="btn btn--primary type--uppercase"
                                    :href="appUrl"
                                >
                                    {{ document.start_application_text }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg--secondary space--xxs">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-5">
                            <div
                                v-html="
                                    Dom.RichText.asHtml(document.text_section_2)
                                "
                            ></div>
                        </div>
                        <div class="col-md-7">
                            <div
                                class="boxed text-center boxed--lg boxed--border bg--secondary"
                            >
                                <div
                                    class="slider"
                                    data-arrows="true"
                                    data-paging="true"
                                    data-timing="5000"
                                >
                                    <ul
                                        class="slides border--round box-shadow-wide"
                                    >
                                        <li
                                            v-for="(
                                                item, index
                                            ) in document.images_section_2"
                                            :key="index"
                                        >
                                            <img
                                                alt="Case study"
                                                :src="item.img.url"
                                                class=""
                                            />
                                        </li>
                                    </ul>
                                </div>

                                <br />
                                <a
                                    class="btn type--uppercase"
                                    :href="document.case_study_pdf_link_2.url"
                                    target="_blank"
                                >
                                    <span class="btn__text">{{
                                        document.view_case_study_text
                                    }}</span>
                                </a>

                                <div
                                    v-html="
                                        Dom.RichText.asHtml(
                                            document.text_below_images,
                                        )
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="feature-large parallax space--xxs cover"
                data-overlay="7"
            >
                <div class="background-image-holder">
                    <img
                        alt="background"
                        :src="document.background_image.url"
                    />
                </div>
                <div class="container">
                    <div
                        class="row justify-content-between text-center boxed boxed--lg boxed--border bg--secondary"
                    >
                        <div
                            class="col-md-6"
                            v-for="(item, index) in document.image_1_group"
                            :key="index"
                        >
                            <div class="boxed boxed--sm box-shadow-wide">
                                <img
                                    v-if="item.img.url"
                                    class="box-shadow-wis"
                                    :src="item.img.url"
                                />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="boxed boxed--sm">
                                <div
                                    v-html="
                                        Dom.RichText.asHtml(
                                            document.section_3_text,
                                        )
                                    "
                                ></div>
                            </div>
                            <div class="boxed boxed--sm">
                                <a
                                    class="btn type--uppercase"
                                    :href="document.case_study_pdf_link.url"
                                    target="_blank"
                                >
                                    <span class="btn__text">{{
                                        document.view_case_study_text
                                    }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="feature-large switchable space--xs">
                <div class="container">
                    <div
                        class="row justify-content-between text-center-xs text-left-md"
                    >
                        <div class="col-lg-6 col-md-6">
                            <img
                                v-if="document.section_4_image.url"
                                alt="How do you fit into this?"
                                class="border--round box-shadow-wide"
                                :src="document.section_4_image.url"
                            />
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div
                                v-html="
                                    Dom.RichText.asHtml(document.section_4_text)
                                "
                            ></div>
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
                                    <div
                                        class="slider"
                                        data-arrows="true"
                                        data-paging="false"
                                        data-timing="5000"
                                    >
                                        <ul class="slides">
                                            <li
                                                v-for="(
                                                    item, index
                                                ) in document.block_1_images"
                                                :key="index"
                                            >
                                                <img
                                                    :alt="
                                                        Dom.RichText.asText(
                                                            document.block_1_text,
                                                        )
                                                    "
                                                    :src="item.image_1.url"
                                                    class="border--round"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <h4>{{ document.block_1_title }}</h4>
                                <div
                                    v-html="
                                        Dom.RichText.asHtml(
                                            document.block_1_text,
                                        )
                                    "
                                ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature">
                                <div class="boxed boxed--sm img1cont">
                                    <div
                                        class="slider"
                                        data-arrows="true"
                                        data-paging="false"
                                        data-timing="5000"
                                    >
                                        <ul class="slides">
                                            <li
                                                v-for="(
                                                    item, index
                                                ) in document.block_2_images"
                                                :key="index"
                                            >
                                                <img
                                                    :alt="
                                                        Dom.RichText.asText(
                                                            document.block_2_text,
                                                        )
                                                    "
                                                    :src="item.image_2.url"
                                                    class="border--round"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>{{ document.block_2_title }}</h4>
                                <div
                                    v-html="
                                        Dom.RichText.asHtml(
                                            document.block_2_text,
                                        )
                                    "
                                ></div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="feature">
                                <div class="boxed boxed--sm img1cont">
                                    <div
                                        class="slider"
                                        data-arrows="true"
                                        data-paging="false"
                                        data-timing="5000"
                                    >
                                        <ul class="slides">
                                            <li
                                                v-for="(
                                                    item, index
                                                ) in document.block_3_images"
                                                :key="index"
                                            >
                                                <img
                                                    :alt="
                                                        Dom.RichText.asText(
                                                            document.block_3_text,
                                                        )
                                                    "
                                                    :src="item.image_3.url"
                                                    class="border--round"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h4>{{ document.block_3_title }}</h4>
                                <div
                                    v-html="
                                        Dom.RichText.asText(
                                            document.block_3_text,
                                        )
                                    "
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="text-center imagebg xl cloudi1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6">
                            <div class="BoxBorder">
                                <div class="BoxBorder-content">
                                    <div class="cta">
                                        <div
                                            v-html="
                                                Dom.RichText.asHtml(
                                                    document.start_application_text1,
                                                )
                                            "
                                        ></div>
                                        <a
                                            class="btn btn--secondary type--uppercase"
                                            :href="appUrl"
                                            target="_self"
                                        >
                                            <span>{{
                                                document.start_application_text
                                            }}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="text-center imagebg xl" data-overlay="7">
                <div class="background-image-holder">
                    <b-img :src="documentContact.top_image.url"></b-img>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-6">
                            <div
                                class=""
                                v-html="
                                    Dom.RichText.asHtml(document.title_sec7_1)
                                "
                            ></div>
                            <div class="cta">
                                <a
                                    target="_blank"
                                    class="btn btn--primary btn--lg type--uppercase"
                                    :href="`${document.link_faq.url}`"
                                >
                                    <span
                                        class="btn__text"
                                        v-html="document.button_text_sec_faq"
                                    ></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer1
                v-bind:translations="{ terms: document.terms_conditions }"
            />
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
        Footer1,
    },
    watchQuery: ["page"],
    data: function () {
        return {
            document: null,
            documentId: null,
            documentContact: null,
            Dom: PrismicDOM,
        };
    },
    methods: {
        changeLang(lang) {
            this.$store.dispatch("changeLang", lang);
            location.reload();
        },
    },
    computed: {
        appUrl() {
            return `${this.document.link_start_application.url}?lang=${this.$store.state.language}`;
        },
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
            const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {
                req,
            });

            let document,
                document_contact = {};
            const result = await api.getSingle("homepage", { lang: l });
            const result_contact = await api.getSingle("contact", { lang: l });
            document = result.data;
            document_contact = result_contact.data;

            if (process.client) window.prismic.setupEditButton();

            return {
                document,
                documentContact: document_contact,
                language: l,
                documentId: result.id,
            };
        } catch (e) {
            error({ statusCode: 404, message: "Page not found" });
        }
    },
};
</script>

<style scoped>
h1.sec1_title {
    font-weight: 600;
}
img {
    border: 0;
}
.cloudi1 {
    background: url("https://res.cloudinary.com/chartwell-consulting/image/upload/v1709623410/websiteAssets/cv5bao7apzsbnqpkct61.webp");
}
.flickity-viewport {
    height: 120px !important;
}
.linklang .active {
    text-decoration: underline;
}

.BoxBorder {
    position: relative;
    padding: 1rem;
}

.BoxBorder::before,
.BoxBorder::after,
.BoxBorder .BoxBorder-content::before,
.BoxBorder .BoxBorder-content::after {
    position: absolute;
    display: block;
    width: 25px;
    height: 25px;
    content: "";
}

.BoxBorder::before {
    top: -2px;
    left: -2px;
    border-top: 4px solid #172621;
    border-left: 4px solid #172621;
}

.BoxBorder::after {
    top: -2px;
    right: -2px;
    border-top: 4px solid #172621;
    border-right: 4px solid #172621;
}

.BoxBorder-content::before {
    bottom: -2px;
    left: -2px;
    border-bottom: 4px solid #172621;
    border-left: 4px solid #172621;
}

.BoxBorder-content::after {
    right: -2px;
    bottom: -2px;
    border-right: 4px solid #172621;
    border-bottom: 4px solid #172621;
}

.BoxBorder-content--centered {
    text-align: center;
}

@media (min-width: 48em) {
    .BoxBorder {
        padding: 2rem;
    }
}
.img1cont {
    height: 270px;
}
ul {
    padding-left: 0px;
}
</style>
