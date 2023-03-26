export default {
    state: {
      tabs: []
    },
    mutations: {
      add(state,payload) {
        state.tabs.push(payload);
        console.log('WSSLAT',state.tabs)
      },
      pop(state,payload) {
        console.log('CLOSE WINDOW')
        state.tabs = state.tabs.filter((elem)=>(elem!=payload))
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
      }
    }
  }