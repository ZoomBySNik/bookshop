import { createStore } from 'vuex'
import {booksModule} from "@/store/booksModule";

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
    books: booksModule,
  }
})
