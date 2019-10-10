<template>
    <div class="main-container">
    <section>
      <div class="container">
        <div class="row justify-content-between text-center">
          <div class="col-md-12">
              <img
                      class="logohome"
                      alt="logo"
                      src="https://res.cloudinary.com/chartwell-consulting/image/upload/v1566047004/websiteAssets/logo_huhwki.png"
                    />
           <nuxt-link to="/home/en-gb">English</nuxt-link> | 
           <nuxt-link to="/home/de-de">Deutch</nuxt-link>
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
  components: {

  },
  data: function() {
    return {
  
    };
  },
  created() {
    const lang = Cookies.get("language");
    if(lang){
      this.$router.push({ path: `home/${lang}` })
    }else{
      this.$router.push({ path: `home/en-gb` })
    }
    
    if (process.browser) {
      let sc1 = document.createElement("script");
      sc1.setAttribute("src", "/js/scripts.js");
      document.body.appendChild(sc1);
    }
  },
  methods: {

  }
  
};
</script>
<style scoped>
.logohome{
    text-align: center;
    width: 150px;
    display: block;
    margin: 20px auto;
}
</style>