<script>
export default {
  props: {
    show: String
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
    <div   v-if="show === 'yes'">
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
}
.faker{
    height:20px;
    width: 100%;
    margin-bottom:bottom;
    position: absolute;
    top:20px;
}

</style>