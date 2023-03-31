<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {
      message: "Touch ID or Enter Password",
      userName:'Farawa'
    }
  },

  components:{

  },
  methods:{
    ...mapActions(['Login']),
  },

}

</script>

<template>
<div id="strt">
  <div id="profileImg">
    <img id="profile" src="prflimg.png" />
  </div>

  <div id="usrnm">
    {{ userName }}
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
  background-image: url('start.jpeg');
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
  background: url('login.svg') no-repeat right ;
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
