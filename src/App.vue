<script>
import WebMac from './pages/WebMac.vue';
import Start from './pages/Start.vue';

export default {
  data() {
    return {
      showComponentOne: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showComponentOne = false
      const WebMacView = document.getElementById('webmak')
      WebMacView.style.display = 'block'
    }, 2000)
  },
  components:{
    WebMac,
    Start,
  },
}

</script>

<template>


    
    
    
    <WebMac  />
    <Start v-if="showComponentOne"  />


</template>

<style>

</style>
