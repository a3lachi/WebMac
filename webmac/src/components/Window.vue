


<script>

import { mapActions } from 'vuex'

export default {
    props:{
        show: Boolean,
        text: String,
        left: String,
        top: String,

    },
    methods:{
        ...mapActions(['closeTab']),
        handleClick(event) {
            this.closeTab(this.text)
        },
    },

}
</script>



<template>
    <div   v-if="show === true">
        <div  @click="handleClick"   v-bind:class="text+'wincntr'"     id="win"      :style = "{ left:`${left}%` , top:`${top}%` }"      >

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
    width: 40vw;
    height: 30vh;
    background-color: white;
    outline-style: solid;
    z-index: 5;
}
</style>