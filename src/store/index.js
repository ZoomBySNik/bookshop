import { createStore } from 'vuex'

export default createStore({
  state: {
    isSidebarOpen: false,
  },
  getters: {
  },
  mutations: {
    toggleSidebarOpen(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  },
  actions: {
  },
  modules: {
  }
})
