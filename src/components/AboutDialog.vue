

<script>
import Dialog from './Dialog.vue'
export default {
    props:{
        data:Object,
    },
    computed:{
        brr(){
            console.log('oui')
        }
    },

    components:{
        Dialog,
    }
    
}

</script>



<template>
    <div class="aboutdg">
        <Dialog :width="200" :height="90"  text=""   >
        </Dialog> 

        <Dialog :width="200" :height="100" text=""   >
            
        </Dialog> 
        <!-- <Dialog :width="200" :height="100"     /> -->
    </div>
    



</template>


<style>

.aboutdialog{
    opacity: 1;
    width: 100%;
    height:auto;
    min-height:auto;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:20px;
}


.aboutdg{
    min-height:auto;
    display: flex ;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:20px;
}
</style>