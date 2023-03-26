
<script>
import WindowBarButtons from './WindowBarButtons.vue'

export default {
    props:{
        data:Object,
    },

    methods:{
    },
    computed:{
        btnStyles() {
            return {
                "position": "absolute",
                "text-align":"center",
                "right":0,
                "width":`${this.data.width-70}px`,
                "color":'rgb(184,183,180)',
                "font-size":"14px",
                "line-height": "20px",
            };
            }
    },
    components:{
        WindowBarButtons,
    }
}

</script>


<template>

<div   class="windowbar">

    <WindowBarButtons :data="data.text" />
    <div :style="btnStyles" >
        {{ data.text }}
    </div>
    

</div>


</template>



<style>

.windowbar{
    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
    margin-bottom:auto;
    width:100%;
    height:20px;
    background-color: rgb(63,62,60);
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: row;
}




</style>