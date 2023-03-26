<script>
import Icon from '../components/Icon.vue'

export default {
  props: {
    data: Array,
    text: String,
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
        <!-- <Icon text="Education"/> -->
        <Icon :data="this.data[0]" text="About"/>
        <!-- <Icon text="Projects"/>
        <Icon text="APIs"/>
        <Icon text="Links"/>
        <Icon text="Music"/> -->
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