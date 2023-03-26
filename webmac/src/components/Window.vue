
<script>

import { mapActions } from 'vuex'

export default {
    props:{
        showwin: Boolean,
        text: String,
        left: Number,
        top: Number,
        width: Number,
        height: Number,

    },
    data(){
        return {
            show: this.showwin
        }
    },
    methods:{
        ...mapActions(['closeTab']),
        handleClick(event) {
            this.show = false
        },
    },

}
</script>



<template>
    <div   v-if="show === true">
        <div  @click="handleClick"   v-bind:class="text+'wincntr'"     id="win"      :style = "{ left:`${left}%` , top:`${top}%` , width:`${width}px` , height:`${height}px` }"      >

            <div class="win"  >
                {{ text }}
                {{ show }}
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