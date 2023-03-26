export default {
    state: {
      tabs: []
    },
    mutations: {
      add(state,payload) {
        state.tabs.push(payload);
        console.log('WSSLAT',state.tabs)
      },
    },
    actions: {
      addTab(context,payload) {
        context.commit('add',payload)
      }
    },
    getters: {
      getTabs(state) {
        return state.tab;
      }
    }
  }