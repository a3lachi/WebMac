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
    <div  class="btn">
        <div class="insdbtn">
            <div id="99">o</div>
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
    padding-left: 6px;
    position: absolute;
    width:70px;
    height: 18px;
    left:0;
    top:0;
    background-color:rgb(63,62,60);
    z-index: 2;
    display: flex;
    flex-direction: row;
    gap:4px;
}

.btn{
    display: flex;
    align-items: center;  
    justify-content: center; 
    width:18px;
    height: 18px;
    background-color: blueviolet;
    border-radius: 10px;
    line-height: 18px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.insdbtn{
    cursor: default;
    line-height: 18px;
    text-align: center; 
}

</style>