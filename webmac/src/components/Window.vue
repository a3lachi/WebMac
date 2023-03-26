


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
        handleClick() {
            this.closeTab('rrrr')
        },
    },

}
</script>



<template>

    <div    v-bind:class="text+'wincntr'"     id="win"      :style = "{ left:`${left}%` , top:`${top}%` }"      >

        <div @click="handleClick" class="win"  >
            {{ text }}
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
}
</style>