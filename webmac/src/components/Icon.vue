<script>

import { mapActions } from 'vuex'


export default {
  props: {
    text: String,
    src: String
  },
  methods:{
    ...mapActions(['addTab']),
    handleClick (event) {
      const id = event.target.parentElement.id.split('Icon')[0]
      this.addTab(id);
    },
    
  },
  
}


</script>


<template>

    <div v-bind:id="text+'Icon'" class="containerr">
        <div @click="handleClick"   class="tswira"></div>
        <div class="taxt">{{ text }}</div>
    </div>

</template>




<style>

.containerr{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:5px;
    align-items: center;
}


.taxt{
    color:white;
    font-family: 'Courier New', Courier, monospace;
    cursor: default;
}

.tswira{
    background-color: red;
    height: 60px;
    width: 50px;
}
</style>