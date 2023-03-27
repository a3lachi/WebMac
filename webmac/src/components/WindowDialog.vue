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
				"width":`${this.data.width}px`,
				"height":`${this.data.height-20}px`,
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
    Option 2 selected
  </div>



</template>




<style>


</style>