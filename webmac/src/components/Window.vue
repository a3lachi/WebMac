
<script>
import WindowBar from './WindowBar.vue'
export default {
    props:{
        data: Object,
    },
    methods:{
        
    },
    computed:{
    },
    components:{
        WindowBar,
    }

}
</script>



<template>
    <div   v-if="data.show === true">
        <div   id="win"  :style = "{ left:`${data.left}%` , top:`${data.top}%` , width:`${data.width}px` , height:`${data.height}px` }"      >

            <div class="win"  >
                <WindowBar :data="data" />
            </div>

        </div>
    </div>  

</template>







<style>
#win{
    position : absolute;
    background-color: white;
    outline-style: solid;
    z-index: 5;
}
</style>