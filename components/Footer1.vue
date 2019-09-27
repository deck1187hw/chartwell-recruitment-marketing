<template>
    <footer class="footer-3 text-center-xs space--xxs">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-right text-center-xs">
              <span class="type--fine-print">
                ©
                <span class="update-year"></span> Chartwell Consulting.
              </span>
               <nuxt-link  class="type--fine-print" :to="`/terms/${$store.state.language}`">
              Terms and conditions</nuxt-link>
            </div>
          </div>
        </div>
      </footer>
</template>