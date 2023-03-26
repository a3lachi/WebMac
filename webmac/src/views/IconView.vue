<script>
import Icon from '../components/Icon.vue'

export default {
  props: {
    text: String
  },
  methods:{
    doSome() {

    }
  },
  components:{
    Icon,
  }
}
</script>



<template>
    <div class="iqonat">
        <Icon text="Music"/>
        <div>{{ text }}</div>
        <div>{{ text }}</div>
        <div>{{ text }}</div>
    </div>
</template>





<style>

.iqonat{
    width: 100%;
    height:100vh;
    color:red;
    position:absolute;
    top:15%;
    left:2%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap:40px;
}

</style>