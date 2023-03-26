export default {
    state: {
      tab: 0
    },
    mutations: {
      set(state,payload) {
        state.tab=payload;
      },
    },
    actions: {
      setTab(context,payload) {
        context.commit('set',payload)
      }
    },
    getters: {
      getTab(state) {
        return state.tab;
      }
    }
  }