
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
        <div   class="win"  :style = "{ left:`${data.left}%` , top:`${data.top}%` , width:`${data.width}px` , height:`${data.height}px` }"      >

                <WindowBar :data="data" />
        </div>
    </div>  

</template>







<style>
.win{
    position : absolute;
    background-color: #c2bfbf;
    outline-style: solid;
    z-index: 5;
    border-radius: 1.4px;
    box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);
}

</style>