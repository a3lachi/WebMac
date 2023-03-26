<script>

import TheBar from '../components/TheBar.vue';

export default {
  data() {
    return {
        toShow: false
    };
  },
  methods: {
    changeMessage(e) {
        this.toShow = e.clientY<20 ? true : false
    },
  },
  components: {
    TheBar
  }
};
</script>


<template>
    <div v-on:mouseover=changeMessage   class="container">
        <TheBar v-bind:show=toShow  v-bind:key=toShow />
        <img src="/bgrnd.png" />
        
    </div>
</template>



<style>

.container {
    height: 100vh;
    position: relative;
}

img {
    width:100vw;
    height: 100vh;
    margin-bottom:auto;
}


</style>