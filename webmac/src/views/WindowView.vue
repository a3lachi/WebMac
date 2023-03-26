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

.windows{}

</style>
