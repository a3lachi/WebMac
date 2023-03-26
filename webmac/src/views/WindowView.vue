<script>

import { mapGetters } from 'vuex'
import Window from '../components/Window.vue';

export default {
  computed: {
    ...mapGetters(['getTabs']),
    tabs() {
      return this.getTabs
    }
  },
  components:{
        Window
    },
}
</script>

<template>
  <div class="windows">
    <div class="fakerwin"></div>
    <Window text="About" left=30 top=20  />

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

</style>
