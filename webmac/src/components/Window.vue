
<script>
import WindowBar from './WindowBar.vue'
import WindowDialog from './WindowDialog.vue';
import { mapActions } from 'vuex'
import { throttle } from 'lodash';

export default {
    props:{
        data: Object,
    },
    methods:{
    ...mapActions(['startDrag','dragOver', 'dragDrop','mainViewWindow','mouseDown','mouseMove','mouseUp']),
    
    
    },
    computed:{
    },
    components:{
        WindowBar,
        WindowDialog,
    },
    created(){
      this.throttledHandleInput = throttle((event, input) => {
        this.dragOver(event, input);
        // event.preventDefault()
      }, 1);
    }

}
</script>

<!-- draggable="true" -->

<template>
    <div  v-if="data.show === true"    :ref="data.text" 
       
      @mousedown="mouseDown([$event,data.text])"   @mousemove="mouseMove([$event,data.text])"  @mouseup="mouseUp([$event,data.text])" 
      id="wion"
      :style = "{ left:`${data.left}px` , top:`${data.top}px` , width:`${data.width}px` , height:`${data.height+ 2*data.paddingY + 22 + 2*data.gap}px` , zIndex:`${data.zindex}px` , cursor:'default' }"    >

        <WindowBar :data="data" />
        <WindowDialog :data="data" />

    </div>  

</template>







<style>
#wion{
    transition: none;
    transition-property: none; 
    position : absolute;
    min-height: auto;
    background-color: rgba(194,191,191,0.975);
    outline-style: solid;
    z-index: 50;
    border-radius: 1.4px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
    
}


</style>