<script>

import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getTabs']),
    tabs() {
      return this.getTabs
    }
  }
}
</script>

<template>
  <div class="windows">


  </div>
</template>


<style>

.windows{
  position : absolute;
  width: 40vw;
  height: 30vh;
  background-color: white;
  outline-style: solid;
  top:30%;
  left:20%
}

</style>
