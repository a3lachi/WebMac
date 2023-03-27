
<script>
import WindowBar from './WindowBar.vue'
import WindowDialog from './WindowDialog.vue';
import { mapActions } from 'vuex'
export default {
    props:{
        data: Object,
    },
    methods:{
    ...mapActions(['startDrag','dragOver']),
    
    
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
    <div  v-if="data.show === true" class="draggable-element" draggable="true"  
     @dragstart="startDrag([$event,data.text])" @dragover="dragOver($event,data.text)"
    id="winn"
     :style = "{ left:`${data.left}%` , top:`${data.top}%` , width:`${data.width}px` , height:`${data.height}px` , zIndex:`${data.zindex}px` }"    >

        <WindowBar :data="data" />
        <WindowDialog :data="data" />

    </div>  

</template>







<style>
#winn{
    position : absolute;
    top:20px;
    background-color: #c2bfbf;
    outline-style: solid;
    z-index: 5;
    border-radius: 1.4px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
}

</style>