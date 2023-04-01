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

  <!-- <div id="pwd" >
    <input id="pwdd" type="password" required @click="Login($event)">
  </div> -->
  <form method="get" action="/search" id="search">
    <input name="q" type="password" size="40" required placeholder="Enter Password" @click="Login($event)" />
  </form>

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

  background-image: url('/start.jpeg');
  color:#e2e8f0 ;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;

}
#profileImg{
  margin-bottom: 27px;
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
  margin-bottom: 9px;
  
}

/* #pwd {
  background-color: white;
  opacity: 0.4;
  color: #f8fafc ;
  border-radius: 4px;
  
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
input, select, textarea{
    color: #1e293b;
} */

/* #pwdd {
  background: url('/login.svg') no-repeat right ;
  cursor: default;
  height:20px;
  width: 140px;
  border-radius: 4px;
} */

textarea:focus, input:focus{
    outline: none;
}

#lgin {
  height:20px;
  width:20px;
  
  
}

#search input[type="password"] {
    cursor:default ;
    background: url('/login.svg') no-repeat right ;
    background-position:  113px 3.5px;
    background-size: 20px 20px;

    /* background: url(search-dark.png) no-repeat 10px 6px #444; */
    
    background-color: #f1f5f9;
    opacity: 0.4;
    border: 0 none;
    font: bold 12px Arial,Helvetica,Sans-serif;
    /* color: white; */
    width: 100px;
    padding: 6px 25px 6px 10px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    /* text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3); */
    -webkit-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset;
    -moz-box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) inset;
    -webkit-transition: all 0.7s ease 0s;
    -moz-transition: all 0.7s ease 0s;
    -o-transition: all 0.7s ease 0s;
    transition: all 0.7s ease 0s;
    padding-right: 30px;
    }
    

#search input[type="password"]:focus {
    background-position:  163px 3.5px;
    width: 150px;
    }
</style>
