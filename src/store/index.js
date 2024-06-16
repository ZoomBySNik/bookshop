import { createStore } from 'vuex'
import {booksModule} from "@/store/booksModule";
import {basketModule} from "@/store/basketModule";

export default createStore({
  state: {
    isLoading: true,
  },
  getters: {

  },
  mutations: {
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
