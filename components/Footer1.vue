<template>
  <footer class="footer-3 text-center-xs space--xxs">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 text-right text-center-xs">
          <span class="type--fine-print">
            ©
            <span class="update-year"></span> Chartwell Consulting.
          </span>
          <nuxt-link class="type--fine-print" :to="`/`"> 
           <span v-if="$store.state.language == 'de-de'">Zuhause</span>
            <span v-else>Home</span>
          </nuxt-link>

          <nuxt-link
            class="type--fine-print"
            :to="`/contact/${$store.state.language}`"
          >
            <span v-if="$store.state.language == 'de-de'">Kontakt</span>
            <span v-else>Contact</span>
          </nuxt-link>
          <nuxt-link
            class="type--fine-print"
            :to="`/terms/${$store.state.language}`"
          >
            {{ translations.terms }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {},
  props: ["translations"],
  created() {},
  mounted() {},
};
</script>