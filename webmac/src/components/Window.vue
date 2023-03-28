
<script>
import WindowBar from './WindowBar.vue'
import WindowDialog from './WindowDialog.vue';
import { mapActions } from 'vuex'
export default {
    props:{
        data: Object,
    },
    methods:{
    ...mapActions(['startDrag','dragOver','dragEndHandler','dragDrop','mainViewWindow']),
    
    
    },
    computed:{
    },
    components:{
        WindowBar,
        WindowDialog,
    }

}
</script>



<template>
    <div  v-if="data.show === true" class="draggable-element" draggable="true"  :ref="data.text" 
      @dragstart="startDrag([$event,data.text])" @dragover="dragOver([$event,data.text])" 
      @dragend="dragEndHandler([$event,data.text])"   @drop="dragDrop([$event,data.text])"
      @click="mainViewWindow(data.text)"
      id="wion"
      :style = "{ left:`${data.left}px` , top:`${data.top}px` , width:`${data.width}px` , height:`${data.height}px` , zIndex:`${data.zindex}px` }"    >

        <WindowBar :data="data" />
        <WindowDialog :data="data" />

    </div>  

</template>







<style>
#wion{
    transition: none;
    transition-property: none; 
    position : absolute;
    top:20px;
    opacity: 0.975;
    background-color: #c2bfbf;
    outline-style: solid;
    z-index: 50;
    border-radius: 1.4px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
    
}

</style>