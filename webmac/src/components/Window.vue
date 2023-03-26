
<script>

import { mapActions , mapGetters , mapState } from 'vuex'

export default {
    props:{
        showWin: Boolean,
        text: String,
        left: Number,
        top: Number,
        width: Number,
        height: Number,
        data: Object,

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
    computed:{
        ...mapState({
            win: state => state.win
            }),
        ...mapGetters([ 'getAbout']),
        Abouts() {
            return this.getAbout('About')
        }
    }

}
</script>



<template>
    <div   v-if="data.show === true">
        <div  @click="handleClick"   v-bind:class="text+'wincntr'"     id="win"      :style = "{ left:`${left}%` , top:`${top}%` , width:`${width}px` , height:`${height}px` }"      >

            <div class="win"  >
                {{ data.show }}
                {{ Abouts.show }}
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