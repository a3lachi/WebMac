<script>

import { mapGetters } from 'vuex'
import Window from '../components/Window.vue';

const WinInfo = (show,left,top,w,h) => {
  return (
    {
      show:show,
      left:left,
      top:top,
      width:w,
      height:h,
    }
  )
}
export default {
  data(){
    return{
      About:WinInfo(true,25,30,500,300),
      Resumer:WinInfo(false,40),
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
    <Window text="About"     v-bind:left="this.About.left"      v-bind:top="this.About.top"       v-bind:show="this.About.show"   v-bind:width="this.About.width"  v-bind:height="this.About.height"     />
    

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
