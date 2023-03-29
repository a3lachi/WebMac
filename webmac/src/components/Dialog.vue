<script>
export default {
  props:{
    width: Number,
    height: Number,
    top: Number,
    left: Number,

  }
}

</script>


<template>
<div :style = "{ width:`${this.width}px` , height:`${this.height}px` , top:`${this.top}px` , left:`${this.left}px` }"  class="containerdlg">
  <div class="shadow-stuff"  :style = "{ width:`${this.width}px` , height:`${this.height}px` , top:`${this.top}px` , left:`${this.left}px` }" >
      <div class="wrapper"  :style = "{ width:`${this.width}px` , height:`${this.height}px` , top:`${this.top}px` , left:`${this.left}px` }" >
      </div>
  </div>
</div>
</template>



<style>


.containerdlg{
  opacity: 1;
  position: relative;
  width:100%;
  height:100%;
  background-color: rgba(194,191,191,1);
  opacity: 1;
}

.shadow-stuff {
  position: inherit;
  -moz-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px;
  -webkit-border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px;
  border-radius: 0% 0% 100% 100% / 0% 0% 8px 8px;
  -moz-box-shadow: rgba(0,0,0,.30) 0 2px 3px;
  -webkit-box-shadow: rgba(0,0,0,.30) 0 2px 3px;
  box-shadow: rgba(0,0,0,.30) 0 2px 3px;
  opacity: 1;
}

.wrapper {
  background-color: white;
  border: 1px solid #FFF;
  background: #F6F6F6;
  background: -webkit-gradient(linear,left top,left bottom,color-stop(50%,rgba(249, 249, 249, 1)),color- stop(100%,rgba(240, 240, 240, 1)));
  background: -webkit-linear-gradient(top,rgba(249, 249, 249, 1) 50%,rgba(240, 240, 240, 1) 100%);
  background: -moz-linear-gradient(top,rgba(249, 249, 249, 1) 50%,rgba(240, 240, 240, 1) 100%);
  background: -o-linear-gradient(top,rgba(249, 249, 249, 1) 50%,rgba(240, 240, 240, 1) 100%);
  background: -ms-linear-gradient(top,rgba(249, 249, 249, 1) 50%,rgba(240, 240, 240, 1) 100%);
  background: linear-gradient(top,rgba(249, 249, 249, 1) 50%,rgba(240, 240, 240, 1) 100%);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 2px 1px rgba(255,255,255,.97);
  -moz-box-shadow: inset 0 2px 1px rgba(255,255,255,.97);
  box-shadow: inset 0 2px 1px rgba(255,255,255,.97);
  opacity: 1;
}

</style>