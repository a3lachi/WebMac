<script>
import HomeView from './views/HomeView.vue' 
import IconView from './views/IconView.vue'
import WindowView from './views/WindowView.vue';
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
      Resumer:WinInfo(false,40),
    }
  },
  methods:{
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
    <IconView :data="[About ,Resumer]" />
    <WindowView :data="[About ,Resumer]" />
    
  </div>

</template>

<style>
div {
  max-height: 100%;
}

</style>
