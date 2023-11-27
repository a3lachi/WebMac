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
				"display": "inline-block",
				"opacity": 1,
				"cursor":`${this.data.cursor}`,
				"min-width":`${this.data.width}px`,
				// "height":`${this.data.height-20}px`,
			};
		}
  },
}
</script>



<template>
	<div class="dlg" v-if="data.text === 'About'" :style="dialogStyles"  >
		<AboutDialog :data="data" />
	</div>
	<div class="contact" v-else-if="data.text === 'Contact'"  :style="dialogStyles" >


  </div>



</template>




<style>
.dlg{
	opacity: 1;
	width: 100%;
	height:auto;
	min-height:auto;
	display: flex ;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap:50px;
}
.contact{
    height:auto;
	min-height:auto;
	display: flex ;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap:50px;
}
</style>