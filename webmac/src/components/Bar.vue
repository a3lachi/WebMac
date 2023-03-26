<script>
export default {
  props: {
    show: Boolean
  },
  methods:{
    doSome() {

    }
  },
  mounted(){

  }
}


</script>


<template>
    <div   v-if="show === true">
        <div class="container-bar">
        </div>
    </div>
    <div class="faker" />

</template>



<style>

.container-bar{
    background-color: blue;
    height:20px;
    width: 100vw;
    /* margin-bottom:bottom; */
    position: absolute;
    top:0;
    left:0;
}
.faker{
    height:2px;
    width: 100%;
    margin-bottom:bottom;
    position: absolute;
    top:17px;
}

</style>