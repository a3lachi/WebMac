


<script>

export default {
    props:{
        show: Boolean,
        text: String,
        left: Number,
        top: Number,

    },
    methods:{

    },

}
</script>



<template>
<div v-bind:class="text+'windowcontainer'" id="wndw" 
    :style = "{ left:`${left}%` , top:`${top}%` }"
>
    <div class="window'">
        {{ text }}
        {{ left }}
    </div>

</div>


</template>







<style>
#wndw{
    position : absolute;
    width: 40vw;
    height: 30vh;
    background-color: white;
    outline-style: solid;
}
</style>