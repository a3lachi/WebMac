<script>

import { mapActions } from 'vuex'


export default {
  props: {
    data: Object,
  },
  methods:{
    ...mapActions(['openWindow']),
    
  },
  
}


</script>


<template>

    <div v-bind:id="data.text+'Icon'" class="containerr">
        <div @click="openWindow(data.text)"   class="tswira"></div>
        <div class="taxt">{{ data.text }}</div>
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