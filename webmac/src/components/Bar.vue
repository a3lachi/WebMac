<script>
export default {
  props: {
    show: Boolean
  },
  methods:{
    doSome() {

    }
  },
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
    width: 100%;
    margin-bottom:bottom;
    position: absolute;
    top:0;
    z-index: 2;
}
.faker{
    height:1px;
    width: 100%;
    margin-bottom:bottom;
    position: absolute;
    top:18px;
}

</style>