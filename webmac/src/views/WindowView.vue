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
    <Window text="About" left=30 top=20 />

  </div>
</template>


<style>

.windows{
  position : absolute;
  width: 100vw;
  height: 100vh;
  top:0;
  left:0;
}

</style>
