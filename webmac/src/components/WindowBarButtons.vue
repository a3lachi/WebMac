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
<div   class="bts">
    <div  @click="closeWindow(data)"  class="btn">
        <div class="insdbtn">
            X
        </div>
        
    </div>
    <div class="btn">
        <div class="insdbtn">
            
        </div>
    </div>
    <div class="btn">
        <div class="insdbtn">
            -
        </div>
    </div>
    

</div>

</template>



<style>
.bts{
    position: absolute;
    width:70px;
    height: 20px;
    left:0;
    top:0;
    background-color: aquamarine;
    z-index: 2;
    display: flex;
    flex-direction: row;
    gap:4px;
}

.btn{
    display: flex;
    align-items: center;  
    justify-content: center; 
    width:100%;
    background-color: blueviolet;
}

.insdbtn{
    display: inline-block;
}

</style>