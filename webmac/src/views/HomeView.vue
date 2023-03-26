<script>

import Bar from '../components/Bar.vue';

export default {
  data() {
    return {
        toShow: 'yes'
    };
  },
  methods: {
    changeMessage(e) {
        if (e.clientY<20) {
            this.toShow = 'yes';
        }
        else {
            this.toShow = 'no' ;
        }
    },
    callChangeMessage() {
      this.changeMessage();
      
    }
  },
  components: {
    Bar
  }
};

</script>





<template>
    <div v-on:mouseover=changeMessage   class="container">
        <img src="/bgrnd.png" />
        <Bar v-bind:show=toShow  v-bind:key=toShow />
    </div>
</template>






<style>

.container {
    position: relative;
}

img {
    width:100vw;
    height: 100vh;
    margin-bottom:0;
}


</style>
