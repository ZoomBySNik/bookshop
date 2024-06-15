import { createStore } from 'vuex'
import {booksModule} from "@/store/booksModule";
import {basketModule} from "@/store/basketModule";

export default createStore({
  state: {
    isSidebarOpen: false,
    isLoading: true,
  },
  getters: {
  },
  mutations: {
    toggleSidebarOpen(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    toggleLoading(state) {
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
  },
  modules: {
    books: booksModule,
    basket: basketModule,
  }
})
