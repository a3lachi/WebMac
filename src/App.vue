<script>
import WebMac from './pages/WebMac.vue';
import Start from './pages/Start.vue';
import { mapGetters } from 'vuex'


export default {
  computed: {
    ...mapGetters(['getStart']),
    start() {
      return this.getStart
    }
  },
  components:{
    WebMac,
    Start,
  },
}

</script>

<template>
    
    <WebMac  />
    <!-- <Start v-if="start" /> --> 
    <!-- change diplay to none in WebMac.vue -->

</template>

<style>

</style>
