
<script>
import WindowBarButtons from './WindowBarButtons.vue'

export default {
    props:{
        data:Object,
    },

    methods:{
    },
    components:{
        WindowBarButtons,
    }
}

</script>


<template>

<div   class="windowbar">
    <div class="title">
        {{ data.text }}
    </div>
    <WindowBarButtons :data="data.text" />

</div>


</template>



<style>

.windowbar{
    margin-bottom:auto;
    width:100%;
    height:20px;
    background-color: green;
    position: relative;
    z-index: 1;
}

.title{
    padding-left:6px;
}

.bts{
    position: absolute;
    width:70px;
    height: 20px;
    right:0;
    top:0;
    background-color: aquamarine;
    z-index: 2;
}

</style>