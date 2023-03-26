<script>
import { mapActions } from 'vuex'

export default {
    props:{
        data:String,
    },

    methods:{
        ...mapActions(['closeWindow']),
    },
}

</script>


<template>
<div @click="closeWindow(data)"  class="bts">

</div>

</template>



<style>
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