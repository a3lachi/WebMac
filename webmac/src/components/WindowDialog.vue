<script>
import AboutDialog from './AboutDialog.vue'

export default {
	props:{
			data:Object,
	},
	components:{
			AboutDialog,
	},
	computed:{
		dialogStyles() {
			return {
				"position": "absolute",
				"text-align":"center",
				"right":0,
				"top":"20px",
				"min-height":"auto" ,
				"padding-top":"20px",
				"padding-bottom":"20px",
				"opacity": 1,
				"cursor":"default",
				"width":`${this.data.width}px`,
				// "height":`${this.data.height-20}px`,
				":active":{
					"cursor":"none"
				}
			};
		}
  },
}
</script>



<template>
	<div v-if="data.text === 'About'" :style="dialogStyles"  >
		<AboutDialog :data="data" />
	</div>
	<div v-else-if="data.text === 'Contact'"  :style="dialogStyles" >
		Contactsss   
  </div>



</template>




<style>


</style>