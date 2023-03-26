
<script>
import { mapActions } from 'vuex'
export default {
    props:{
        data: Object,
    },
    methods:{
        ...mapActions(['closeWindow']),
    },
    computed:{
    }

}
</script>



<template>
    <div   v-if="data.show === true">
        <div  @click="closeWindow(data.text)"     id="win"      :style = "{ left:`${data.left}%` , top:`${data.top}%` , width:`${data.width}px` , height:`${data.height}px` }"      >

            <div class="win"  >
                {{ data }}
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