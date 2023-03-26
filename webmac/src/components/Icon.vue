<script>
export default {
  props: {
    text: String,
    src: String
  },
  methods:{
    doSome() {

    }
  },
}
</script>


<template>

    <div class="containerr">
        <div class="tswira"></div>
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
}

.tswira{
    background-color: red;
    height: 60px;
    width: 50px;
}
</style>