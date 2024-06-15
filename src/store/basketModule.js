export const basketModule = {
    namespaced: true,
    state: () => ({
        booksInBasket: [],
        totalPrice: 0,
    }),
    mutations: {
        appendBook(state, book) {
            state.booksInBasket = [...state.booksInBasket, book];
        },
        removeBook(state, book) {
            state.booksInBasket = [...state.booksInBasket.filter(item => item._id !== book._id)];
        },
        setTotalPrice(state){
            state.totalPrice = state.booksInBasket.reduce((total, book) => {
                return total + book.price;
            }, 0);
        }
    },
    actions: {
        appendBookToBasket({state, commit}, book){
            if(!state.booksInBasket.includes(book)){
                commit('appendBook', book);
                commit('setTotalPrice');
            }
        },
        removeBookFromBasket({state, commit}, book){
            if(state.booksInBasket.includes(book)){
                commit('removeBook', book);
                commit('setTotalPrice');
            }
        }
    },
};
