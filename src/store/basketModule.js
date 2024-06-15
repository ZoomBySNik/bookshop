export const basketModule = {
    namespaced: true,
    state: () => ({
        booksInBasket: [],
    }),
    mutations: {
        appendBook(state, book) {
            if(!state.booksInBasket.includes(book)){
                state.booksInBasket = [...state.booksInBasket, book];
            }
        },
        removeBook(state, book) {
            if(state.booksInBasket.includes(book)){
                state.booksInBasket = [...state.booksInBasket.filter(item => item._id !== book._id)];
            }
        }
    },
    actions: {

    },
};
