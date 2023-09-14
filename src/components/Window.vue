
<script>
import WindowBar from './WindowBar.vue'
import WindowDialog from './WindowDialog.vue';
import { mapActions } from 'vuex'

export default {
    props:{
        data: Object,
    },
    methods:{
    ...mapActions(['startDrag','dragOver', 'dragDrop','mainViewWindow','mouseDown','mouseMove','mouseUp']),
    eHandler() {
      this.width = data.width;
      this.height = data.height;
      this.left = data.left;
      this.top = data.top;
      this.event = data.eventName;
    }
    
    
    },
    computed:{
    },
    components:{
        WindowBar,
        WindowDialog,
    },


}
</script>

<!-- draggable="true" -->

<template>
  
    <div  v-if="data.show === true"    :ref="data.text"   class="resizable-content"
       
      @mousedown="mouseDown([$event,data.text])"   @mousemove="mouseMove([$event,data.text])"  @mouseup="mouseUp([$event,data.text])" 
      id="wion"
      :style = "{ cursor:`${data.cursor}` , left:`${data.left}px`  , top:`${data.top}px` , minWidth:`${data.width}px`  , height:`${data.height+ 2*data.paddingY + 22 + 2*data.gap}px` , zIndex:`${data.zindex}px`  }"    >

        <WindowBar :data="data" />
        <WindowDialog :data="data" />

    </div> 

</template>







<style>
#wion{
    /* transition: none;
    transition-property: none;  */
    position : absolute;
    /* min-height: auto; */
    background-color: rgba(194,191,191,0.975);
    outline-style: solid;
    z-index: 50;
    border-radius: 1.4px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
    
    
}


</style>