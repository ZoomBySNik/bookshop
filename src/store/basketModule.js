export const basketModule = {
    namespaced: true,
    state: () => ({
        booksInBasket: [],
        totalPrice: 0,
    }),
    mutations: {
        appendBook(state, book) {
            state.booksInBasket = [...state.booksInBasket, { ...book, countInBasket: 1 }];
        },
        removeBook(state, book) {
            state.booksInBasket = state.booksInBasket.filter(item => item._id !== book._id);
        },
        increaseBookCount(state, book) {
            const bookInBasket = state.booksInBasket.find(item => item._id === book._id);
            if (bookInBasket) {
                bookInBasket.countInBasket++;
            }
        },
        decreaseBookCount(state, book) {
            const bookInBasket = state.booksInBasket.find(item => item._id === book._id);
            if (bookInBasket && bookInBasket.countInBasket > 1) {
                bookInBasket.countInBasket--;
            }
        },
        setTotalPrice(state) {
            state.totalPrice = state.booksInBasket.reduce((total, book) => {
                return total + (book.price * book.countInBasket);
            }, 0);
        }
    },
    actions: {
        appendBookToBasket({ state, commit }, book) {
            if (!state.booksInBasket.some(item => item._id === book._id)) {
                commit('appendBook', book);
            } else {
                commit('increaseBookCount', book);
            }
            commit('setTotalPrice');
        },
        removeBookFromBasket({ state, commit }, book) {
            if (state.booksInBasket.some(item => item._id === book._id)) {
                commit('removeBook', book);
                commit('setTotalPrice');
            }
        },
        increaseBookCountInBasket({ state, commit }, book) {
            if (state.booksInBasket.some(item => item._id === book._id)) {
                commit('increaseBookCount', book);
                commit('setTotalPrice');
            }
        },
        decreaseBookCountInBasket({ state, commit }, book) {
            if (state.booksInBasket.some(item => item._id === book._id)) {
                commit('decreaseBookCount', book);
                commit('setTotalPrice');
            }
        }
    }
};
