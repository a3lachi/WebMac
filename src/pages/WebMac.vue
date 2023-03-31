<script>
import HomeView from '../views/HomeView.vue' 
import IconView from '../views/IconView.vue'
import WindowView from '../views/WindowView.vue';

import { mapGetters } from 'vuex'


const WinInfo = (win,show,left,top,w,h) => {
  return (
    {
      win:win,
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
      About:WinInfo("About",true,25,30,500,300),
      Resumer:WinInfo("Resume",false,25,30,500,300)
    }
  },
  methods:{
  },
  computed: {
    ...mapGetters(['getWins']),
    item() {
      return this.getWins
    }
  },

  components:{
    HomeView,
    WindowView,
    IconView,
  },
}


</script>

<template>
  <div class="container col">
    <HomeView />
    <IconView :data="item" />
    <WindowView :data="item"  />
    
  </div>


</template>



<style>

div {
  max-height: 100%;
  transition: none;
  transition-property: none; 
}


</style>