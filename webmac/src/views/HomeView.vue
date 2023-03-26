<script>

import Bar from '../components/Bar.vue';

export default {
  data() {
    return {
        toShow: false
    };
  },
  methods: {
    changeMessage(e) {
        this.toShow = e.clientY<18 ? true : false
    },
  },
  components: {
    Bar
  }
};
</script>


<template>
    <div v-on:mouseover=changeMessage   class="container">
        <Bar v-bind:show=toShow  v-bind:key=toShow />
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