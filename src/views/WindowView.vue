<script>
import Window from '../components/Window.vue';

export default {
  props:{
    data: Object,
  },
  methods:{
  },
  computed: {
  },
  components:{
        Window
    },
}
</script>

<template>
  <div id="windows">
    <div v-for="(item, index)  in data" :style = "{ zIndex:`${data.zindex}%` , width:'100%' , height:'100vh' , top:'0' , position:'absolute' }" :id="'win'+item.text" :key="index" class="yyy">
      <Window :data="item"  />
    </div>
  </div>
</template>


<style>

.windows{
  position : absolute;
  width: 100vw;
  height: 97.941vh;
  top:22px;
  left:0;
  transition: none;
  transition-property: none; 
}

.qq{
  color:white;
}

#yyy{
  min-height: auto;
}


</style>
