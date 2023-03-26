<script>

import { mapGetters , mapActions } from 'vuex'

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
  props:{
    data: Array,
  },
  data(){
    return{
      KK:WinInfo(true,25,30,500,300),
      Resumer:WinInfo(false,40),
    }
  },
  methods:{
    close() {
      
    }
  },
  computed: {
    ...mapGetters(['getTabs' , 'getAbout']),
    tabs() {
      return this.getTabs
    },
    About() {
      return this.getAbout('About')
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
    <div class="qq">===>>{{ About }}</div>
    <Window text="About"     v-bind:left="this.KK.left"   :data="this.data[0]"   v-bind:top="KK.top"       v-bind:showWin="this.data[0].show"   v-bind:width="KK.width"  v-bind:height="KK.height"     />
    

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
