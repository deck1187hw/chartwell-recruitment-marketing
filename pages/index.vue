<template>
    <div class="main-container">
        <section>
            <div class="container">
                <div class="row justify-content-between text-center">
                    <div class="col-md-12">
                        <a href="https://chartwell.netlify.com/">
                            <img
                                class="logohome"
                                alt="logo"
                                src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1709552773/websiteAssets/f1zmhaewialxiw6wznqr.png"
                            />
                        </a>
                        <nuxt-link to="/home/en-gb">English</nuxt-link> |
                        <nuxt-link to="/home/de-de">Deutsch</nuxt-link>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Cookies from "js-cookie";
import cookie from "cookie";
export default {
    components: {},
    data: function () {
        return {};
    },
    created() {
        const lang = Cookies.get("language");
        if (lang) {
            this.$router.push({ path: `home/${lang}` });
        } else {
            this.$router.push({ path: `home/en-gb` });
        }

        if (process.browser) {
            let sc1 = document.createElement("script");
            sc1.setAttribute("src", "/js/scripts.js");
            document.body.appendChild(sc1);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            //TODO Remove this! quick fix for CDN issues on redirects
            if (
                window.location.host === "chartwell-applications.netlify.com" &&
                window.location.pathname === "/"
            ) {
                window.location.replace("https://chartwell.netlify.com/");
            }
        });
    },
    methods: {},
};
</script>
<style scoped>
.logohome {
    text-align: center;
    width: 150px;
    display: block;
    margin: 20px auto;
}
</style>
