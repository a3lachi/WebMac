

<script>
export default {
    props:{
        data:Object,
    },
    
}
</script>



<template>
<div   class="aboutdialog">
    {{ data.text }} koool
</div>


</template>


<style>

.aboutdialog{
    opacity: 1;
    width: 100%;
    height:100%
}

</style>