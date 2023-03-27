

<script>
export default {
    props:{
        data:Object,
    },
    
}
</script>



<template>
<div   class="aboutdialog">
    {{ data.text }}
</div>


</template>


<style>

.aboutdialog{
    width: 100%;
    height:100%
}

</style>