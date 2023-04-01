<script>
import { mapActions } from 'vuex'






// const profilImg = localStorage.getItem('profil');
export default {
  data(){
    return {
      message: "Touch ID or Enter Password",
      userName:{
        '1':'A3lachi',
        '2':'Farawa',
        '3':'Mli7',
      },
      pImg : 1,
    }
  },

  components:{

  },
  methods:{
    ...mapActions(['Login']),
    prfImg() {
      var pimg = localStorage.getItem('profil');
      console.log('---> ',pimg)
      if (pimg === null ){
        localStorage.setItem('profil', 1);
      }
      else {
        this.pImg =1+ (pimg+1)%3
        localStorage.setItem('profil', this.pImg);
      }
    },
  },
  created() {
    this.prfImg() ;
    // this.pImg = 3;
  },

}

</script>

<template>
<div id="strt">
  <div id="profileImg">
    <img id="profile" :src="`/prflimg${pImg}.png`" />
  </div>

  <div id="usrnm">
    {{ userName[this.pImg] }}
  </div>

  <div id="pwd" >
    <input id="pwdd" type="password" required @click="Login($event)">
    <!-- <div id="lgin"><img  id="lgin" src="login.svg" /></div> -->
  </div>

  <div id="strtmsg">
    {{ message }}
  </div>

</div>


</template>

<style>
#strt {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap:10px;
  background-image: url('/start.jpeg');
  color:#e2e8f0 ;
}

#profile {
  width: 200px;
  height: 200px;
  filter: drop-shadow(0 0 0.55rem white);
}

#strtmsg {
  padding-top: 5px;
  font-size: 12px;
}

#usrnm {
  font-size: 25px;
  
}

#pwd {
  background-color: white;
  opacity: 0.4;
  color: #f8fafc ;
  border-radius: 4px;
  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
input, select, textarea{
    color: #1e293b;
}

#pwdd {
  background: url('/login.svg') no-repeat right ;
  cursor: default;
  height:20px;
  width: 140px;
  border-radius: 4px;
}

textarea:focus, input:focus{
    outline: none;
}

#lgin {
  height:20px;
  width:20px;
  
}
</style>
