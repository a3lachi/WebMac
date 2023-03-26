const WinInfo = (text,show,left,top,w,h) => {
  return (
    {
      text:text,
      show:show,
      left:left,
      top:top,
      width:w,
      height:h,
    }
  )
}


export default {
    state: {
      tabs: [],
      win:{
        About:WinInfo('About',false,25,30,500,300),
        Resumer:WinInfo('Resumer',false,25,20,700,500),
      },
    },
    mutations: {
      close(state,payload) {
        state.win[payload].show = false ;
        console.log('CLOSING ',payload)
      },
      open(state,payload) {
        state.win[payload].show = true ;
        console.log('OPENING ',payload)
      }
    },
    actions: {
      closeWindow(context,payload) {
        context.commit('close',payload)
      },

      openWindow(context,payload) {
        context.commit('open',payload)
      },
    },
    getters: {
      getWins(state) {
        return state.win
      }
    }
  }