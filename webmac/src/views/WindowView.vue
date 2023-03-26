<script>

import { mapGetters } from 'vuex'
import Window from '../components/Window.vue';

export default {
  data(){
    return{
      show:{
        About: true,
        Resume: true,
      },
      left:{
        About: 30,
      },
      top:{
        About:20,
      }
    }
  },
  computed: {
    ...mapGetters(['getTabs']),
    tabs() {
      return this.getTabs
    }
  },
  components:{
        Window
    },
}
</script>

<template>
  <div class="windows">
    <div class="fakerwin"></div>
    <Window text="About"     v-bind:left="this.left['About']"      v-bind:top="this.top['About']"       v-bind:show="this.show['About']"        />
    

  </div>
</template>


<style>

.windows{
  position : absolute;
  width: 100vw;
  height: 100vh;
  top:22px;
  left:0;
}

/* .fakerwin{
  position : absolute;
  width: 100vw;
  height: 1px;
  top:0px;

} */

.qq{
  color:white;
}

</style>
