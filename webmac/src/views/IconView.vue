<script>
import Icon from '../components/Icon.vue'

export default {
  props: {
    data: Object,
  },
  methods:{
  },
  components:{
    Icon,
  }
}
</script>



<template>
    <div class="iqonat">
      <div v-for="(item, index) in data" :key="index">
        <Icon  :data="item"/>
      </div>
    </div>
</template>





<style>

.iqonat{
    width: 10%;
    position:absolute;
    top:15%;
    left:2%;
    display: flex;
    flex-direction: column;
    gap:40px;
    z-index: 10;
}

</style>