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
    console.log('-----',this.show)
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
    z-index: 5;
}
.faker{
    height:30px;
    width: 100%;
    margin-bottom:bottom;
    position: absolute;
    top:18px;
}

</style>