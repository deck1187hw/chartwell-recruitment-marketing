<template>
    <div>
        Redirecting you...
    </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  created() {
    const lang = Cookies.get("language");
    if(lang){
      this.$router.push({ path: `home/${lang}` })
    }else{
      this.$router.push({ path: `home/en-gb` })
    }
  }
  
};
</script>