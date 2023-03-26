const WinInfo = (show,left,top,w,h) => {
  return (
    {
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
      About:WinInfo(true,25,30,500,300),
      Resumer:WinInfo(false,40),
    },
    mutations: {
      add(state,payload) {
        state.tabs.push(payload);
      },
      pop(state,payload) {
        console.log('yes')
        state.tabs = state.tabs.filter((elem)=>(elem!=payload))
      },
      closeAbout(state,payload) {
        state.About.show = false ;
      },
      openAbout(state,payload) {
        state.About.show = true ;
      }
    },
    actions: {
      addTab(context,payload) {
        context.commit('add',payload)
      },
      closeTab(context,payload) {
        context.commit('pop',payload)
      }
    },
    getters: {
      getTabs(state) {
        return state.tab;
      },
      getAbout: (state) => (win) => {
        if (win === 'About')
          return state.About ;
      }
    }
  }