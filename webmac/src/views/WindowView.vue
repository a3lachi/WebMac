<script>
import Window from '../components/Window.vue';

export default {
  props:{
    data: Object,
  },
  methods:{
  },
  computed: {
  },
  components:{
        Window
    },
}
</script>

<template>
  <div class="windows">
    <div class="fakerwin"></div>
    <div v-for="(item, index) in data" :key="index">
      <Window :data="item"  />
    </div>
    

  </div>
</template>


<style>

.windows{
  position : absolute;
  width: 100vw;
  height: 100vh;
  top:22px;
  left:0;
}

/* .fakerwin{
  position : absolute;
  width: 100vw;
  height: 1px;
  top:0px;

} */

.qq{
  color:white;
}

</style>
